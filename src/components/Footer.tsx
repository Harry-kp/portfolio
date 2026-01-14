"use client";

import { DATA } from "@/data/resume";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            © {currentYear} {DATA.name}. All rights reserved.
          </p>
          <p className="text-sm text-text-secondary">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

