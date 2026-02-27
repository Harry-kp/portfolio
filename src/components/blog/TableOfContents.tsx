"use client";

import { useState, useEffect, useCallback } from "react";
import { List, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TOCItem } from "@/lib/toc";

export default function TableOfContents({ headings }: { headings: TOCItem[] }) {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "-80px 0px -60% 0px",
    });

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings, handleObserver]);

  if (headings.length < 2) return null;

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <nav className="hidden xl:block fixed top-28 right-[max(1rem,calc((100vw-768px)/2-320px))] w-56 max-h-[calc(100vh-160px)] overflow-y-auto">
        <p className="text-[11px] font-mono uppercase tracking-widest text-text-secondary mb-3">
          On this page
        </p>
        <ul className="space-y-1 border-l border-border">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={cn(
                  "block text-[13px] leading-relaxed transition-colors py-1",
                  h.level === 3 ? "pl-6" : "pl-3",
                  activeId === h.id
                    ? "text-accent border-l-2 border-accent -ml-[1px]"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: collapsible */}
      <div className="xl:hidden mb-8 rounded-2xl border border-border bg-surface overflow-hidden">
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="flex w-full items-center justify-between px-5 py-3 text-sm font-medium text-text-primary"
        >
          <span className="inline-flex items-center gap-2">
            <List className="w-4 h-4" />
            Table of contents
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </button>
        {isOpen && (
          <ul className="px-5 pb-4 space-y-1">
            {headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-sm py-1 transition-colors",
                    h.level === 3 ? "pl-4" : "pl-0",
                    activeId === h.id
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
