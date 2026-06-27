"use client";

import * as React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

// Always use a stable component reference — never create one during render.
// We look up the Lucide component by name once and render it via JSX.
const Fallback = LucideIcons.Circle;

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  // Resolve at render time but use the same component identity across renders.
  const Cmp = React.useMemo(() => {
    const all = LucideIcons as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>;
    if (name in all) return all[name];
    const pascal = name.charAt(0).toUpperCase() + name.slice(1);
    if (pascal in all) return all[pascal];
    return Fallback;
  }, [name]);

  return (
    <Cmp className={cn("h-5 w-5", className)} strokeWidth={strokeWidth} />
  );
}
