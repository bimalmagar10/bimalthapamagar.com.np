"use client";

import { useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/mdxApi";
import { formatShortDate, getReadingTime } from "@/lib/utils";

interface BlogsPageProps {
  allSortedBlogs: BlogPost[];
}

const CATS = ["All", "Life", "Tech"] as const;
type Cat = (typeof CATS)[number];

function getBlogCategory(blog: BlogPost): "Life" | "Tech" {
  if (blog.category) {
    const c = String(blog.category).toLowerCase();
    if (c === "life" || c === "personal") return "Life";
    return "Tech";
  }
  const tags = blog.tags ?? [];
  const lifeTerms = ["life", "personal", "relationship", "love", "mental"];
  if (tags.some((t) => lifeTerms.includes(t.toLowerCase()))) return "Life";
  return "Tech";
}

const SearchIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export default function BlogsPage({ allSortedBlogs }: BlogsPageProps) {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState<Cat>("All");

  const filtered = allSortedBlogs.filter((blog) => {
    const matchesCat =
      activeCat === "All" || getBlogCategory(blog) === activeCat;
    const matchesSearch =
      !search ||
      blog.title?.toLowerCase().includes(search.toLowerCase()) ||
      String(blog.description ?? blog.shortTheme ?? "")
        .toLowerCase()
        .includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-[860px] px-7 pb-20">
      <section
        className="py-16 pb-7"
        style={{ animation: "fadeUp 0.4s ease both" }}
      >
        <h1
          className="font-extrabold mb-[10px]"
          style={{
            fontSize: "clamp(30px, 5vw, 42px)",
            letterSpacing: "-0.035em",
          }}
        >
          Writing
        </h1>
        <p className="text-[14px] text-muted-foreground mb-7 leading-[1.7]">
          Thoughts on ML, software, and life. {allSortedBlogs.length} posts
          total.
        </p>

        {/* Search */}
        <div className="relative mb-[14px]">
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <SearchIcon />
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts…"
            className="w-full rounded-[9px] border border-border bg-card py-[10px] pl-8 pr-3 text-[13px] text-foreground outline-none transition-colors focus:border-foreground"
          />
        </div>

        {/* Category chips */}
        <div className="flex gap-[6px]">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className="rounded-full border px-[13px] py-1 text-[12px] font-semibold transition-colors cursor-pointer"
              style={
                activeCat === c
                  ? {
                      background: "var(--foreground)",
                      color: "var(--background)",
                      borderColor: "var(--foreground)",
                    }
                  : {
                      background: "transparent",
                      color: "var(--muted-foreground)",
                      borderColor: "var(--border)",
                    }
              }
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Blog list */}
      <div className="pb-4">
        {filtered.length === 0 && (
          <p className="py-6 text-[13px] text-muted-foreground">
            No results for &ldquo;{search}&rdquo;
          </p>
        )}
        {filtered.map((blog, idx) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="flex items-start justify-between gap-6 border-b border-border  pt-4 pb-2 px-2 cursor-pointer"
            style={{
              animation: `fadeUp 0.35s ${idx * 0.07}s ease both`,
            }}
          >
            <h3
              className="flex-1 min-w-0 text-[16px] font-bold leading-[1.45] transition-opacity hover:opacity-45"
              style={{ letterSpacing: "-0.016em" }}
            >
              {blog.title}
            </h3>
            <div className="flex-shrink-0 flex items-center gap-2 pt-[2px]">
              <span className="whitespace-nowrap text-[11px] text-muted-foreground">
                {blog.content ? getReadingTime(blog.content) : "5 min read"}
              </span>
              <span className="text-gray-400">·</span>
              <span className="whitespace-nowrap text-[11px] text-muted-foreground">
                {formatShortDate(blog.date)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
