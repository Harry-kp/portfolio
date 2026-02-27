"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface FeaturedPost {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  tags?: string[];
}

export default function FeaturedWriting({ posts }: { posts: FeaturedPost[] }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
              Writing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
              Featured posts
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            View all posts <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_-5px] hover:shadow-accent/10"
              >
                <div className="relative aspect-[2/1] bg-surface-hover overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-text-secondary/30 text-4xl font-bold">
                      {post.title[0]}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent">
                    {post.tags?.[0] ?? "Blog"}
                  </span>
                  <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors mt-2 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm line-clamp-2">
                    {post.summary}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          href="/blog"
          className="sm:hidden inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors mt-8"
        >
          View all posts <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
