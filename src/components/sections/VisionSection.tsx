import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass, Cpu, Layers, Sparkles, Target } from "lucide-react";

export function VisionSection() {
  const goalAreas = [
    {
      icon: Cpu,
      title: "Scalable Full-Stack Engineering",
      objective:
        "Deepening knowledge of distributed systems, asynchronous pipelines, database optimization, and resilient backend architecture.",
    },
    {
      icon: Sparkles,
      title: "Applied AI & Intelligent Workflows",
      objective:
        "Building practical AI-enabled applications with real-time streaming, structured output validation, and reliable error handling.",
    },
    {
      icon: Layers,
      title: "Enterprise Application Development",
      objective:
        "Leveraging ServiceNow CAD & CSA foundations to bridge enterprise IT operations with modern cloud software and workflow automation.",
    },
    {
      icon: Target,
      title: "Product Engineering & Craftsmanship",
      objective:
        "Understanding real user problems, designing thoughtful interfaces, and shipping maintainable software that delivers lasting value.",
    },
  ];

  return (
    <section
      id="vision"
      className="py-24 bg-[#090B10] border-b border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          pill="Vision & Future Goals"
          title="Where I Want to Go as a Software Engineer"
          description="Areas I am actively investing in as I prepare to graduate from Parul University and contribute to engineering teams."
        />

        {/* Editorial Vision Callout */}
        <div className="p-7 sm:p-9 rounded-xl bg-[#151A24] border border-white/[0.08] mb-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#75D69A]/10 border border-[#75D69A]/25 text-[#75D69A] text-[11px] font-mono uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Direction</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] leading-snug">
              &ldquo;Building practical technology. Exploring intelligent solutions. Growing into a better software engineer.&rdquo;
            </h3>

            <p className="text-sm sm:text-base text-[#A0A8B5] leading-relaxed">
              My goal is not simply to write code, but to understand problems deeply, design reliable systems, and collaborate with strong engineering teams to build products that create genuine value.
            </p>
          </div>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goalAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#151A24] border border-white/[0.08] hover:border-[#75D69A]/35 transition-colors space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#11151D] border border-white/[0.08] text-[#75D69A] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#F5F7FA]">
                    {area.title}
                  </h4>
                </div>

                <p className="text-sm text-[#A0A8B5] leading-relaxed">
                  {area.objective}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
