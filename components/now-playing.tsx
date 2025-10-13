"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "../lib/helpers";

const AnimatedBars = () => {
  return (
    <div className="overflow-hidden h-4 flex items-end gap-0.5">
      <motion.div
        className="inline-block rounded-t-lg h-full w-[3px] bg-[#1ed05e]"
        animate={{ y: ["0px", "15px", "0px"], scaleY: [1.0, 1.3, 1.0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      <motion.div
        className="inline-block rounded-t-lg h-full w-[3px] bg-[#1ed05e]"
        initial={{ y: "0px" }}
        animate={{ y: ["0px", "16px", "0px"], scaleY: [1.0, 1.2, 1.0] }}
        transition={{ repeat: Infinity, duration: 1.2, delay: 0.1 }}
      />
      <motion.div
        className="inline-block rounded-t-lg h-full w-[3px] bg-[#1ed05e]"
        initial={{ y: "0px" }}
        animate={{ y: ["0px", "15px", "0px"], scaleY: [1, 1.4, 1] }}
        transition={{ repeat: Infinity, duration: 1.1, delay: 0.2 }}
      />
      <motion.div
        className="inline-block rounded-t-lg h-full w-[3px] bg-[#1ed05e]"
        initial={{ y: "0px" }}
        animate={{ y: ["0px", "16px", "0px"], scaleY: [1.0, 0.5, 1.0] }}
        transition={{ repeat: Infinity, duration: 1.3, delay: 0.1 }}
      />
    </div>
  );
};

const NowPlaying = () => {
  const { data, error } = useSWR("/api/now-playing", fetcher, {
    refreshInterval: 1000,
  });

  return (
    <div
      className={cn(
        "py-4 flex flex-col sm:flex-row gap-4 sm:gap-4",
        "items-start sm:items-center mb-6 sm:mb-0"
      )}
    >
      <div className="flex items-center gap-2">
        <Image
          src="/spotify-1.svg"
          alt="Spotify Icon"
          width={80}
          height={80}
          className="h-20 w-20"
        />
        {!data?.isPlaying && (
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">-</span>
            <span className="text-smfont-bold">Not Playing</span>
          </div>
        )}
      </div>

      {data?.isPlaying && (
        <div className="flex items-start sm:items-center gap-4">
          <AnimatedBars />
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-1 sm:gap-2">
            <a
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              {data.name}
            </a>
            <span className="hidden sm:inline text-muted-foreground">-</span>
            <span className="text-sm text-muted-foreground">{data.artist}</span>
            <Badge
              variant="secondary"
              className="w-fit text-[.6rem] font-bold bg-green-100 border-none text-green-700 dark:bg-green-900 dark:text-green-400"
            >
              Playing
            </Badge>
          </div>
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
