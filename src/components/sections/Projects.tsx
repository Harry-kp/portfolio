"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DATA, type Project } from "@/data/resume";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ExternalLink, Github, X, Package, ArrowRight, Play, FolderGit2 } from "lucide-react";

// Helper to check if URL is a GIF
const isGif = (url: string) => url.toLowerCase().endsWith('.gif') || url.includes('.gif');

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const getLinkIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "github":
      case "source":
        return <Github className="w-4 h-4" />;
      case "pypi":
      case "crates.io":
        return <Package className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="bg-background border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video/GIF Preview */}
        {project.video && (
          <div className="relative aspect-video bg-gray-100 rounded-t-2xl overflow-hidden">
            {isGif(project.video) ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.video}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border">
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary">{project.dates}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-text-secondary leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-medium text-text-primary mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="accent">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Button
                key={link.type}
                variant="secondary"
                size="sm"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getLinkIcon(link.type)}
                {link.type}
              </Button>
            ))}
            {project.href && (
              <Button
                variant="primary"
                size="sm"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card hoverable onClick={onClick} className="h-full group overflow-hidden p-0">
        {/* Video/GIF/Image Preview */}
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          {project.video ? (
            isGif(project.video) ? (
              // GIF - show as image
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.video}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              // Video file
              <>
                <video
                  src={project.video}
                  autoPlay={isHovered}
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {!isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-text-primary ml-0.5" />
                    </div>
                  </div>
                )}
              </>
            )
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <FolderGit2 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <span className="text-sm text-gray-500 font-medium">{project.title}</span>
              </div>
            </div>
          )}
          
          {/* Active Badge Overlay */}
          {project.active && (
            <div className="absolute top-3 right-3">
              <Badge variant="accent" className="shadow-sm">
                Active
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Header */}
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-text-secondary">{project.dates}</p>
          </div>

          {/* Description */}
          <p className="text-text-secondary text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-mono bg-gray-100 rounded text-text-secondary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 text-xs text-text-secondary">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* View Details */}
          <div className="flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
            View Details
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? DATA.projects : DATA.projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-text-secondary">
            A selection of projects I&apos;ve built and contributed to
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {DATA.projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button
              variant="secondary"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : `View All ${DATA.projects.length} Projects`}
            </Button>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
