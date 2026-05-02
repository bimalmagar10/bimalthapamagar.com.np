"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/ui/dock";
import { FileText, Home } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function MobileNavSample() {
  return (
    <div className="relative">
      <Dock iconMagnification={60} iconDistance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Icons.home />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Icons.blogs />
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  home: () => <Home />,
  blogs: () => <FileText />,
};
