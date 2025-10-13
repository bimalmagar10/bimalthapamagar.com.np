"use client";

import Link from "next/link";
import { GridItems } from "../lib/helpers";

const Footer = () => {
  return (
    <footer className="pb-32 sm:pb-32 md:pb-16 lg:pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-10">
        {GridItems.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            target={item.url[0] === "/" ? "_self" : "_blank"}
            rel={item.url[0] === "/" ? undefined : "noopener noreferrer"}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
