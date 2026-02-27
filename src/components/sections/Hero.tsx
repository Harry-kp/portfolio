"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { DATA } from "@/data/resume";
import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", icon: Github, url: DATA.contact.social.GitHub.url },
  { name: "LinkedIn", icon: Linkedin, url: DATA.contact.social.LinkedIn.url },
  { name: "X", icon: Twitter, url: DATA.contact.social.X.url },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 80, damping: 30 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  const avatarX = useTransform(sx, [-0.5, 0.5], [12, -12]);
  const avatarY = useTransform(sy, [-0.5, 0.5], [12, -12]);

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      className="min-h-[100dvh] flex flex-col justify-center px-6 pt-20 pb-12"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row md:items-center md:gap-16">
        <div className="flex-1">
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
            <span className="hidden sm:inline text-[11px] text-text-secondary/50 font-mono border border-border/50 rounded px-1.5 py-0.5">
              &#8984;K
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ x: avatarX, y: avatarY }}
          className="hidden md:block flex-shrink-0"
        >
          <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border-2 border-border/50 shadow-lg">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-text-secondary hover:text-accent transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
