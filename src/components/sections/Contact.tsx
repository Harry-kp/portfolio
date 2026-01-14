"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Mail, Github, Linkedin, Twitter, Youtube, Copy, Check } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: DATA.contact.social.GitHub.url,
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: DATA.contact.social.LinkedIn.url,
    color: "hover:text-blue-500",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: DATA.contact.social.X.url,
    color: "hover:text-sky-500",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: DATA.contact.social.Youtube.url,
    color: "hover:text-red-500",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
            Let&apos;s Connect
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-4" />
          <p className="text-text-secondary max-w-lg mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card className="max-w-xl mx-auto">
            {/* Email */}
            <div className="text-center mb-8">
              <p className="text-sm text-text-secondary mb-3">
                Best way to reach me
              </p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href={`mailto:${DATA.contact.email}`}
                  className="text-lg md:text-xl font-medium text-text-primary hover:text-accent transition-colors"
                >
                  {DATA.contact.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2 text-text-secondary hover:text-accent transition-colors rounded-lg hover:bg-surface"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center mb-8">
              <Button
                variant="primary"
                size="lg"
                href={`mailto:${DATA.contact.email}?subject=Hello from your portfolio`}
              >
                <Mail className="w-5 h-5" />
                Send me an email
              </Button>
            </div>

            {/* Social Links */}
            <div className="border-t border-border pt-6">
              <p className="text-sm text-text-secondary text-center mb-4">
                Or find me on
              </p>
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-surface border border-border text-text-secondary ${social.color} hover:border-accent/30 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
