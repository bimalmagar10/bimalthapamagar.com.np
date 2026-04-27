"use client";
import Link from "next/link";
import { Home, FileText, BookOpen } from "lucide-react";
import { usePathname } from "next/navigation";

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
    {
      href: "/resources",
      icon: BookOpen,
      label: "Resources",
      isActive: pathname.startsWith("/resources"),
    },
  ];

  return (
    <nav className="block md:hidden w-full shadow-lg fixed bottom-0 left-0 bg-background border-t border-border z-50 px-5 py-2">
      <div className="flex justify-between items-center">
        {navItems.map(({ href, icon: Icon, label, isActive }) => (
          <Link key={href} href={href} className="no-underline">
            <div
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[.7rem]">{label}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
