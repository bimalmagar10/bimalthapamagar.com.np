"use client";

import Link from "next/link";
import { dateFormatter } from "../lib/helpers";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface Snippet {
  slug: string;
  title: string;
  date: string;
}

interface SnippetsListsProps {
  data: Snippet[];
}

const SnippetsLists = ({ data }: SnippetsListsProps) => {
  return (
    <div className="flex flex-col items-start my-8 gap-4">
      {data &&
        data.length > 0 &&
        data.map((snippet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="flex flex-col justify-between gap-2"
          >
            <h2 className="text-2xl font-inherit">
              <Link
                href={`/snippets/${snippet?.slug}`}
                className="font-semibold hover:underline"
              >
                {snippet?.title}
              </Link>
            </h2>
            <time className="text-muted-foreground text-sm flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {dateFormatter(snippet?.date)}
            </time>
          </motion.div>
        ))}
    </div>
  );
};

export default SnippetsLists;
