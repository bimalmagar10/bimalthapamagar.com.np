"use client";

import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "@/lib/helpers";
import { cn, formatShortDate, getReadingTime } from "@/lib/utils";
import { BlogPost } from "@/lib/mdxApi";
import NowPlaying from "./now-playing";

interface Track {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  songUrl: string;
  playcount: number;
}

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

interface HomePageProps {
  recentBlogs: BlogPost[];
}

export default function HomePage({ recentBlogs }: HomePageProps) {
  const { data: tracksData, isLoading: tracksLoading } = useSWR(
    "/api/top-tracks",
    fetcher,
  );

  const tracks: Track[] = tracksData?.tracks ?? [];
  const showTracksSkeleton = tracksLoading && tracks.length === 0;

  return (
    <div className="mx-auto max-w-[860px] px-7 pb-16">
      {/* Hero */}
      <section className="py-[60px] pb-14">
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
                className={cn(
                  `inline-flex items-center gap-2 rounded-lg px-[18px] py-[9px] text-[13px] font-bold transition-opacity hover:opacity-80`,
                  "bg-foreground dark:bg-[var(--brand)] text-[var(--background)]",
                )}
                style={{
                  letterSpacing: "-0.01em",
                }}
              >
                Read writing
                <ArrIcon />
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

      {/* Last.fm top tracks */}
      <section className="border-t border-border py-10">
        <div className="mb-5">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-muted-foreground">
            My Top 10 Tracks
          </p>
        </div>
        {showTracksSkeleton ? (
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
                key={track.id}
                href={track.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[14px] rounded-lg px-1 sm:pb-[10px] py-[9px] mb-0.5 transition-colors hover:bg-accent"
              >
                <span
                  className="w-[18px] flex-shrink-0 text-right text-[11px] text-muted-foreground"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {i + 1}
                </span>
                <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[5px] bg-muted text-sm text-muted-foreground">
                  {track.imageUrl ? (
                    <Image
                      src={track.imageUrl}
                      alt={track.title}
                      width={34}
                      height={34}
                      sizes="34px"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span aria-hidden="true">♪</span>
                  )}
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
                  {track.playcount > 0
                    ? `${track.playcount.toLocaleString()} plays`
                    : null}
                </span>
              </a>
            ))}
          </div>
        ) : null}
        <div className="mt-[14px]">
          <NowPlaying />
        </div>
      </section>

      {/* Recent writing */}
      <section className="border-t border-border py-5">
        <div className="mb-3 flex items-baseline justify-between">
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
            className="block border-none border-border pt-2 pb-0 px-0 cursor-pointer flex flex-col sm:flex-row item-center gap-3"
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
      <section className="py-4 pb-20">
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
