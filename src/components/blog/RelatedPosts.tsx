"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { BlogPostMeta } from "@/lib/mdx";

interface RelatedPostsProps {
  posts: BlogPostMeta[];
  currentSlug: string;
}

export default function RelatedPosts({ posts, currentSlug }: RelatedPostsProps) {
  const filtered = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);

  if (filtered.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-12 pt-8 border-t border-border"
    >
      <h3 className="text-lg font-semibold text-text-primary mb-6">
        More from the blog
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block h-full rounded-xl border border-border bg-surface p-4 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_-5px] hover:shadow-accent/10"
            >
              {post.image && (
                <div className="relative aspect-[2/1] rounded-lg overflow-hidden mb-3 bg-surface-hover">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <h4 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors line-clamp-2 mb-2">
                {post.title}
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">{post.readingTime}</span>
                <ArrowRight className="w-3 h-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
