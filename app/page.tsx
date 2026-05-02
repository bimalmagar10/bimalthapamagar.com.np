import HomePage from "../components/HomePage";
import { getAllBlogsData } from "../lib/mdxApi";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Bimal Thapa Magar — ML Engineer & Software Developer",
  description:
    "ML engineer & software developer based in the United States. I build efficient LLMs and scalable web applications.",
  openGraph: {
    title: "Bimal Thapa Magar",
    description:
      "ML engineer & software developer. I build efficient LLMs and scalable web applications.",
  },
};

async function getRecentBlogs() {
  try {
    const allBlogs = await getAllBlogsData();
    if (!allBlogs || allBlogs.length === 0) return [];

    const blogsDirectory = path.join(process.cwd(), "blogs");
    return allBlogs.slice(0, 3).map((blog) => {
      try {
        const fullPath = path.join(blogsDirectory, `${blog.slug}.mdx`);
        const source = fs.readFileSync(fullPath, "utf8");
        const { content } = matter(source);
        return { ...blog, content };
      } catch {
        return blog;
      }
    });
  } catch {
    return [];
  }
}

export default async function Home() {
  const recentBlogs = await getRecentBlogs();
  return <HomePage recentBlogs={recentBlogs} />;
}
