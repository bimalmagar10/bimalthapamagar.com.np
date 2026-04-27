"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/helpers";

interface NowPlayingData {
  isPlaying: boolean;
  name?: string;
  artist?: string;
  songUrl?: string;
}

const SpotifyIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const EqBars = () => (
  <div className="flex items-end gap-[2px] h-[14px] flex-shrink-0">
    {[6, 12, 8, 14, 5].map((h, i) => (
      <div
        key={i}
        className="w-[3px] rounded-sm"
        style={{
          height: h,
          background: "#22c55e",
          animation: `eq ${0.9 + i * 0.1}s ${i * 0.1}s ease-in-out infinite alternate`,
        }}
      />
    ))}
  </div>
);

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingData>("/api/now-playing", fetcher, {
    refreshInterval: 5000,
  });

  if (!data?.isPlaying) return null;

  return (
    <div
      className="hidden md:flex fixed bottom-0 left-0 right-0 z-[200] items-center justify-center gap-[10px] border-t"
      style={{
        height: 44,
        background: "var(--foreground)",
        color: "var(--background)",
        borderColor: "rgba(128,128,128,0.15)",
        fontSize: 13,
        fontWeight: 500,
      }}
    >
      <EqBars />
      <span style={{ opacity: 0.6, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em" }}>
        Now playing
      </span>
      <span style={{ opacity: 0.4 }}>·</span>
      <a
        href={data.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline font-semibold text-[13px] truncate max-w-[200px]"
        style={{ color: "var(--background)" }}
      >
        {data.name}
      </a>
      <span style={{ opacity: 0.5, fontSize: 12 }}>— {data.artist}</span>
      <span style={{ color: "#22c55e", display: "flex", alignItems: "center" }}>
        <SpotifyIcon />
      </span>
    </div>
  );
}
