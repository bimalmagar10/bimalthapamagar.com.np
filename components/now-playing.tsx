"use client";

import Image from "next/image";
import useSWR from "swr";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fetcher } from "@/lib/helpers";

export const EqBars = ({ animating }: { animating: boolean }) => {
  if (animating) {
    return (
      <div className="overflow-hidden h-3 flex items-end gap-0.5">
        <motion.div
          className={cn(
            "inline-block rounded-t-lg h-full w-[3px]",
            animating ? "bg-[#1ed05e]" : "bg-gray-500",
          )}
          animate={{ y: ["0px", "15px", "0px"], scaleY: [1.0, 1.3, 1.0] }}
          transition={{ repeat: Infinity, duration: 0.7 }}
        />
        <motion.div
          className={cn(
            "inline-block rounded-t-lg h-full w-[3px]",
            animating ? "bg-[#1ed05e]" : "bg-gray-500",
          )}
          initial={{ y: "0px" }}
          animate={{ y: ["0px", "16px", "0px"], scaleY: [1.0, 1.2, 1.0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.1 }}
        />
        <motion.div
          className={cn(
            "inline-block rounded-t-lg h-full w-[3px]",
            animating ? "bg-[#1ed05e]" : "bg-gray-500",
          )}
          initial={{ y: "0px" }}
          animate={{ y: ["0px", "15px", "0px"], scaleY: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 0.9, delay: 0.2 }}
        />
        <motion.div
          className={cn(
            "inline-block rounded-t-lg h-full w-[3px]",
            animating ? "bg-[#1ed05e]" : "bg-gray-500",
          )}
          initial={{ y: "0px" }}
          animate={{ y: ["0px", "16px", "0px"], scaleY: [1.0, 0.5, 1.0] }}
          transition={{ repeat: Infinity, duration: 1.1, delay: 0.1 }}
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden h-3 flex items-end gap-0.5">
      <motion.div
        className={cn(
          "inline-block rounded-t-lg h-1/2 w-[3px]",
          animating ? "bg-[#1ed05e]" : "bg-gray-500",
        )}
      />
      <motion.div
        className={cn(
          "inline-block rounded-t-lg h-2/3 w-[3px]",
          animating ? "bg-[#1ed05e]" : "bg-gray-500",
        )}
      />
      <motion.div
        className={cn(
          "inline-block rounded-t-lg h-1/2 w-[3px]",
          animating ? "bg-[#1ed05e]" : "bg-gray-500",
        )}
      />
      <motion.div
        className={cn(
          "inline-block rounded-t-lg h-2/3 w-[3px]",
          animating ? "bg-[#1ed05e]" : "bg-gray-500",
        )}
      />
    </div>
  );
};
export interface NowPlayingData {
  isPlaying: boolean;
  name?: string;
  artist?: string;
  songUrl?: string;
  albumImageUrl?: string;
}

export default function NowPlaying() {
  const { data: swrData } = useSWR<NowPlayingData>(
    "/api/now-playing",
    fetcher,
    {
      refreshInterval: 5000,
      revalidateOnFocus: false,
    },
  );

  if (!swrData) return null;
  return swrData.isPlaying ? (
    <div className="flex items-center gap-[10px] rounded-[10px] border border-border p-[10px_14px] bg-card animate-fade-up">
      <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[5px] bg-muted text-sm text-muted-foreground">
        {swrData.albumImageUrl ? (
          <Image
            src={swrData.albumImageUrl}
            alt={swrData.name ? `${swrData.name} album cover` : "Album cover"}
            width={34}
            height={34}
            sizes="34px"
            className="h-full w-full object-cover"
          />
        ) : (
          <span aria-hidden="true">♪</span>
        )}
      </div>
      <EqBars animating={true} />
      <div className="flex min-w-0 flex-1 items-center gap-[7px]">
        <span className="flex-shrink-0 text-[11px] font-bold uppercase tracking-[0.07em] text-muted-foreground">
          Now playing
        </span>
        <span className="text-muted-foreground flex-shrink-0">·</span>
        <a
          href={swrData.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="truncate text-[12px] font-semibold hover:underline"
        >
          {swrData.name}
        </a>
        <span className="flex-shrink-0 truncate text-[12px] text-muted-foreground">
          — {swrData.artist}
        </span>
      </div>
    </div>
  ) : (
    <div className="flex items-center gap-[10px] rounded-[10px] border border-border p-[10px_14px] bg-card animate-fade-up">
      <EqBars animating={false} />
      <div className="flex min-w-0 flex-1 items-center gap-[7px]">
        <span className="flex-shrink-0 text-[11px] font-bold uppercase tracking-[0.07em] text-muted-foreground">
          Not playing
        </span>
      </div>
    </div>
  );
}
