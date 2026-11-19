import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbulb, Cpu, BookOpen, Workflow } from "lucide-react";

export function BeyondCodeSection() {
  const mindsets = [
    {
      icon: Lightbulb,
      title: "Building Through Real Friction",
      quote:
        "Real engineering rarely matches textbook tutorials. Whether repairing broken PDF ligatures or configuring multi-tier ServiceNow approvals, I enjoy finding where abstractions leak and designing durable solutions.",
    },
    {
      icon: Cpu,
      title: "Pragmatic Technology Choices",
      quote:
        "I choose tools based on maintainability, developer ergonomics, performance, and alignment with the problem — not hype or trend cycles.",
    },
    {
      icon: Workflow,
      title: "Systems Thinking & Automation",
      quote:
        "Repetitive manual steps are architectural opportunities. I enjoy turning fragmented workflows into repeatable, observable software pipelines.",
    },
    {
      icon: BookOpen,
      title: "First-Principles Continuous Learning",
      quote:
        "Frameworks evolve rapidly, but computer science fundamentals — data structures, networking, database design, and clean architecture — remain durable anchors.",
    },
  ];

  return (
    <section
      id="beyond-code"
      className="py-24 bg-[#11151D] border-b border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          pill="Beyond Code"
          title="Mindset, Curiosity & Engineering Principles"
          description="How I think about technology, continuous learning, and building useful software beyond syntax."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mindsets.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-xl bg-[#151A24] border border-white/[0.08] hover:border-[#75D69A]/35 transition-colors flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#75D69A]/10 border border-[#75D69A]/25 flex items-center justify-center text-[#75D69A]">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F7FA]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#A0A8B5] leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#A0A8B5]/70">
                  <span>PRINCIPLE 0{idx + 1}</span>
                  <span className="text-[#75D69A]">Engineering Craft</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
