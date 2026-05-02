import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import readingTime from "reading-time";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function createTagInitials(tags: string[]): string {
  if (tags.length === 0) return "AI";

  const shortestTag = tags.reduce((shortest, current) =>
    current.length < shortest.length ? current : shortest
  );

  const words = shortestTag
    .trim()
    .split(" ")
    .filter((word) => word.length > 0);

  if (words.length === 1) {
    return shortestTag;
  }

  return words.map((word) => word.charAt(0).toUpperCase()).join("");
}

export function parseLocalDate(dateString: string): Date {
  // For YYYY-MM-DD format, create date in local timezone to avoid UTC conversion
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day); // month is 0-indexed
}

export function formatDisplayDate(dateString: string): string {
  const date = parseLocalDate(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatShortDate(dateString: string): string {
  const date = parseLocalDate(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Format relative time
export function getRelativeTime(dateString: string): string {
  const now = new Date();
  const postDate = parseLocalDate(dateString);
  const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  } else {
    const years = Math.floor(diffInSeconds / 31536000);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  }
}

export function getReadingTime(content: string): string {
  const stats = readingTime(content);
  return stats.text;
}

/**
 * Copy text to clipboard and show a toast notification
 * @param text - The text to copy to clipboard
 * @param successMessage - Optional success message (defaults to "Copied to clipboard!")
 * @returns Promise that resolves to true if successful, false otherwise
 */
export async function copyToClipboard(
  text: string,
  successMessage: string = "Copied to clipboard!"
): Promise<boolean> {
  try {
    // Modern clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      toast.success(successMessage);
      return true;
    } else {
      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      textArea.remove();

      if (successful) {
        toast.success(successMessage);
        return true;
      }
      return false;
    }
  } catch (err) {
    console.error("Failed to copy text: ", err);
    toast.error("Failed to copy to clipboard");
    return false;
  }
}
