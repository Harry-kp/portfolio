"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Link2, Check } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${url}` : url;

  const shareLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
      color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40",
    },
    {
      name: "X",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
      color: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-3"
    >
      <span className="text-xs text-text-secondary">Share:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-lg border border-border text-text-secondary transition-all ${link.color}`}
          aria-label={`Share on ${link.name}`}
        >
          <link.icon className="w-4 h-4" />
        </a>
      ))}
      <button
        onClick={handleCopy}
        className={`p-2 rounded-lg border border-border text-text-secondary transition-all ${
          copied
            ? "text-green-500 border-green-500/40"
            : "hover:text-accent hover:border-accent/40"
        }`}
        aria-label="Copy link"
      >
        {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
      </button>
    </motion.div>
  );
}
