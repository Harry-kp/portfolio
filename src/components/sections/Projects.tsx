"use client";

import { motion } from "framer-motion";
import { DATA, type Project } from "@/data/resume";
import { ExternalLink, Github, Package, FolderGit2 } from "lucide-react";

const isGif = (url: string) => url.toLowerCase().endsWith(".gif") || url.includes(".gif");

function getLinkIcon(type: string) {
  switch (type.toLowerCase()) {
    case "github":
    case "source":
      return <Github className="w-3.5 h-3.5" />;
    case "pypi":
    case "crates.io":
      return <Package className="w-3.5 h-3.5" />;
    default:
      return <ExternalLink className="w-3.5 h-3.5" />;
  }
}

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={featured ? "md:col-span-2 md:row-span-2" : ""}
    >
      <div className="group h-full rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_-5px] hover:shadow-accent/10">
        {project.video ? (
          <div className={`relative overflow-hidden bg-surface-hover ${featured ? "aspect-video" : "aspect-[2/1]"}`}>
            {isGif(project.video) ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.video}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
          </div>
        ) : (
          <div className={`relative overflow-hidden bg-surface-hover flex items-center justify-center ${featured ? "aspect-video" : "aspect-[2/1]"}`}>
            <FolderGit2 className="w-10 h-10 text-text-secondary/30" />
          </div>
        )}

        <div className={`p-5 ${featured ? "md:p-7" : ""}`}>
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className={`font-semibold text-text-primary group-hover:text-accent transition-colors ${featured ? "text-xl" : "text-base"}`}>
                {project.title}
              </h3>
              <p className="text-xs text-text-secondary mt-0.5">{project.dates}</p>
            </div>
            {project.active && (
              <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                Active
              </span>
            )}
          </div>

          <p className={`text-text-secondary leading-relaxed mb-4 ${featured ? "text-sm" : "text-sm line-clamp-2"}`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-mono text-text-secondary bg-background rounded-md border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            {project.links.map((link) => (
              <a
                key={link.type}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary border border-border rounded-lg hover:border-accent/40 transition-colors"
              >
                {getLinkIcon(link.type)}
                {link.type}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Things I&apos;ve built
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DATA.projects.map((project: Project, index: number) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
