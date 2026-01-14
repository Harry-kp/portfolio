import { getPostBySlug, getAllSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import MDXContent from "@/components/blog/MDXContent";
import Badge from "@/components/ui/Badge";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
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
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative">
          {/* Hero Image with Overlay */}
          {post.image ? (
            <div className="relative h-[50vh] md:h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              {/* Multiple gradient overlays for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
              
              {/* Decorative blur accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/20 blur-[100px] rounded-full" />
            </div>
          ) : (
            /* Fallback hero without image */
            <div className="relative h-[35vh] min-h-[300px] overflow-hidden bg-gradient-to-br from-accent/5 via-surface to-background">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_var(--accent)_0%,_transparent_50%)] opacity-10" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/10 blur-[100px] rounded-full" />
            </div>
          )}

          {/* Hero Content - Overlaid on image */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
              {/* Back link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 text-sm backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-accent/90 text-white rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                {post.title}
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                {formattedDate && (
                  <span className="flex items-center gap-2 backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {formattedDate}
                  </span>
                )}
                <span className="flex items-center gap-2 backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4" />
                  {post.readingTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          {/* Summary Card */}
          {post.summary && (
            <div className="relative mb-10 p-6 rounded-2xl bg-surface border border-border shadow-sm overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                    Summary
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          <MDXContent content={post.content} />

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all posts
              </Link>
              
              {/* Share hint */}
              <p className="text-sm text-text-secondary">
                Found this helpful? Share it with others!
              </p>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}

