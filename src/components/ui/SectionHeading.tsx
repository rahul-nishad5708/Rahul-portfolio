import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  pill: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  pill,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-14",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-widest uppercase mb-4",
          "bg-[#75D69A]/10 text-[#75D69A] border border-[#75D69A]/20",
          align === "center" && "mx-auto"
        )}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#75D69A]" />
        {pill}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA] leading-[1.18]">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-base text-[#A0A8B5] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
