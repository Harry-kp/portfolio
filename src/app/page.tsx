import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import OpenSource from "@/components/sections/OpenSource";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import FeaturedWriting from "@/components/sections/FeaturedWriting";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/mdx";
import { fetchOpenSourceContributions, FALLBACK_CONTRIBUTIONS } from "@/lib/github";
import { fetchProjectStars } from "@/lib/github";
import { DATA } from "@/data/resume";

export default async function Home() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.slice(0, 3).map((p) => ({
    slug: p.slug,
    title: p.title,
    summary: p.summary,
    image: p.image,
    tags: p.tags,
  }));

  let contributions;
  try {
    contributions = await fetchOpenSourceContributions();
  } catch {
    contributions = FALLBACK_CONTRIBUTIONS;
  }

  const githubLinks = DATA.projects
    .flatMap((p) => p.links)
    .filter((l) => l.type.toLowerCase() === "github")
    .map((l) => l.href);
  const starCounts = await fetchProjectStars(githubLinks);

  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects starCounts={starCounts} />
        <OpenSource contributions={contributions} />
        <Experience />
        <Skills />
        <FeaturedWriting posts={featuredPosts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
