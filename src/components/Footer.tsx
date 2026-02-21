"use client";

import { DATA } from "@/data/resume";
import Link from "next/link";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: Twitter,
  Youtube: Youtube,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 mt-32">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <p className="font-bold text-lg text-text-primary tracking-tight mb-2">
              {DATA.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </p>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Backend engineer building distributed systems & developer tools.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {["Projects", "Experience", "Blog"].map((item) => (
                <Link
                  key={item}
                  href={item === "Blog" ? "/blog" : `/#${item.toLowerCase()}`}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4">
              Connect
            </p>
            <div className="flex gap-4">
              {Object.entries(DATA.contact.social).map(([name, social]) => {
                const Icon = socialIcons[name];
                if (!Icon) return null;
                return (
                  <a
                    key={name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">
            &copy; {currentYear} {DATA.name}
          </p>
          <p className="text-xs text-text-secondary">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
