import path from "path";
import fs from "fs";
import matter from "gray-matter";
const blogDirectory = path.join(process.cwd(), "blogs");

interface BlogData {
  slug: string;
  date?: string;
  [key: string]: string | number | string[] | undefined;
}

export function getSortedBlogsData() {
  const fileNames = fs.readdirSync(blogDirectory);
  const allBlogsData: BlogData[] = fileNames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");

    const fullPath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResults = matter(fileContents);
    return {
      slug,
      ...matterResults.data,
    };
  });
  return allBlogsData.sort((a, b) => {
    const dateA = String(a.date || "");
    const dateB = String(b.date || "");
    if (dateA < dateB) {
      return 1;
    } else if (dateA > dateB) {
      return -1;
    } else {
      return 0;
    }
  });
}
export function getAllBlogSlugs() {
  const fileNames = fs.readdirSync(blogDirectory);
  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getBlogData(slug: string) {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    data,
    content,
  };
}
