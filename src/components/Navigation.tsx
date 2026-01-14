"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download, BookOpen } from "lucide-react";
import Link from "next/link";
import { DATA } from "@/data/resume";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "opensource", label: "Open Source" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = navItems.map((item) => item.id);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-semibold text-text-primary hover:text-accent transition-colors"
            >
              {DATA.initials}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-3 py-2 text-sm rounded-lg transition-colors",
                    activeSection === item.id
                      ? "text-accent bg-accent/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/blog"
                className="px-3 py-2 text-sm rounded-lg transition-colors text-text-secondary hover:text-text-primary hover:bg-surface flex items-center gap-1"
              >
                <BookOpen className="w-4 h-4" />
                Blog
              </Link>
            </div>

            {/* Resume Download & Theme Toggle */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <Button 
                variant="primary" 
                size="sm" 
                href={DATA.resumeUrl}
                target={DATA.resumeUrl.startsWith("/") ? undefined : "_blank"}
                rel={DATA.resumeUrl.startsWith("/") ? undefined : "noopener noreferrer"}
                download={DATA.resumeUrl.startsWith("/") ? true : undefined}
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background border-b border-border shadow-sm"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "block w-full text-left px-3 py-2 rounded-lg transition-colors",
                    activeSection === item.id
                      ? "text-accent bg-accent/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Blog
              </Link>
              <a
                href={DATA.resumeUrl}
                target={DATA.resumeUrl.startsWith("/") ? undefined : "_blank"}
                rel={DATA.resumeUrl.startsWith("/") ? undefined : "noopener noreferrer"}
                download={DATA.resumeUrl.startsWith("/") ? true : undefined}
                className="flex items-center gap-2 px-3 py-2 text-accent"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}

