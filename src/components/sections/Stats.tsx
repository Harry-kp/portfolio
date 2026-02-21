"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { Briefcase, Code, FolderGit2, Building2 } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "4+",
    label: "Years Experience",
  },
  {
    icon: Code,
    value: "700+",
    label: "LeetCode Problems",
  },
  {
    icon: FolderGit2,
    value: `${DATA.projects.length}+`,
    label: "Projects Built",
  },
  {
    icon: Building2,
    value: `${DATA.work.length}`,
    label: "Companies",
  },
];

export default function Stats() {
  return (
    <section className="py-12 border-y border-border bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-3">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

