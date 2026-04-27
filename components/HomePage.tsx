"use client";

import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "@/lib/helpers";
import { formatShortDate, getReadingTime } from "@/lib/utils";
import { BlogPost } from "@/lib/mdxApi";
import { motion } from "framer-motion";

interface Track {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  songUrl: string;
  duration_ms: number;
}

function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

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

const MailIcon = () => (
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
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ArrIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const EqBars = () => (
  <div className="overflow-hidden h-3 flex items-end gap-0.5">
    <motion.div
      className="inline-block rounded-t-lg h-full w-[3px] bg-[#1ed05e]"
      animate={{ y: ["0px", "15px", "0px"], scaleY: [1.0, 1.3, 1.0] }}
      transition={{ repeat: Infinity, duration: 0.7 }}
    />
    <motion.div
      className="inline-block rounded-t-lg h-full w-[3px] bg-[#1ed05e]"
      initial={{ y: "0px" }}
      animate={{ y: ["0px", "16px", "0px"], scaleY: [1.0, 1.2, 1.0] }}
      transition={{ repeat: Infinity, duration: 1, delay: 0.1 }}
    />
    <motion.div
      className="inline-block rounded-t-lg h-full w-[3px] bg-[#1ed05e]"
      initial={{ y: "0px" }}
      animate={{ y: ["0px", "15px", "0px"], scaleY: [1, 1.4, 1] }}
      transition={{ repeat: Infinity, duration: 0.9, delay: 0.2 }}
    />
    <motion.div
      className="inline-block rounded-t-lg h-full w-[3px] bg-[#1ed05e]"
      initial={{ y: "0px" }}
      animate={{ y: ["0px", "16px", "0px"], scaleY: [1.0, 0.5, 1.0] }}
      transition={{ repeat: Infinity, duration: 1.1, delay: 0.1 }}
    />
  </div>
);

interface HomePageProps {
  recentBlogs: BlogPost[];
}

export default function HomePage({ recentBlogs }: HomePageProps) {
  const { data: tracksData, isLoading: tracksLoading } = useSWR(
    "/api/top-tracks",
    fetcher,
  );
  const { data: nowPlayingData } = useSWR<NowPlayingData>(
    "/api/now-playing",
    fetcher,
    { refreshInterval: 10000 },
  );

  const tracks: Track[] = tracksData?.tracks ?? [];

  return (
    <div className="mx-auto max-w-[860px] px-7 pb-16">
      {/* Hero */}
      <section className="py-[72px] pb-14">
        <div className="flex sm:items-start justify-between gap-2 flex-wrap flex-col-reverse items-center flex sm:flex-row sm:flex-wrap">
          <div className="flex-1">
            <p className="text-[12px] text-center sm:text-start font-semibold text-muted-foreground uppercase tracking-[0.07em] mb-4">
              Researcher · Engineer
            </p>
            <h1
              className="font-extrabold leading-[1.08] mb-6"
              style={{
                fontSize: "clamp(36px, 6vw, 52px)",
                letterSpacing: "-0.035em",
              }}
            >
              Hi <span className="inline-block animate-wave">👋</span> I&rsquo;m{" "}
              <span
                className="rounded-[5px] px-[5px] pb-[2px]"
                style={{ background: "var(--brand)" }}
              >
                Bimal.
              </span>
            </h1>
            <p className="text-[15px] leading-[1.8] text-foreground mb-8 hyphens-auto">
              My name is Bimal Thapa Magar. I am currently based in the United
              States of America. I love to train deep neural networks. I am
              passionate about making efficient large language models, teach
              robots how to localize, created novel computer vision frameworks
              and how can we make it environment friendly. I also can build
              scalable software applications. I have <strong>3.5+</strong> years
              of experience working as a software engineer. In my free time, I
              love to play guitar and write songs.Other than that, I can cook
              large varieties of South Asian dishes.I love cooking more than
              eating.
            </p>
            <div className="flex gap-[10px] flex-wrap">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 rounded-lg px-[18px] py-[9px] text-[13px] font-bold transition-opacity hover:opacity-80"
                style={{
                  background: "var(--foreground)",
                  color: "var(--background)",
                  letterSpacing: "-0.01em",
                }}
              >
                Read writing
              </Link>
              <a
                href="mailto:inheritedbimal@gmail.com"
                className="inline-flex items-center gap-[7px] rounded-lg border border-border px-[18px] py-[9px] text-[13px] font-semibold text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                style={{ letterSpacing: "-0.01em" }}
              >
                <MailIcon /> Say hello
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex-shrink-0">
            <div
              className="h-[134px] w-[134px] overflow-hidden rounded-full"
              style={{ border: "2.5px solid var(--brand)" }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Bimal Thapa Magar"
                width={134}
                height={134}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spotify top tracks */}
      <section className="border-t border-border py-10">
        <div className="mb-5 flex items-center gap-[7px]">
          <span style={{ color: "#22c55e" }}>
            <SpotifyIcon />
          </span>
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-muted-foreground">
            My Top 10 tracks on Spotify
          </p>
        </div>

        {tracksLoading ? (
          <div className="space-y-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="h-[52px] animate-pulse rounded-lg bg-muted"
              />
            ))}
          </div>
        ) : tracks.length > 0 ? (
          <div>
            {tracks.map((track, i) => (
              <a
                key={+i}
                href={track.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[14px] rounded-lg px-[10px] py-[9px] mb-0.5 transition-colors hover:bg-accent"
              >
                <span
                  className="w-[18px] flex-shrink-0 text-right text-[11px] text-muted-foreground"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {i + 1}
                </span>
                <div className="h-[34px] w-[34px] flex-shrink-0 overflow-hidden rounded-[5px]">
                  <Image
                    src={track.imageUrl || "/placeholder.svg"}
                    alt={track.title}
                    width={34}
                    height={34}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="truncate text-[15px] font-semibold">
                    {track.title}
                  </div>
                  <div className="truncate text-[13px] text-muted-foreground">
                    {track.artist}
                  </div>
                </div>
                <span
                  className="flex-shrink-0 text-[11px] text-muted-foreground"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {formatDuration(track.duration_ms)}
                </span>
              </a>
            ))}
          </div>
        ) : null}

        {/* Now Playing inline widget */}
        {nowPlayingData?.isPlaying && (
          <div className="mt-[14px] flex items-center gap-[10px] rounded-[10px] border border-border p-[10px_14px] bg-card animate-fade-up">
            <EqBars />
            <div className="flex min-w-0 flex-1 items-center gap-[7px]">
              <span className="flex-shrink-0 text-[11px] font-bold uppercase tracking-[0.07em] text-muted-foreground">
                Now playing
              </span>
              <span className="text-muted-foreground flex-shrink-0">·</span>
              <a
                href={nowPlayingData.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="truncate text-[12px] font-semibold hover:underline"
              >
                {nowPlayingData.name}
              </a>
              <span className="flex-shrink-0 truncate text-[12px] text-muted-foreground">
                — {nowPlayingData.artist}
              </span>
            </div>
            <span
              className="flex-shrink-0 flex items-center"
              style={{ color: "#22c55e" }}
            >
              <SpotifyIcon />
            </span>
          </div>
        )}
      </section>

      {/* Recent writing */}
      <section className="border-t border-border py-10">
        <div className="mb-5 flex items-baseline justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
            Recent writing
          </p>
          <Link
            href="/blogs"
            className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            All posts <ArrIcon />
          </Link>
        </div>

        {recentBlogs.slice(0, 2).map((blog, idx) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="block border-b border-border pt-4 pb-2 px-2 cursor-pointer flex flex-col sm:flex-row item-center gap-3"
            style={{
              animation: `fadeUp 0.4s ${idx * 0.08}s ease both`,
            }}
          >
            <h3
              className="text-[15px] font-bold leading-[1.4] transition-opacity hover:opacity-50 flex-1"
              style={{ letterSpacing: "-0.015em" }}
            >
              {blog.title}
            </h3>
            <div className="mb-[7px] flex items-center gap-2">
              <span className="text-[11px] text-muted-foreground">
                {blog.content ? getReadingTime(blog.content) : "5 min read"}
              </span>
              <span className="text-gray-400">·</span>
              <span className="text-[11px] text-muted-foreground">
                {formatShortDate(blog.date)}
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Contact banner */}
      <section className="py-10 pb-20">
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-[14px] p-[36px_32px] bg-gray-200 dark:bg-gray-800">
          <div>
            <h2
              className="text-[20px] font-extrabold mb-[6px]"
              style={{ letterSpacing: "-0.025em" }}
            >
              Let&rsquo;s build something together.
            </h2>
            <p className="text-[13px] leading-[1.6]" style={{ opacity: 0.75 }}>
              Open to any roles &amp; collaborations.
            </p>
          </div>
          <a
            href="mailto:inheritedbimal@gmail.com"
            className="inline-flex flex-shrink-0 items-center gap-[7px] rounded-[9px] px-5 py-[10px] text-[13px] font-bold text-black transition-opacity hover:opacity-80"
            style={{ background: "var(--brand)" }}
          >
            <MailIcon /> Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}
