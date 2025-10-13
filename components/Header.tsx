"use client";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      className={cn(
        "mb-10 px-2 py-4 flex items-center justify-center md:justify-between",
        "sticky top-0 z-[100]",
        "backdrop-blur-md backdrop-saturate-180",
        "bg-background/80 border-b border-border/50",
        "transition-all duration-300 ease-in-out"
      )}
    >
      <ThemeToggle />
      <Navbar />
    </header>
  );
};

export default Header;
