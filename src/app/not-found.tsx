import Link from "next/link";
import { DATA } from "@/data/resume";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Page not found
        </h2>
        <p className="text-text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-text-primary hover:bg-surface transition-colors"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
