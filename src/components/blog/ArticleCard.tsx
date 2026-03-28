"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { BlogPostMeta } from "@/lib/mdx";

interface ArticleCardProps {
  post: BlogPostMeta;
  index: number;
  featured?: boolean;
}

export default function ArticleCard({ post, index, featured }: ArticleCardProps) {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={post.isDraft ? "opacity-75" : ""}
      >
        <Link
          href={`/blog/${post.slug}`}
          className={`group block rounded-2xl border bg-surface overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-5px] ${
            post.isDraft
              ? "border-amber-500/30 hover:border-amber-500/60 hover:shadow-amber-500/10"
              : "border-border hover:border-accent/40 hover:shadow-accent/10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {post.image && (
              <div className="relative aspect-video bg-surface-hover overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            )}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                {post.isDraft && (
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    Draft
                  </span>
                )}
                {post.tags && post.tags.length > 0 && (
                  <>
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[11px] font-mono uppercase tracking-wider text-accent">
                        {tag}
                      </span>
                    ))}
                  </>
                )}
              </div>
              <h2 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors mb-3 leading-tight">
                {post.title}
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                {post.summary}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-text-secondary">
                  {formattedDate && <span>{formattedDate}</span>}
                  <span>&middot;</span>
                  <span>{post.readingTime}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={post.isDraft ? "opacity-75" : ""}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`group block rounded-2xl border bg-surface overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-5px] h-full ${
          post.isDraft
            ? "border-amber-500/30 hover:border-amber-500/60 hover:shadow-amber-500/10"
            : "border-border hover:border-accent/40 hover:shadow-accent/10"
        }`}
      >
        {post.image && (
          <div className="relative aspect-[2/1] bg-surface-hover overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            {post.isDraft && (
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                Draft
              </span>
            )}
            {post.tags && post.tags.length > 0 && (
              <>
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-accent">
                    {tag}
                  </span>
                ))}
              </>
            )}
          </div>
          <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-text-secondary text-sm mb-4 line-clamp-2">
            {post.summary}
          </p>
          <div className="flex items-center gap-3 text-xs text-text-secondary">
            {formattedDate && <span>{formattedDate}</span>}
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
