"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-24">
      <h1 className="font-[family-name:var(--font-saira_stencil_one)] uppercase text-7xl text-foreground">
        404
      </h1>
      <h2 className="font-[family-name:var(--font-saira_stencil_one)] uppercase text-6xl text-foreground">
        Page Not Found
      </h2>
      <Link
        href="/"
        className="text-blue-500 dark:text-blue-300 hover:underline mt-16"
      >
        Back to Home
      </Link>
    </div>
  );
}
