"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { DATA } from "@/data/resume";

interface Metric {
  numericValue: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { numericValue: 4, suffix: "+", label: "Years Experience" },
  { numericValue: 700, suffix: "+", label: "LeetCode Solved" },
  { numericValue: DATA.projects.length, suffix: "+", label: "Projects Shipped" },
  { numericValue: DATA.work.length, suffix: "", label: "Companies" },
];

const currentFocus = [
  "Building AI-powered test management at BrowserStack",
  "Shipping developer tools in Rust (Vortix, Mercury)",
  "Exploring consensus protocols & distributed storage",
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.max(1, Math.floor(value / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <p ref={ref} className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight tabular-nums">
      {display}
      {suffix}
    </p>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 md:items-center"
        >
          <div className="md:col-span-3">
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
              About
            </p>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              {DATA.summary}
            </p>

            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-3">
                Currently focused on
              </p>
              <ul className="space-y-2">
                {currentFocus.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="text-accent mt-1.5 text-[8px]">
                      &#9679;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <AnimatedCounter
                    value={metric.numericValue}
                    suffix={metric.suffix}
                  />
                  <p className="text-sm text-text-secondary mt-1">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
