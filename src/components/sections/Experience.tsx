"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DATA } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="space-y-0">
          {DATA.work.map((work, index) => {
            const isPresent = work.end === "Present";
            return (
              <motion.div
                key={work.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0 group"
              >
                {index < DATA.work.length - 1 && (
                  <div className="absolute left-[5px] top-3 bottom-0 w-px bg-border" />
                )}
                <div className={`absolute left-0 top-2.5 w-[11px] h-[11px] rounded-full border-2 ${isPresent ? "border-accent bg-accent/20" : "border-border bg-background"}`} />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                  <div className="flex items-center gap-3">
                    {work.logoUrl && (
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-border bg-white shrink-0">
                        <Image
                          src={work.logoUrl}
                          alt={work.company}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {work.title}
                      </h3>
                      <a
                        href={work.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-secondary hover:text-accent transition-colors"
                      >
                        {work.company}
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary font-mono shrink-0">
                    {work.start} &mdash; {work.end}
                  </p>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed max-w-3xl">
                  {work.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-border/50"
        >
          <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-6">
            Education
          </p>
          {DATA.education.map((edu) => (
            <div key={edu.school} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {edu.logoUrl && (
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-border bg-white shrink-0">
                    <Image
                      src={edu.logoUrl}
                      alt={edu.school}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                )}
                <div>
                  <p className="font-medium text-text-primary">{edu.school}</p>
                  <p className="text-sm text-text-secondary">{edu.degree}</p>
                </div>
              </div>
              <p className="text-sm text-text-secondary font-mono shrink-0">
                {edu.start} &mdash; {edu.end}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
