"use client";

import { motion } from "framer-motion";
import { Star, GitFork, Activity } from "lucide-react";

interface GitHubStatsProps {
  stars?: number;
  prs?: number;
  contributions?: number;
}

export default function GitHubStats({ stars, prs, contributions }: GitHubStatsProps) {
  const stats = [
    { icon: Star, label: "Stars", value: stars, color: "text-amber-400" },
    { icon: GitFork, label: "PRs Merged", value: prs, color: "text-emerald-400" },
    { icon: Activity, label: "Contributions", value: contributions, color: "text-blue-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-wrap gap-6 mt-8"
    >
      {stats.map((stat, index) => (
        <div key={stat.label} className="flex items-center gap-2">
          <stat.icon className={`w-4 h-4 ${stat.color}`} />
          <div>
            <span className="text-lg font-bold text-text-primary">
              {stat.value?.toLocaleString() ?? "—"}
            </span>
            <span className="text-xs text-text-secondary ml-1">{stat.label}</span>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
