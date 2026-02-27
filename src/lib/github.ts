const GITHUB_USERNAME = "Harry-kp";

export interface GitHubPR {
  id: number;
  title: string;
  html_url: string;
  repository_url: string;
  repo_name: string;
  repo_owner: string;
  repo_full_name: string;
  state: string;
  merged_at: string | null;
  created_at: string;
  labels: { name: string; color: string }[];
}

export interface ContributionStats {
  totalPRs: number;
  mergedPRs: number;
  repos: string[];
}

// Fetch merged PRs to repositories the user doesn't own
export async function fetchOpenSourceContributions(): Promise<{
  prs: GitHubPR[];
  stats: ContributionStats;
}> {
  try {
    // Search for merged PRs by the user to repos they don't own
    const searchQuery = `author:${GITHUB_USERNAME} is:pr is:merged -user:${GITHUB_USERNAME}`;
    const response = await fetch(
      `https://api.github.com/search/issues?q=${encodeURIComponent(searchQuery)}&sort=created&order=desc&per_page=20`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Add token if available for higher rate limits
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      console.error("GitHub API error:", response.status);
      return { prs: [], stats: { totalPRs: 0, mergedPRs: 0, repos: [] } };
    }

    const data = await response.json();
    
    const prs: GitHubPR[] = data.items.map((item: any) => {
      // Extract repo info from repository_url
      const repoUrlParts = item.repository_url.split("/");
      const repo_owner = repoUrlParts[repoUrlParts.length - 2];
      const repo_name = repoUrlParts[repoUrlParts.length - 1];

      return {
        id: item.id,
        title: item.title,
        html_url: item.html_url,
        repository_url: item.repository_url,
        repo_name,
        repo_owner,
        repo_full_name: `${repo_owner}/${repo_name}`,
        state: item.state,
        merged_at: item.pull_request?.merged_at || null,
        created_at: item.created_at,
        labels: item.labels || [],
      };
    });

    // Calculate stats
    const uniqueRepos = [...new Set(prs.map((pr) => pr.repo_full_name))];
    const stats: ContributionStats = {
      totalPRs: data.total_count,
      mergedPRs: prs.length,
      repos: uniqueRepos,
    };

    return { prs, stats };
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return { prs: [], stats: { totalPRs: 0, mergedPRs: 0, repos: [] } };
  }
}

export async function fetchProjectStars(
  githubUrls: string[]
): Promise<Record<string, number>> {
  const results: Record<string, number> = {};

  await Promise.all(
    githubUrls.map(async (url) => {
      try {
        const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return;
        const [, owner, repo] = match;
        const res = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
              ...(process.env.GITHUB_TOKEN && {
                Authorization: `token ${process.env.GITHUB_TOKEN}`,
              }),
            },
            next: { revalidate: 3600 },
          }
        );
        if (res.ok) {
          const data = await res.json();
          results[url] = data.stargazers_count ?? 0;
        }
      } catch {
        // silently skip failed requests
      }
    })
  );

  return results;
}

// Fallback data for when API fails or for SSG
export const FALLBACK_CONTRIBUTIONS = {
  prs: [
    {
      id: 1,
      title: "Open Source Contributor",
      html_url: `https://github.com/${GITHUB_USERNAME}`,
      repository_url: "",
      repo_name: "Various Projects",
      repo_owner: "Open Source",
      repo_full_name: "Multiple Repositories",
      state: "closed",
      merged_at: null,
      created_at: new Date().toISOString(),
      labels: [],
    },
  ],
  stats: {
    totalPRs: 0,
    mergedPRs: 0,
    repos: ["maybe-finance/maybe", "leetcode", "rubyforgood"],
  },
};

