import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-gradient mb-6">404</p>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight mb-3">
          Page not found
        </h1>
        <p className="text-text-secondary mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-accent text-black rounded-xl font-medium hover:bg-accent-hover transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-border rounded-xl font-medium text-text-primary hover:border-accent/40 hover:text-accent transition-colors"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
