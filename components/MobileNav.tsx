"use client";
import Link from "next/link";
import { Home, FileText, Code2, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const MobileNav = () => {
  const uri = usePathname();
  const regexForBlogsRoute = useMemo(() => {
    return new RegExp(/^\/blogs(?:\/[\w-]+)*$/);
  }, []);

  const navItems = [
    { href: "/", icon: Home, label: "Home", isActive: uri === "/" },
    {
      href: "/blogs",
      icon: FileText,
      label: "Blogs",
      isActive: regexForBlogsRoute.test(uri),
    },
    {
      href: "/snippets",
      icon: Code2,
      label: "Snippets",
      isActive: uri.includes("snippets"),
    },
  ];

  return (
    <nav className="block md:hidden w-full shadow-lg fixed bottom-0 left-0 bg-background border-t z-50 px-5 py-2">
      <div className="flex justify-between items-center">
        {navItems.map(({ href, icon: Icon, label, isActive }) => (
          <Link key={href} href={href} className="no-underline">
            <div
              className={`flex flex-col items-center gap-1 ${
                isActive
                  ? "text-[#245B95] dark:text-[#90B9E4]"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[.75rem]">{label}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
