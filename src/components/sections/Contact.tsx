"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { Mail, Copy, Check, Github, Linkedin, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: DATA.contact.social.GitHub.url },
  { name: "LinkedIn", icon: Linkedin, url: DATA.contact.social.LinkedIn.url },
  { name: "X", icon: Twitter, url: DATA.contact.social.X.url },
  { name: "YouTube", icon: Youtube, url: DATA.contact.social.Youtube.url },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-6">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.1] mb-8">
            Let&apos;s build something
            <br />
            <span className="text-gradient">together</span>.
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
            <a
              href={`mailto:${DATA.contact.email}`}
              className="inline-flex items-center gap-3 text-lg md:text-xl font-mono text-text-secondary hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              {DATA.contact.email}
            </a>
            <button
              onClick={copyEmail}
              className="text-xs font-medium text-text-secondary hover:text-accent transition-colors flex items-center gap-1.5"
              aria-label="Copy email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
