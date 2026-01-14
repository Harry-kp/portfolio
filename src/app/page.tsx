import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import OpenSource from "@/components/sections/OpenSource";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <OpenSource />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
