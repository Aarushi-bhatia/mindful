import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names and removes conflicting Tailwind styles.
 * Example: cn("bg-red-500", isActive && "bg-green-400") will only apply green if true.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}