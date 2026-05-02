"use client";

import Link from "next/link";
import { Home, FileText } from "lucide-react";
import { usePathname } from "next/navigation";
import { Dock, DockIcon } from "@/components/ui/dock";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: Home, label: "Home", isActive: pathname === "/" },
    {
      href: "/blogs",
      icon: FileText,
      label: "Blogs",
      isActive: pathname.startsWith("/blogs"),
    },
  ];

  return (
    <nav className="fixed bottom-[max(1.5rem,calc(env(safe-area-inset-bottom)+0.75rem))] left-0 z-50 w-full md:hidden">
      <Dock
        iconMagnification={56}
        iconDistance={100}
        className="border-border/80 bg-background/80 shadow-lg backdrop-blur-xl"
      >
        {navItems.map(({ href, icon: Icon, label, isActive }) => (
          <DockIcon
            key={href}
            className={cn(
              "bg-black/10 text-muted-foreground transition-colors dark:bg-white/10",
              isActive &&
                "bg-[var(--brand)] text-foreground ring-1 ring-black/10 dark:ring-white/20",
            )}
          >
            <Link
              href={href}
              aria-label={label}
              aria-current={isActive ? "page" : undefined}
              className="flex h-full w-full items-center justify-center no-underline"
            >
              <Icon className="h-5 w-5" />
            </Link>
          </DockIcon>
        ))}

        <DockIcon className="bg-black/10 text-muted-foreground transition-colors dark:bg-white/10">
          <ThemeToggle className="h-full w-full p-0 text-inherit hover:no-underline" />
        </DockIcon>
      </Dock>
    </nav>
  );
};

export default MobileNav;
