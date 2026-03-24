"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { DATA } from "@/data/resume";

export default function AuthorCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-12 p-6 rounded-2xl border border-border bg-surface"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-border">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
            Written by
          </p>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            {DATA.name}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            {DATA.summary.split(".")[0]}. Building AI accessibility agents at BrowserStack.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Follow on GitHub
            </a>
            <a
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
