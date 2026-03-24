import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import OpenSource from "@/components/sections/OpenSource";
import Skills from "@/components/sections/Skills";
import LookingFor from "@/components/sections/LookingFor";
import Experience from "@/components/sections/Experience";
import FeaturedWriting from "@/components/sections/FeaturedWriting";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/mdx";
import { fetchOpenSourceContributions, FALLBACK_CONTRIBUTIONS, fetchTotalStars, fetchGitHubUserStats } from "@/lib/github";
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

  // Fetch GitHub stats for Hero section
  const [userStats, totalStars] = await Promise.all([
    fetchGitHubUserStats(),
    fetchTotalStars(),
  ]);

  const heroStats = {
    stars: totalStars,
    prs: contributions.stats.mergedPRs,
    contributions: contributions.stats.totalPRs,
  };

  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main>
        <Hero stats={heroStats} />
        <About />
        <Projects starCounts={starCounts} />
        <OpenSource contributions={contributions} />
        <Skills />
        <LookingFor />
        <Experience />
        <FeaturedWriting posts={featuredPosts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
