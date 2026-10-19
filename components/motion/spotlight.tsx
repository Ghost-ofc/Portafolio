"use client";

import type { ComponentPropsWithoutRef, PointerEvent } from "react";
import { cn } from "@/lib/utils";

/**
 * Card wrapper with an amber glow that follows the pointer.
 * Only writes two CSS vars; the glow itself is a pseudo-element faded via opacity.
 */
export function Spotlight({
  className,
  onPointerMove,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
    onPointerMove?.(e);
  };

  return <div {...props} onPointerMove={handleMove} className={cn("spotlight", className)} />;
}
