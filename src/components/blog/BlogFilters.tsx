"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import ArticleCard from "@/components/blog/ArticleCard";
import type { BlogPostMeta } from "@/lib/mdx";

interface BlogFiltersProps {
  posts: BlogPostMeta[];
  draftPosts?: BlogPostMeta[];
}

export default function BlogFilters({ posts, draftPosts = [] }: BlogFiltersProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [showDrafts, setShowDrafts] = useState(false);

  const hasDrafts = draftPosts.length > 0;

  const allPosts = useMemo(() => {
    if (!showDrafts) return posts;
    const drafts = draftPosts.filter(
      (d) => !posts.some((p) => p.slug === d.slug)
    );
    return [...posts, ...drafts].sort((a, b) => {
      if (!a.publishedAt || !b.publishedAt) return 0;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  }, [posts, draftPosts, showDrafts]);

  const allTags = useMemo(() => {
    const tagCount = new Map<string, number>();
    allPosts.forEach((p) =>
      p.tags?.forEach((t) => tagCount.set(t, (tagCount.get(t) || 0) + 1))
    );
    return [...tagCount.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, [allPosts]);

  const filtered = activeTag
    ? allPosts.filter((p) => p.tags?.includes(activeTag))
    : allPosts;
  const [featured, ...rest] = filtered;

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-12">
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

        {hasDrafts && (
          <>
            <span className="w-px h-5 bg-border mx-1" />
            <button
              onClick={() => setShowDrafts(!showDrafts)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-full border transition-colors ${
                showDrafts
                  ? "border-amber-500/60 bg-amber-500/10 text-amber-400"
                  : "border-border text-text-secondary hover:border-amber-500/40 hover:text-amber-400"
              }`}
            >
              {showDrafts ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              Drafts ({draftPosts.length})
            </button>
          </>
        )}
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
