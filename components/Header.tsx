"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const GithubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const navLinks = [
  { href: "/", label: "home" },
  { href: "/blogs", label: "blogs" },
  { href: "/resources", label: "resources" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-[100] border-b border-border/60 bg-background/90 backdrop-blur-[14px] backdrop-saturate-150 transition-all duration-300">
      <div className="mx-auto flex h-[52px] max-w-[860px] items-center justify-between px-7">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-foreground"
          style={{ letterSpacing: "-0.03em" }}
        >
          Bimal<span style={{ color: "var(--brand)" }}>.</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] capitalize transition-colors duration-200",
                isActive(link.href)
                  ? "border-b-[2px] border-[var(--brand)] pb-0.5 font-bold text-foreground"
                  : "font-normal text-muted-foreground hover:text-foreground",
              )}
              style={{ letterSpacing: "-0.01em" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/bimalmagar10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex rounded-md p-[5px] text-faint transition-colors hover:text-foreground"
              style={{ color: "var(--faint)" }}
            >
              <GithubIcon />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
