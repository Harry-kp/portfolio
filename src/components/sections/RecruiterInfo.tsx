"use client";

import { motion } from "framer-motion";
import { Globe, Clock, FileText, DollarSign, Code, AlertCircle } from "lucide-react";
import { DATA } from "@/data/resume";

export default function RecruiterInfo() {
  const infoItems = [
    {
      icon: Globe,
      label: "Location",
      value: DATA.recruiter.timezone,
    },
    {
      icon: Clock,
      label: "Work Hours",
      value: "Flexible for US/UK timezone overlap",
    },
    {
      icon: AlertCircle,
      label: "Work Authorization",
      value: `${DATA.recruiter.workAuth}${DATA.recruiter.visaRequired ? " • Requires visa sponsorship" : ""}`,
      highlight: true,
    },
    {
      icon: DollarSign,
      label: "Salary Expectation",
      value: DATA.recruiter.salary,
    },
  ];

  return (
    <section className="py-12 px-6 border-y border-border bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
            For Recruiters
          </p>
          <h2 className="text-xl font-semibold text-text-primary">
            Quick overview
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {infoItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-xl border p-4 text-center ${
                item.highlight
                  ? "border-accent/40 bg-accent/5"
                  : "border-border bg-background"
              }`}
            >
              <item.icon
                className={`w-5 h-5 mx-auto mb-2 ${
                  item.highlight ? "text-accent" : "text-text-secondary"
                }`}
              />
              <p className="text-xs text-text-secondary mb-1">{item.label}</p>
              <p
                className={`text-sm font-medium ${
                  item.highlight ? "text-accent" : "text-text-primary"
                }`}
              >
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          <a
            href={DATA.recruiter.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:border-accent/40 hover:bg-accent/5 transition-all"
          >
            <Code className="w-4 h-4 text-accent" />
            <span className="text-sm text-text-primary">
              {DATA.recruiter.leetcodeProblems}+ LeetCode Problems
            </span>
          </a>
          <a
            href={DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:border-accent/40 hover:bg-accent/5 transition-all"
          >
            <FileText className="w-4 h-4 text-accent" />
            <span className="text-sm text-text-primary">Download Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
