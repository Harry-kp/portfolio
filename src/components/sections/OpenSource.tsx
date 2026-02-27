"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, GitMerge } from "lucide-react";
import type { GitHubPR, ContributionStats } from "@/lib/github";

const GITHUB_USERNAME = "Harry-kp";

interface OpenSourceProps {
  contributions: {
    prs: GitHubPR[];
    stats: ContributionStats;
  };
}

function groupByRepo(prs: GitHubPR[]) {
  const map = new Map<string, { prs: GitHubPR[]; url: string }>();
  for (const pr of prs) {
    const existing = map.get(pr.repo_full_name);
    if (existing) {
      existing.prs.push(pr);
    } else {
      map.set(pr.repo_full_name, {
        prs: [pr],
        url: `https://github.com/${pr.repo_full_name}`,
      });
    }
  }
  return [...map.entries()]
    .sort((a, b) => b[1].prs.length - a[1].prs.length)
    .slice(0, 6);
}

export default function OpenSource({ contributions }: OpenSourceProps) {
  const grouped = groupByRepo(contributions.prs);
  const hasPRs = grouped.length > 0;

  return (
    <section id="opensource" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
            Open Source
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Community contributions
          </h2>
          {hasPRs && (
            <p className="text-text-secondary mt-3 text-sm">
              {contributions.stats.totalPRs} merged PRs across{" "}
              {contributions.stats.repos.length} repositories
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {grouped.map(([repoName, { prs, url }], index) => (
            <motion.a
              key={repoName}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_-5px] hover:shadow-accent/10"
            >
              <div className="flex items-center justify-between mb-4">
                <Github className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
                <ExternalLink className="w-4 h-4 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors mb-2 truncate">
                {repoName}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                {prs[0].title}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                <GitMerge className="w-3 h-3 text-green-500" />
                {prs.length} merged PR{prs.length > 1 ? "s" : ""}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            <Github className="w-4 h-4" />
            View all contributions on GitHub &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
