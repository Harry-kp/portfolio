import { getAllPosts } from "@/lib/mdx";
import ArticleCard from "@/components/blog/ArticleCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about distributed systems, Ruby, Go, and software engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
              Writing
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Thoughts on distributed systems, backend engineering, and software development.
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="space-y-12">
              {featured && (
                <ArticleCard post={featured} index={0} featured />
              )}

              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {rest.map((post, index) => (
                    <ArticleCard key={post.slug} post={post} index={index + 1} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-secondary">No posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
