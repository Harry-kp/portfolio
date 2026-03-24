"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Heart } from "lucide-react";

const CURRENT_CONTRIBUTIONS = [
  {
    org: "rust-lang",
    repo: "rust",
    description: "Rust language core contributions",
    prs: 2,
    link: "https://github.com/rust-lang/rust/pulls?q=author%3AHarry-kp",
    highlights: ["Compiler improvements", "Documentation updates"],
  },
  {
    org: "tokio-rs",
    repo: "tokio",
    description: "Rust async runtime for building reliable network applications",
    prs: 1,
    link: "https://github.com/tokio-rs/tokio/pulls?q=author%3AHarry-kp",
    highlights: ["Runtime optimizations"],
  },
  {
    org: "clap-rs",
    repo: "clap",
    description: "Command-line argument parser for Rust",
    prs: 1,
    link: "https://github.com/clap-rs/clap/pulls?q=author%3AHarry-kp",
    highlights: ["ValueCompleter enhancements"],
  },
];

export default function CurrentlyContributing() {
  return (
    <section id="contributing" className="py-24 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
            <Heart className="w-3 h-3" />
            Active Contributions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Currently contributing to
          </h2>
          <p className="text-text-secondary mt-3 text-sm max-w-2xl">
            Actively contributing to foundational open-source projects in the Rust ecosystem. 
            Focused on compiler improvements, async runtime enhancements, and developer tooling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CURRENT_CONTRIBUTIONS.map((contribution, index) => (
            <motion.a
              key={`${contribution.org}/${contribution.repo}`}
              href={contribution.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_-5px] hover:shadow-accent/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
                  <span className="text-xs font-mono text-text-secondary">
                    {contribution.org}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">
                {contribution.repo}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                {contribution.description}
              </p>
              <div className="space-y-1">
                {contribution.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-2 text-xs text-text-secondary"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {highlight}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-xs font-mono text-accent">
                  {contribution.prs} PR{contribution.prs > 1 ? "s" : ""} merged
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
