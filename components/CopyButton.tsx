"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  text: string;
}

const CopyButton = ({ text }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const Icon = isCopied ? Check : Copy;

  return (
    <Button
      variant="outline"
      disabled={isCopied}
      onClick={copy}
      className="absolute right-4 top-12 px-4 py-6 text-base bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      <Icon className="mr-2 h-4 w-4" />
      {isCopied ? "Copied!" : "Copy"}
    </Button>
  );
};

export default CopyButton;
