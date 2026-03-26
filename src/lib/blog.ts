// blog.ts — helper functions for reading blog post markdown files
// This runs on the SERVER only (Next.js calls it at build time or request time)
// It reads .md files from the /content/blog/ folder and returns parsed data

import fs from "fs";
import path from "path";
import matter from "gray-matter"; // gray-matter parses the frontmatter (the --- block at top of .md files)
import type { BlogPost } from "@/types";

// Path to where your blog post .md files live
const BLOG_DIR = path.join(process.cwd(), "content/blog");

// Get all posts (used on the /blog listing page)
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug    = filename.replace(".md", "");
      const raw     = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data } = matter(raw); // Parse the --- frontmatter block

      return {
        slug,
        title:    data.title    ?? "Untitled",
        date:     data.date     ?? "",
        excerpt:  data.excerpt  ?? "",
        tags:     data.tags     ?? [],
        readTime: data.readTime ?? "5 min read",
      } as BlogPost;
    })
    // Sort newest first
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single post by slug (used on the /blog/[slug] page)
export function getPostBySlug(slug: string): { post: BlogPost; content: string } | null {
  const filepath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;

  const raw              = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);

  return {
    post: {
      slug,
      title:    data.title    ?? "Untitled",
      date:     data.date     ?? "",
      excerpt:  data.excerpt  ?? "",
      tags:     data.tags     ?? [],
      readTime: data.readTime ?? "5 min read",
    },
    content, // Raw markdown string — rendered in BlogPost.tsx
  };
}
