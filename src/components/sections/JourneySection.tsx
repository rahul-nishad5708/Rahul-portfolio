import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timelineMilestones } from "@/data/timeline";
import { GraduationCap, Award, Code2, Rocket } from "lucide-react";

export function JourneySection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-4 h-4 text-[#75D69A]" />;
      case "certification":
        return <Award className="w-4 h-4 text-[#75D69A]" />;
      case "dsa":
        return <Code2 className="w-4 h-4 text-[#75D69A]" />;
      default:
        return <Rocket className="w-4 h-4 text-[#75D69A]" />;
    }
  };

  return (
    <section
      id="journey"
      className="py-24 bg-[#090B10] border-b border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          pill="My Journey"
          title="Verified Milestones & Continuous Growth"
          description="Chronological progression from core Computer Science fundamentals to enterprise certifications and full-stack software development."
        />

        <div className="space-y-6">
          {timelineMilestones.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start"
            >
              {/* Left Period Column */}
              <div className="md:col-span-3 md:pt-5 flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2">
                <span className="text-xs font-mono font-semibold text-[#75D69A] bg-[#75D69A]/10 border border-[#75D69A]/20 px-2.5 py-1 rounded-md">
                  {item.period}
                </span>
              </div>

              {/* Right Card Column */}
              <div className="md:col-span-9 p-6 rounded-xl bg-[#151A24] border border-white/[0.08] hover:border-[#75D69A]/35 transition-colors space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#11151D] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                      {getIcon(item.type)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#F5F7FA]">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-[#75D69A]/90 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#A0A8B5] leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#11151D] text-[#A0A8B5] border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
