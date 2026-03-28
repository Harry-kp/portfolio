import { getPostBySlug, getAllSlugs, getAllPosts, isDev } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import MDXContent from "@/components/blog/MDXContent";
import ReadingProgress from "@/components/blog/ReadingProgress";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareButtons from "@/components/blog/ShareButtons";
import AuthorCard from "@/components/blog/AuthorCard";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { extractHeadings } from "@/lib/toc";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Bot } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs(isDev);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, isDev);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, isDev);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const headings = extractHeadings(post.content);

  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <ReadingProgress />
      <main className="min-h-screen pt-28 pb-16 px-6">
        <article className="max-w-3xl mx-auto">
          {post.isDraft && (
            <div className="mb-6 px-4 py-3 rounded-xl border border-amber-500/30 bg-amber-500/5">
              <p className="text-sm text-amber-400 font-mono">
                Draft — This post is not visible on the published site. Remove{" "}
                <code className="px-1.5 py-0.5 rounded bg-amber-500/10 text-xs">badge: &quot;draft&quot;</code>{" "}
                from frontmatter to publish.
              </p>
            </div>
          )}

          <div className="mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono uppercase tracking-wider text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-[1.15] mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-sm text-text-secondary">
                {formattedDate && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {formattedDate}
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingTime}
                </span>
              </div>
              <ShareButtons title={post.title} url={`/blog/${slug}`} />
            </div>
          </div>

          {post.image && (
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 border border-border/50">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {post.aiGenerated && (
            <div className="mb-6 px-4 py-3 rounded-xl border border-blue-500/20 bg-blue-500/5 flex items-center gap-3">
              <Bot className="w-4 h-4 text-blue-400 shrink-0" />
              <p className="text-sm text-blue-300/90">
                Written with AI, verified and reviewed by a human.
              </p>
            </div>
          )}

          {post.summary && (
            <div className="mb-10 p-6 rounded-2xl border border-border bg-surface">
              <p className="text-text-secondary leading-relaxed text-[15px]">
                {post.summary}
              </p>
            </div>
          )}

          <TableOfContents headings={headings} />

          <MDXContent content={post.content} />

          <AuthorCard />
          <RelatedPosts posts={allPosts} currentSlug={slug} />

          <footer className="mt-16 pt-8 border-t border-border/50">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
