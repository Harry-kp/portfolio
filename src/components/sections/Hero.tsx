"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DATA } from "@/data/resume";
import Button from "@/components/ui/Button";
import { ArrowDown, Download, Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={DATA.avatarUrl}
                  alt={DATA.name}
                  width={208}
                  height={208}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 flex items-center gap-2 bg-surface border border-border rounded-full px-3 py-1 shadow-md">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-text-secondary">Available</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-accent font-medium mb-2">Hello, I&apos;m</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 text-balance">
                {DATA.name}
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary mb-2">
                {DATA.work[0]?.title}
              </p>
              <p className="text-text-secondary mb-6">
                @ <span className="text-text-primary font-medium">{DATA.work[0]?.company}</span>
                {" · "}
                <span>{DATA.location}</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-secondary max-w-2xl mb-8 text-lg leading-relaxed"
            >
              {DATA.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                href={DATA.resumeUrl}
                target={DATA.resumeUrl.startsWith("/") ? undefined : "_blank"}
                rel={DATA.resumeUrl.startsWith("/") ? undefined : "noopener noreferrer"}
                download={DATA.resumeUrl.startsWith("/") ? true : undefined}
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
