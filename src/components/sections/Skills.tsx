"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";

const skillCategories = [
  {
    name: "Languages",
    skills: ["Golang", "Ruby", "Python", "C++"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["Rails", "NodeJS"],
  },
  {
    name: "Infrastructure & Tools",
    skills: ["Docker", "Kubernetes", "AWS", "Postgres"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-text-secondary">
            Technologies I work with daily
          </p>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills
                  .filter((skill) => DATA.skills.includes(skill))
                  .map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="px-4 py-2 bg-background border border-border rounded-lg text-text-primary font-mono text-sm hover:border-accent hover:text-accent transition-colors cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border"
        >
          <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">
            All Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className="px-3 py-1 bg-background border border-border rounded-full text-text-secondary text-sm hover:text-accent transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
