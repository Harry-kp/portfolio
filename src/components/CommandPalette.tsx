"use client";

import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import { useRouter, usePathname } from "next/navigation";
import { DATA } from "@/data/resume";
import {
  Home,
  Briefcase,
  FolderGit2,
  Mail,
  FileText,
  Github,
  Linkedin,
  Twitter,
  Sun,
  Moon,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { AnimatePresence, motion } from "framer-motion";

interface BlogPostItem {
  slug: string;
  title: string;
  tags?: string[];
}

export default function CommandPalette({
  blogPosts,
}: {
  blogPosts: BlogPostItem[];
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const navigate = useCallback(
    (path: string) => {
      setOpen(false);
      if (path.startsWith("#")) {
        if (pathname === "/") {
          document
            .getElementById(path.slice(1))
            ?.scrollIntoView({ behavior: "smooth" });
        } else {
          router.push(`/${path}`);
        }
      } else {
        router.push(path);
      }
    },
    [router, pathname]
  );

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setOpen(false);
  }, [resolvedTheme, setTheme]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[101] flex items-start justify-center pt-[20vh]"
          >
            <Command
              className="w-full max-w-lg rounded-2xl border border-border bg-surface shadow-2xl overflow-hidden"
              loop
            >
              <Command.Input
                placeholder="Type a command or search..."
                className="w-full px-5 py-4 text-base text-text-primary bg-transparent border-b border-border outline-none placeholder:text-text-secondary/60"
              />
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="py-8 text-center text-sm text-text-secondary">
                  No results found.
                </Command.Empty>

                <Command.Group
                  heading="Navigation"
                  className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-text-secondary"
                >
                  <CommandItem icon={<Home className="w-4 h-4" />} onSelect={() => navigate("/")}>
                    Home
                  </CommandItem>
                  <CommandItem icon={<FolderGit2 className="w-4 h-4" />} onSelect={() => navigate("#projects")}>
                    Projects
                  </CommandItem>
                  <CommandItem icon={<Briefcase className="w-4 h-4" />} onSelect={() => navigate("#experience")}>
                    Experience
                  </CommandItem>
                  <CommandItem icon={<Mail className="w-4 h-4" />} onSelect={() => navigate("#contact")}>
                    Contact
                  </CommandItem>
                  <CommandItem icon={<FileText className="w-4 h-4" />} onSelect={() => navigate("/blog")}>
                    Blog
                  </CommandItem>
                </Command.Group>

                <Command.Group
                  heading="Projects"
                  className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-text-secondary"
                >
                  {DATA.projects.map((p) => (
                    <CommandItem
                      key={p.title}
                      icon={<ArrowRight className="w-4 h-4" />}
                      onSelect={() => {
                        setOpen(false);
                        window.open(p.href, "_blank");
                      }}
                    >
                      {p.title}
                    </CommandItem>
                  ))}
                </Command.Group>

                {blogPosts.length > 0 && (
                  <Command.Group
                    heading="Blog Posts"
                    className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-text-secondary"
                  >
                    {blogPosts.map((post) => (
                      <CommandItem
                        key={post.slug}
                        icon={<FileText className="w-4 h-4" />}
                        onSelect={() => navigate(`/blog/${post.slug}`)}
                      >
                        {post.title}
                      </CommandItem>
                    ))}
                  </Command.Group>
                )}

                <Command.Group
                  heading="Actions"
                  className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-text-secondary"
                >
                  <CommandItem
                    icon={resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    onSelect={toggleTheme}
                  >
                    Toggle theme
                  </CommandItem>
                  <CommandItem
                    icon={<FileText className="w-4 h-4" />}
                    onSelect={() => {
                      setOpen(false);
                      window.open(DATA.resumeUrl, "_blank");
                    }}
                  >
                    Download resume
                  </CommandItem>
                </Command.Group>

                <Command.Group
                  heading="Social"
                  className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-text-secondary"
                >
                  <CommandItem
                    icon={<Github className="w-4 h-4" />}
                    onSelect={() => {
                      setOpen(false);
                      window.open(DATA.contact.social.GitHub.url, "_blank");
                    }}
                  >
                    GitHub
                  </CommandItem>
                  <CommandItem
                    icon={<Linkedin className="w-4 h-4" />}
                    onSelect={() => {
                      setOpen(false);
                      window.open(DATA.contact.social.LinkedIn.url, "_blank");
                    }}
                  >
                    LinkedIn
                  </CommandItem>
                  <CommandItem
                    icon={<Twitter className="w-4 h-4" />}
                    onSelect={() => {
                      setOpen(false);
                      window.open(DATA.contact.social.X.url, "_blank");
                    }}
                  >
                    X (Twitter)
                  </CommandItem>
                </Command.Group>
              </Command.List>

              <div className="border-t border-border px-4 py-2.5 flex items-center justify-between text-[11px] text-text-secondary">
                <span>Navigate with &uarr;&darr; then Enter</span>
                <kbd className="px-1.5 py-0.5 rounded border border-border bg-background font-mono text-[10px]">
                  ESC
                </kbd>
              </div>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function CommandItem({
  children,
  icon,
  onSelect,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  onSelect: () => void;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex items-center gap-3 px-3 py-2.5 text-sm text-text-secondary rounded-lg cursor-pointer transition-colors data-[selected=true]:bg-accent/10 data-[selected=true]:text-text-primary"
    >
      <span className="text-text-secondary">{icon}</span>
      {children}
    </Command.Item>
  );
}
