import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content");

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  image?: string;
  tags?: string[];
  readingTime: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  image?: string;
  tags?: string[];
  readingTime: string;
}

export function getAllPosts(): BlogPostMeta[] {
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
        summary: data.summary || "",
        publishedAt: data.publishedAt || "",
        image: data.image,
        tags: data.tags || [],
        readingTime: stats.text,
      };
    })
    .sort((a, b) => {
      if (!a.publishedAt || !b.publishedAt) return 0;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || slug,
    summary: data.summary || "",
    publishedAt: data.publishedAt || "",
    image: data.image,
    tags: data.tags || [],
    readingTime: stats.text,
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
}

