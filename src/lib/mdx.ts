import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content");
const isDev = process.env.NODE_ENV === "development";

function isDraftPost(data: Record<string, unknown>): boolean {
  const badge = data.badge as string | undefined;
  const tags = data.tags as string[] | undefined;
  return (
    !!badge?.toLowerCase().includes("draft") ||
    !!tags?.some((t) => t.toLowerCase() === "draft")
  );
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  image?: string;
  tags?: string[];
  readingTime: string;
  content: string;
  isDraft?: boolean;
  aiGenerated?: boolean;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  image?: string;
  tags?: string[];
  readingTime: string;
  badge?: string;
  isDraft?: boolean;
  aiGenerated?: boolean;
}

export function getAllPosts(includeDrafts = false): BlogPostMeta[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(contentDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || slug,
        summary: data.summary || data.description || "",
        publishedAt: data.publishedAt || data.pubDate || "",
        image: data.image || data.heroImage,
        tags: data.tags || [],
        readingTime: stats.text,
        badge: data.badge,
        isDraft: isDraftPost(data),
        aiGenerated: !!data.aiGenerated,
      };
    })
    .filter((post) => includeDrafts || !post.isDraft)
    .sort((a, b) => {
      if (!a.publishedAt || !b.publishedAt) return 0;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

  return posts;
}

export function getPostBySlug(slug: string, includeDrafts = false): BlogPost | null {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const draft = isDraftPost(data);
  if (draft && !includeDrafts) {
    return null;
  }

  const stats = readingTime(content);

  return {
    slug,
    title: data.title || slug,
    summary: data.summary || data.description || "",
    publishedAt: data.publishedAt || data.pubDate || "",
    image: data.image || data.heroImage,
    tags: data.tags || [],
    readingTime: stats.text,
    content,
    isDraft: draft,
    aiGenerated: !!data.aiGenerated,
  };
}

export function getAllSlugs(includeDrafts = false): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .filter((file) => {
      if (includeDrafts) return true;
      const filePath = path.join(contentDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return !isDraftPost(data);
    })
    .map((file) => file.replace(".mdx", ""));
}

export { isDev };

