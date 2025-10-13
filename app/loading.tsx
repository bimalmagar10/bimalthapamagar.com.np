"use client";
import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full min-h-[200px]">
      <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}
