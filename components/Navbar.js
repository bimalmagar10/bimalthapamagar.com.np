import { Stack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { usePathname } from "next/navigation";
const NavItem = ({ href, text }) => {
  const uri = usePathname();
  const isActive =
    href === "/snippets" || href === "/blogs"
      ? uri?.includes(href)
      : uri === href;
  return (
    <Link href={href} fontWeight={isActive ? "700" : "400"}>
      {text}
    </Link>
  );
};
const Navbar = () => {
  return (
    <Stack
      direction="row"
      spacing="5rem"
      display={["none", "none", "flex", "flex"]}
    >
      <NavItem href="/" text="Home" />
      <NavItem href="/blogs" text="Blogs" />
      <NavItem href="/snippets" text="Snippets" />
      <NavItem href="/about-me" text="About Me" />
    </Stack>
  );
};
export default Navbar;
