"use client";

import { useState } from "react";
import { Search, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PostItemOverlay from "./PostItemOverlay";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BlogPost } from "@/lib/mdxApi";

interface BlogsPageProps {
  allSortedBlogs: BlogPost[];
}

const BlogsPage = ({ allSortedBlogs }: BlogsPageProps) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogs =
    allSortedBlogs && allSortedBlogs?.length > 0
      ? allSortedBlogs.filter((blog) => {
          const searchLower = searchValue.toLowerCase();
          return (
            blog.title?.toLowerCase().includes(searchLower) ||
            blog.description?.toLowerCase().includes(searchLower) ||
            blog.tags?.some((tag) => tag.toLowerCase().includes(searchLower))
          );
        })
      : [];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Blogs - by Bimal Thapa Magar
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          I&apos;ve written these blogs to help you excel some of the skills you
          lack. Therefore, feel free to read them by searching topics of your
          interest.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative mb-8">
        <Input
          type="text"
          placeholder="Search posts by title"
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
          className="pl-4 pr-12 py-6 text-base w-full"
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground ">
        All Posts {filteredBlogs.length > 0 && `(${filteredBlogs.length})`}
      </h2>

      {!filteredBlogs.length && (
        <Alert
          variant="destructive"
          className="mb-8 mt-4 shadow-none border-none bg-red-100 dark:bg-red-800 dark:text-red-100"
        >
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-red-800 dark:text-red-100">
            No posts found matching &quot;{searchValue}&quot;. Try a different
            search term.
          </AlertDescription>
        </Alert>
      )}

      {/* Blog Posts List with Animation */}
      <div className="space-y-0">
        <AnimatePresence>
          {filteredBlogs.map((blog, idx) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.05,
                ease: "easeOut",
              }}
              layout
            >
              <PostItemOverlay
                slug={blog.slug}
                title={blog.title}
                date={blog.date}
                summary={String(blog.description || blog.shortTheme || "")}
                content={blog.content}
                tags={blog.tags}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogsPage;
