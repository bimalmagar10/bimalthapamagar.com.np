"use client";

import { usePathname } from "next/navigation";
import NowPlaying from "./now-playing";

export default function GlobalNowPlaying() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="mx-auto w-full max-w-[860px] px-7 pb-6">
      <NowPlaying />
    </div>
  );
}
