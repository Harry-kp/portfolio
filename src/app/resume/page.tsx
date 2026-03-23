"use client";

import { DATA } from "@/data/resume";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-surface/80 backdrop-blur-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <h1 className="text-sm font-medium text-text-primary hidden sm:block">
          {DATA.name} &mdash; Resume
        </h1>

        <a
          href={DATA.resumeUrl}
          download
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-border text-text-primary hover:border-accent hover:text-accent transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Download
        </a>
      </div>

      <div className="flex-1 p-4 md:p-8">
        <iframe
          src={`${DATA.resumeUrl}#toolbar=0&navpanes=0`}
          className="w-full h-full min-h-[calc(100dvh-8rem)] rounded-lg border border-border shadow-lg bg-white"
          title="Resume"
        />
      </div>
    </div>
  );
}
