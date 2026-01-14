"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortSummary = DATA.summary.split(". ").slice(0, 2).join(". ") + ".";

  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-6" />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-text-secondary text-lg leading-relaxed">
              {isExpanded ? DATA.summary : shortSummary}
            </p>

            {DATA.summary.length > shortSummary.length && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 text-accent hover:text-accent-hover transition-colors mt-4 text-sm font-medium"
              >
                {isExpanded ? (
                  <>
                    Show less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Read more <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
