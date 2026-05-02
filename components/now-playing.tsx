"use client";

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
const SpotifyIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

export interface NowPlayingData {
  isPlaying: boolean;
  name?: string;
  artist?: string;
  songUrl?: string;
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
    <div className="mt-[14px] flex items-center gap-[10px] rounded-[10px] border border-border p-[10px_14px] bg-card animate-fade-up">
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
      <span
        className="flex-shrink-0 flex items-center"
        style={{ color: "#22c55e" }}
      >
        <SpotifyIcon />
      </span>
    </div>
  ) : (
    <div className="mt-[14px] flex items-center gap-[10px] rounded-[10px] border border-border p-[10px_14px] bg-card animate-fade-up">
      <EqBars animating={false} />
      <div className="flex min-w-0 flex-1 items-center gap-[7px]">
        <span className="flex-shrink-0 text-[11px] font-bold uppercase tracking-[0.07em] text-muted-foreground">
          Not playing
        </span>
      </div>
      <span
        className="flex-shrink-0 flex items-center"
        style={{ color: "#22c55e" }}
      >
        <SpotifyIcon />
      </span>
    </div>
  );
}
