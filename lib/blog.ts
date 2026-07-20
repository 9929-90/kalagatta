import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  author: string;
  publishDate: string;
  updatedDate: string;
  category: string;
  featuredImage: string;
  excerpt: string;
  faqs: { question: string; answer: string }[];
  content: string;
  headings: { id: string; text: string }[];
};

const blogDir = path.join(process.cwd(), "content", "blog");

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function extractHeadings(content: string) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace(/^##\s+/, "").trim();
      return { text, id: slugify(text) };
    });
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
      const parsed = matter(raw);
      const data = parsed.data as Omit<BlogPost, "content" | "headings">;
      return {
        ...data,
        slug: data.slug,
        content: parsed.content,
        headings: extractHeadings(parsed.content),
      };
    })
    .sort((a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate));
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return getAllPosts()
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, limit);
}
