"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Database, Brain } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Rust", "Go", "Python", "Ruby", "TypeScript", "C++"],
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: ["LLM Pipelines", "Prompt Engineering", "VertexAI"],
  },
  {
    title: "Infrastructure",
    icon: Cloud,
    skills: ["Kubernetes", "Docker", "AWS", "GCP", "Helm", "Kafka"],
  },
  {
    title: "Data",
    icon: Database,
    skills: ["PostgreSQL", "Redis", "Prometheus", "Grafana", "BigQuery", "gRPC"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <category.icon className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.03,
                    }}
                    className="px-3 py-1.5 text-sm font-mono text-text-secondary border border-border rounded-lg hover:border-accent/40 hover:text-accent transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {["Rails", "OpenVPN", "WireGuard", "Tauri", "Ratatui"].map(
            (skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.4 + index * 0.05,
                }}
                className="px-3 py-1.5 text-xs font-mono text-text-secondary/60 border border-border/50 rounded"
              >
                {skill}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
