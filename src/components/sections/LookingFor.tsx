"use client";

import { motion } from "framer-motion";
import { Target, Briefcase, MapPin, Zap } from "lucide-react";

const TARGET_ROLES = [
  "Backend Engineer — AI / LLM",
  "Senior Backend Engineer",
  "Distributed Systems Engineer",
  "Developer Tooling / Platform Engineer",
];

const PREFERENCES = [
  {
    icon: Briefcase,
    title: "Work Style",
    items: ["Remote-first", "Hybrid (EU / India)", "EU timezone overlap"],
  },
  {
    icon: MapPin,
    title: "Location",
    items: ["Germany · Netherlands", "India (Bangalore / Mumbai)", "EU remote-first"],
  },
  {
    icon: Zap,
    title: "Company Stage",
    items: ["Series A – C startup", "Product-led company", "Relocation support welcome"],
  },
];

export default function LookingFor() {
  return (
    <section id="looking-for" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
            <Target className="w-3 h-3" />
            Open to
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Looking for new opportunities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              Target Roles
            </h3>
            <div className="space-y-3">
              {TARGET_ROLES.map((role, index) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-text-secondary">{role}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              Preferences
            </h3>
            <div className="space-y-6">
              {PREFERENCES.map((pref, index) => (
                <motion.div
                  key={pref.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <pref.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-text-primary">
                      {pref.title}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-6">
                    {pref.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs font-mono text-text-secondary bg-background rounded-full border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-2xl border border-accent/20 bg-accent/5 text-center"
        >
          <p className="text-text-secondary">
            Actively exploring opportunities for{" "}
            <span className="text-accent font-medium">Q2–Q3 2026</span>. Open to
            roles in{" "}
            <span className="text-accent font-medium">Germany, Netherlands</span>{" "}
            (EU Blue Card) or{" "}
            <span className="text-accent font-medium">India</span> that align
            with my expertise in Rust, Go, and AI infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
