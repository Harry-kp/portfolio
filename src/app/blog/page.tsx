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

  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
              Blog
            </h1>
            <div className="w-16 h-1 bg-accent rounded-full mb-4" />
            <p className="text-text-secondary max-w-2xl">
              Thoughts on distributed systems, backend engineering, and software development.
            </p>
          </div>

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <ArticleCard key={post.slug} post={post} index={index} />
              ))}
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

