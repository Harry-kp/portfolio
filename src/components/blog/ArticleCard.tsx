"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPostMeta } from "@/lib/mdx";

interface ArticleCardProps {
  post: BlogPostMeta;
  index: number;
}

export default function ArticleCard({ post, index }: ArticleCardProps) {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/50 hover:shadow-md transition-all duration-200"
      >
        {/* Image */}
        {post.image && (
          <div className="relative aspect-video bg-border overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-5">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="accent" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors mb-2 line-clamp-2">
            {post.title}
          </h3>

          {/* Summary */}
          <p className="text-text-secondary text-sm mb-4 line-clamp-2">
            {post.summary}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <div className="flex items-center gap-4">
              {formattedDate && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formattedDate}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </span>
            </div>
            <span className="flex items-center gap-1 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
              Read
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

