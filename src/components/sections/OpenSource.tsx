"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";

const GITHUB_USERNAME = "Harry-kp";

const contributions = [
  {
    repo: "maybe-finance/maybe",
    description: "Personal finance OS — contributed bug fixes and features to the Rails backend.",
    url: "https://github.com/maybe-finance/maybe",
    stars: "35k+",
  },
  {
    repo: "rubyforgood",
    description: "Open source projects for social good organizations. Community contributor.",
    url: "https://github.com/rubyforgood",
    stars: "Community",
  },
  {
    repo: "LeetCode",
    description: "700+ algorithm solutions with explanations and discussion contributions.",
    url: "https://leetcode.com/u/Harshitc007/",
    stars: "700+ solved",
  },
];

export default function OpenSource() {
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {contributions.map((contrib, index) => (
            <motion.a
              key={contrib.repo}
              href={contrib.url}
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
              <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">
                {contrib.repo}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {contrib.description}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                <Star className="w-3 h-3" />
                {contrib.stars}
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
