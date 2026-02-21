"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { DATA } from "@/data/resume";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {isHome ? (
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-bold text-lg text-text-primary hover:text-accent transition-colors tracking-tight"
              >
                {DATA.name.split(" ")[0]}
                <span className="text-accent">.</span>
              </button>
            ) : (
              <Link
                href="/"
                className="font-bold text-lg text-text-primary hover:text-accent transition-colors tracking-tight"
              >
                {DATA.name.split(" ")[0]}
                <span className="text-accent">.</span>
              </Link>
            )}

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToSection(item.id)}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/blog"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Blog
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href={DATA.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-border text-text-primary hover:border-accent hover:text-accent transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                Resume
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-surface border-l border-border p-8 md:hidden"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-5 right-5 p-2 text-text-secondary hover:text-text-primary"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>

              <nav className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigateToSection(item.id)}
                    className="text-left text-lg text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Link
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-text-secondary hover:text-text-primary transition-colors"
                >
                  Blog
                </Link>
                <div className="pt-6 border-t border-border flex items-center justify-between">
                  <a
                    href={DATA.resumeUrl}
                    download
                    className="text-sm text-accent font-medium flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    Download Resume
                  </a>
                  <ThemeToggle />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
