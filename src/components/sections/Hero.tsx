"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", icon: Github, url: DATA.contact.social.GitHub.url },
  { name: "LinkedIn", icon: Linkedin, url: DATA.contact.social.LinkedIn.url },
  { name: "X", icon: Twitter, url: DATA.contact.social.X.url },
];

export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center px-6 pt-20 pb-12">
      <div className="max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-accent mb-6 tracking-wide"
        >
          {DATA.work[0]?.title} @ {DATA.work[0]?.company}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary tracking-display leading-[0.95] mb-8"
        >
          I build systems
          <br />
          that <span className="text-gradient">scale</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-12"
        >
          {DATA.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap items-center gap-5"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group"
            >
              <link.icon className="w-4 h-4 group-hover:text-accent transition-colors" />
              {link.name}
            </a>
          ))}
          <span className="hidden sm:block w-px h-4 bg-border" />
          <Link
            href="/blog"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Read my blog &rarr;
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="text-text-secondary hover:text-accent transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
