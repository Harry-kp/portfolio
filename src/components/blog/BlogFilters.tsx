"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArticleCard from "@/components/blog/ArticleCard";
import type { BlogPostMeta } from "@/lib/mdx";

export default function BlogFilters({ posts }: { posts: BlogPostMeta[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tagCount = new Map<string, number>();
    posts.forEach((p) =>
      p.tags?.forEach((t) => tagCount.set(t, (tagCount.get(t) || 0) + 1))
    );
    return [...tagCount.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, [posts]);

  const filtered = activeTag
    ? posts.filter((p) => p.tags?.includes(activeTag))
    : posts;
  const [featured, ...rest] = filtered;

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-12">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-3 py-1.5 text-xs font-mono rounded-full border transition-colors ${
            activeTag === null
              ? "border-accent bg-accent/10 text-accent"
              : "border-border text-text-secondary hover:border-accent/40 hover:text-text-primary"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={`px-3 py-1.5 text-xs font-mono rounded-full border transition-colors ${
              activeTag === tag
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-text-secondary hover:border-accent/40 hover:text-text-primary"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag ?? "all"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {featured && (
                <ArticleCard post={featured} index={0} featured />
              )}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
                  {rest.map((post, index) => (
                    <ArticleCard
                      key={post.slug}
                      post={post}
                      index={index + 1}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-text-secondary">
            No posts found for &ldquo;{activeTag}&rdquo;.
          </p>
        </div>
      )}
    </>
  );
}
