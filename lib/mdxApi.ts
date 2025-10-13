import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const rootDir = process.cwd();
const blogsDirectory = path.join(rootDir, "blogs");
const snippetsDirectory = path.join(rootDir, "snippets");

// Types
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  category?: string;
  content?: string;
  [key: string]: any;
}

export interface BlogContentRaw {
  source: string;
  matters: {
    slug: string;
    wordCount?: number;
    readingTime?: any;
    [key: string]: any;
  };
}

// Get files from directory
function getFilesFromDir(dirname: string): string[] {
  try {
    const dirPath = path.join(rootDir, dirname);
    if (!fs.existsSync(dirPath)) {
      console.warn(`Directory ${dirname} does not exist`);
      return [];
    }
    return fs
      .readdirSync(dirPath)
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
  } catch (error) {
    console.error(`Error reading directory ${dirname}:`, error);
    return [];
  }
}

export async function getBlogFiles(): Promise<string[]> {
  return getFilesFromDir("blogs");
}

export async function getSnippetFiles(): Promise<string[]> {
  return getFilesFromDir("snippets");
}

// Function for MDXRemote usage - returns raw content
export async function getBlogBySlugRaw(slug: string): Promise<BlogContentRaw> {
  const source = fs.readFileSync(
    path.join(blogsDirectory, `${slug}.mdx`),
    "utf8"
  );
  const { data, content: matterContent } = matter(source);

  return {
    source: matterContent, // Raw MDX content for MDXRemote
    matters: {
      wordCount: matterContent.split(/\s+/gu).length,
      readingTime: readingTime(matterContent),
      slug: slug,
      ...data,
    },
  };
}

// Function for MDXRemote usage - returns raw content
export async function getSnippetBySlugRaw(
  slug: string
): Promise<BlogContentRaw> {
  const source = fs.readFileSync(
    path.join(snippetsDirectory, `${slug}.mdx`),
    "utf8"
  );
  const { data, content: matterContent } = matter(source);

  return {
    source: matterContent, // Raw MDX content for MDXRemote
    matters: {
      slug: slug,
      ...data,
    },
  };
}

export async function getAllBlogsData(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(blogsDirectory)) {
      console.warn("Blogs directory does not exist");
      return [];
    }

    const fileNames = fs.readdirSync(blogsDirectory);
    const allBlogsData = fileNames
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
      .map((filename) => {
        const slug = filename.replace(/\.mdx?$/, "");
        const fullPath = path.join(blogsDirectory, filename);
        const source = fs.readFileSync(fullPath, "utf8");
        const matterResults = matter(source);

        return {
          slug,
          ...matterResults.data,
        } as BlogPost;
      });

    // Sort by date
    return allBlogsData.sort((a, b) => {
      const dateA = new Date(a.date || 0).getTime();
      const dateB = new Date(b.date || 0).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error("Error reading blogs:", error);
    return [];
  }
}

export async function getAllSnippets(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(snippetsDirectory)) {
      console.warn("Snippets directory does not exist");
      return [];
    }

    const fileNames = fs.readdirSync(snippetsDirectory);
    const allSnippetsData = fileNames
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
      .map((filename) => {
        const slug = filename.replace(/\.mdx?$/, "");
        const fullPath = path.join(snippetsDirectory, filename);
        const source = fs.readFileSync(fullPath, "utf8");
        const matterResults = matter(source);

        return {
          slug,
          ...matterResults.data,
        } as BlogPost;
      });

    // Sort by date
    return allSnippetsData.sort((a, b) => {
      const dateA = new Date(a.date || 0).getTime();
      const dateB = new Date(b.date || 0).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error("Error reading snippets:", error);
    return [];
  }
}

// Get all blog slugs for static generation
export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const blogs = await getAllBlogsData();
    return blogs.map((blog) => blog.slug);
  } catch (error) {
    console.error("Error getting blog slugs:", error);
    return [];
  }
}

// Get all snippet slugs for static generation
export async function getAllSnippetSlugs(): Promise<string[]> {
  try {
    const snippets = await getAllSnippets();
    return snippets.map((snippet) => snippet.slug);
  } catch (error) {
    console.error("Error getting snippet slugs:", error);
    return [];
  }
}
