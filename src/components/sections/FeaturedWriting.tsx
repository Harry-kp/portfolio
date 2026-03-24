"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";

interface FeaturedPost {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  tags?: string[];
  readingTime?: string;
  publishedAt?: string;
}

export default function FeaturedWriting({ posts }: { posts: FeaturedPost[] }) {
  const [featured, ...rest] = posts;

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

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_40px_-5px] hover:shadow-accent/15"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {featured.image && (
                  <div className="lg:col-span-2 relative aspect-[16/10] lg:aspect-auto bg-surface-hover overflow-hidden">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface lg:hidden" />
                  </div>
                )}
                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    {featured.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="flex items-center gap-1 text-xs text-text-secondary">
                      <Clock className="w-3 h-3" />
                      {featured.readingTime}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors mb-3 leading-tight">
                    {featured.title}
                  </h3>
                  <p className="text-text-secondary text-sm lg:text-base line-clamp-2 lg:line-clamp-3">
                    {featured.summary}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-accent font-medium">
                    Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, index) => (
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
                      {post.tags?.slice(0, 1).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono uppercase tracking-wider text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="flex items-center gap-1 text-xs text-text-secondary ml-auto">
                        <Clock className="w-3 h-3" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors mb-2 line-clamp-2">
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
        )}

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
