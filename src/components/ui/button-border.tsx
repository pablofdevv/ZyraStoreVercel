"use client";
import React from "react";
import { Moon } from "@aliimam/icons";
import { cn } from "@/lib/utils";

export function ButtonBorder({
  children,
  text,
  className,
  onClick,
  ...props
}: {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}) {
  const content = children || text || "Animated Border";

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-semibold text-white bg-black/80 backdrop-blur-xl border border-white/20 shadow-lg cursor-pointer transition-all duration-300 active:scale-95",
        className
      )}
      {...props}
    >
      {/* 360° Traveling Border Light */}
      <span className="absolute inset-0 rounded-full p-[1.5px] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
        <span className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(255,255,255,1)_360deg)]" />
      </span>

      {/* Glass Inner Surface */}
      <span className="absolute inset-[1.5px] rounded-full bg-black/90 backdrop-blur-2xl group-hover:bg-zinc-900/90 pointer-events-none transition-colors" />

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {content}
      </span>
    </button>
  );
}

export function ButtonDemo() {
  return (
    <div className="flex gap-4 items-center justify-center p-6 bg-black">
      <ButtonBorder>
        <Moon />
      </ButtonBorder>

      <ButtonBorder text="Animated Border" />
    </div>
  );
}
