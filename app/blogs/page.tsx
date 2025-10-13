import BlogsPage from "../../components/BlogsPage";
import { getAllBlogsData } from "../../lib/mdxApi";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Welcome to Bimal Thapa Magar's Blog. These are the blogs you must read and know.",
  openGraph: {
    title: "Bimal Thapa Magar's Blog",
    description:
      "I have written these blogs and that they will help you to learn something new",
  },
};

async function getBlogs() {
  try {
    let allSortedBlogs = await getAllBlogsData();

    if (allSortedBlogs && allSortedBlogs?.length > 0) {
      const blogsDirectory = path.join(process.cwd(), "blogs");
      const blogsWithContent = allSortedBlogs.map((blog) => {
        try {
          const fullPath = path.join(blogsDirectory, `${blog.slug}.mdx`);
          const source = fs.readFileSync(fullPath, "utf8");
          const { content } = matter(source);
          return {
            ...blog,
            content,
          };
        } catch (error) {
          console.error(`Error reading blog ${blog.slug}:`, error);
          return blog;
        }
      });
      return blogsWithContent;
    }
    return [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function Blog() {
  const all_blogs = await getBlogs();
  return <BlogsPage allSortedBlogs={all_blogs} />;
}
