"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { GitPullRequest, ExternalLink, Github, Star, GitFork, Loader2 } from "lucide-react";

interface GitHubPR {
  id: number;
  title: string;
  html_url: string;
  repo_name: string;
  repo_owner: string;
  repo_full_name: string;
  created_at: string;
  labels: { name: string; color: string }[];
}

interface ContributionStats {
  totalPRs: number;
  mergedPRs: number;
  repos: string[];
}

const GITHUB_USERNAME = "Harry-kp";

// Notable contributions to highlight (manually curated for reliability)
const NOTABLE_CONTRIBUTIONS = [
  {
    repo: "maybe-finance/maybe",
    description: "Personal finance app - contributed bug fixes and features",
    url: "https://github.com/maybe-finance/maybe",
    stars: "35k+",
  },
  {
    repo: "rubyforgood",
    description: "Open source projects for social good organizations",
    url: "https://github.com/rubyforgood",
    stars: "Community",
  },
  {
    repo: "LeetCode",
    description: "Algorithm solutions and problem discussions",
    url: "https://leetcode.com/u/Harshitc007/",
    stars: "700+ solved",
  },
];

export default function OpenSource() {
  const [prs, setPrs] = useState<GitHubPR[]>([]);
  const [stats, setStats] = useState<ContributionStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const searchQuery = `author:${GITHUB_USERNAME} is:pr is:merged -user:${GITHUB_USERNAME}`;
        const response = await fetch(
          `https://api.github.com/search/issues?q=${encodeURIComponent(searchQuery)}&sort=created&order=desc&per_page=10`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("API error");
        }

        const data = await response.json();

        const fetchedPrs: GitHubPR[] = data.items.map((item: any) => {
          const repoUrlParts = item.repository_url.split("/");
          const repo_owner = repoUrlParts[repoUrlParts.length - 2];
          const repo_name = repoUrlParts[repoUrlParts.length - 1];

          return {
            id: item.id,
            title: item.title,
            html_url: item.html_url,
            repo_name,
            repo_owner,
            repo_full_name: `${repo_owner}/${repo_name}`,
            created_at: item.created_at,
            labels: item.labels || [],
          };
        });

        const uniqueRepos = [...new Set(fetchedPrs.map((pr) => pr.repo_full_name))];
        setStats({
          totalPRs: data.total_count,
          mergedPRs: fetchedPrs.length,
          repos: uniqueRepos,
        });
        setPrs(fetchedPrs);
      } catch (err) {
        console.error("Error fetching contributions:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section id="opensource" className="py-20 px-4 sm:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
            Open Source Contributions
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-text-secondary">
            Contributing to the developer community through open source projects
          </p>
        </motion.div>

        {/* Stats */}
        {stats && stats.totalPRs > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 mb-10"
          >
            <Card className="text-center py-6">
              <div className="text-3xl font-bold text-accent mb-1">{stats.totalPRs}+</div>
              <div className="text-sm text-text-secondary">Merged PRs</div>
            </Card>
            <Card className="text-center py-6">
              <div className="text-3xl font-bold text-accent mb-1">{stats.repos.length}+</div>
              <div className="text-sm text-text-secondary">Repositories</div>
            </Card>
            <Card className="text-center py-6">
              <div className="text-3xl font-bold text-green-600 mb-1">Active</div>
              <div className="text-sm text-text-secondary">Contributor</div>
            </Card>
          </motion.div>
        )}

        {/* Notable Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-lg font-semibold text-text-primary mb-4">Notable Contributions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {NOTABLE_CONTRIBUTIONS.map((contrib, index) => (
              <motion.div
                key={contrib.repo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hoverable className="h-full">
                  <a
                    href={contrib.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Github className="w-5 h-5 text-text-secondary" />
                        <span className="font-medium text-text-primary">{contrib.repo}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-text-secondary" />
                    </div>
                    <p className="text-sm text-text-secondary mb-3">{contrib.description}</p>
                    <div className="flex items-center gap-1 text-xs text-text-secondary">
                      <Star className="w-3 h-3" />
                      <span>{contrib.stars}</span>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent PRs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-text-primary mb-4">Recent Merged Pull Requests</h3>
          
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 text-accent animate-spin" />
              <span className="ml-2 text-text-secondary">Fetching from GitHub...</span>
            </div>
          ) : error || prs.length === 0 ? (
            <Card className="text-center py-8">
              <GitPullRequest className="w-10 h-10 text-text-secondary mx-auto mb-3" />
              <p className="text-text-secondary mb-4">
                View all my contributions on GitHub
              </p>
              <Button
                variant="secondary"
                href={`https://github.com/${GITHUB_USERNAME}?tab=overview`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                View GitHub Profile
              </Button>
            </Card>
          ) : (
            <div className="space-y-3">
              {prs.slice(0, 5).map((pr, index) => (
                <motion.a
                  key={pr.id}
                  href={pr.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background hover:border-accent/50 hover:shadow-sm transition-all group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <GitPullRequest className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-accent bg-blue-50 px-2 py-0.5 rounded">
                        {pr.repo_full_name}
                      </span>
                      <span className="text-xs text-text-secondary">
                        {formatDate(pr.created_at)}
                      </span>
                    </div>
                    <p className="text-text-primary font-medium truncate group-hover:text-accent transition-colors">
                      {pr.title}
                    </p>
                    {pr.labels.length > 0 && (
                      <div className="flex gap-1 mt-2">
                        {pr.labels.slice(0, 3).map((label) => (
                          <span
                            key={label.name}
                            className="px-2 py-0.5 text-xs rounded-full"
                            style={{
                              backgroundColor: `#${label.color}20`,
                              color: `#${label.color}`,
                            }}
                          >
                            {label.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-text-secondary flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button
            variant="primary"
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            View All Contributions on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

