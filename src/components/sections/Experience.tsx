"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { DATA, type WorkExperience } from "@/data/resume";
import { ChevronDown, ExternalLink, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

function ExperienceItem({
  work,
  index,
}: {
  work: WorkExperience;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(index === 0); // First one open by default
  const isPresent = work.end === "Present";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline line */}
      {index < DATA.work.length - 1 && (
        <div className="absolute left-[23px] top-16 bottom-0 w-[2px] bg-border" />
      )}

      <div className="flex gap-4">
        {/* Timeline dot */}
        <div className="relative flex-shrink-0 mt-1">
          <div
            className={cn(
              "w-12 h-12 rounded-full border-2 flex items-center justify-center bg-surface overflow-hidden shadow-sm",
              isPresent ? "border-accent" : "border-border"
            )}
          >
            {work.logoUrl ? (
              <Image
                src={work.logoUrl}
                alt={work.company}
                width={32}
                height={32}
                className="object-contain"
              />
            ) : (
              <span className="text-sm font-semibold text-text-primary">
                {work.company[0]}
              </span>
            )}
          </div>
          {isPresent && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-left group"
            aria-expanded={isExpanded}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {work.title}
                </h3>
                <div className="flex items-center gap-2 text-text-secondary">
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {work.company}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-secondary whitespace-nowrap">
                  {work.start} — {work.end}
                </span>
                <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-text-secondary" />
                </motion.span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs text-text-secondary mt-1">
              <MapPin className="w-3 h-3" />
              {work.location}
            </div>
          </button>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="text-text-secondary mt-4 leading-relaxed">
                  {work.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-text-secondary">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="space-y-0">
          {DATA.work.map((work, index) => (
            <ExperienceItem key={work.company} work={work} index={index} />
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-text-primary mb-6">
            Education
          </h3>
          {DATA.education.map((edu) => (
            <div key={edu.school} className="flex gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center bg-surface overflow-hidden flex-shrink-0 shadow-sm">
                {edu.logoUrl ? (
                  <Image
                    src={edu.logoUrl}
                    alt={edu.school}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold">{edu.school[0]}</span>
                )}
              </div>
              <div>
                <h4 className="font-medium text-text-primary">{edu.school}</h4>
                <p className="text-text-secondary text-sm">{edu.degree}</p>
                <p className="text-text-secondary text-xs">
                  {edu.start} — {edu.end}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
