import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  const pathname = usePathname();
  const isActive =
    href === "/snippets" || href === "/blogs"
      ? pathname?.includes(href)
      : pathname === href;

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        asChild
        className={cn(
          navigationMenuTriggerStyle(),
          "font-normal hover:font-semibold transition-all duration-200",
          isActive && "font-bold bg-accent text-accent-foreground"
        )}
      >
        <Link href={href}>{text}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const Navbar = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="space-x-8">
        <NavItem href="/" text="Home" />
        <NavItem href="/blogs" text="Blogs" />
        <NavItem href="/snippets" text="Snippets" />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
