import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeHighlight from "rehype-highlight";
import readingTime from "reading-time";
import { visit } from "unist-util-visit";

import dynamic from "next/dynamic";
import { compileMDX } from "next-mdx-remote/rsc";
const MDXComponents = dynamic(() => import("../components/mdxComponents"));
import { customMDXCmpnts } from "../components/mdxComponents";
const rootDir = process.cwd();

function getFilesFromDir(dirname) {
  return fs.readdirSync(path.join(rootDir, dirname));
}

export async function getBlogFiles() {
  return getFilesFromDir("blogs");
}

export async function getSnippetFiles() {
  return getFilesFromDir("snippets");
}
export const preProcess = () => (tree) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;

      if (codeEl.tagName !== "code") return;

      node.raw = codeEl.children?.[0].value;
    }
  });
};

export const postProcess = () => (tree) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties["raw"] = node.raw;
      console.log(node.raw);
    }
  });
};

export async function getBlogBySlug(slug) {
  const source = slug
    ? fs.readFileSync(path.join(rootDir, "blogs", `${slug}.mdx`), "utf8")
    : null;
  const { data, content: matterContent } = matter(source);

  const { content, frontmatter } = await compileMDX({
    source: source,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeAutolinkHeadings,
          rehypeSlug,
          rehypeCodeTitles,
          rehypeHighlight,
          rehypePrism,
        ],
      },
      parseFrontmatter: true,
    },
    components: MDXComponents,
  });
  return {
    content,
    matters: {
      wordCount: matterContent.split(/\s+/gu).length,
      readingTime: readingTime(matterContent),
      slug: slug || null,
      ...frontmatter,
    },
  };
}

export async function getSnippetBySlug(slug) {
  const source = slug
    ? fs.readFileSync(path.join(rootDir, "snippets", `${slug}.mdx`), "utf8")
    : null;

  const { content, frontmatter } = await compileMDX({
    source: source,
    options: {
      mdxOptions: {
        rehypePlugins: [
          preProcess,
          rehypeAutolinkHeadings,
          rehypeSlug,
          rehypeCodeTitles,
          rehypeHighlight,
          rehypePrism,
          postProcess,
        ],
      },
      parseFrontmatter: true,
    },
    components: { ...MDXComponents, ...customMDXCmpnts },
  });

  return {
    content,
    matters: {
      slug: slug || null,
      ...frontmatter,
    },
  };
}

export async function getAllBlogsData() {
  const fileNames = fs.readdirSync(path.join(rootDir, "blogs"));
  const allBlogsData = fileNames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");

    const fullPath = path.join(rootDir, "blogs", filename);
    const source = fs.readFileSync(fullPath, "utf8");

    const matterResults = matter(source);

    return {
      slug,
      ...matterResults.data,
    };
  });
  //sorting the blogs acc. to latest one
  return allBlogsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export async function getAllSnippets() {
  const fileNames = fs.readdirSync(path.join(rootDir, "snippets"));

  const allSnippetsData = fileNames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");

    const fullPath = path.join(rootDir, "snippets", filename);
    const source = fs.readFileSync(fullPath, "utf8");

    const matterResults = matter(source);

    return {
      slug,
      ...matterResults.data,
    };
  });

  //sorting the snippets acc. to latest one
  return allSnippetsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
