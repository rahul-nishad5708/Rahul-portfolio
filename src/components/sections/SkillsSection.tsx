import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import {
  Code,
  Layout,
  Server,
  Database,
  Layers,
  Cpu,
  Sparkles,
} from "lucide-react";

export function SkillsSection() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-4 h-4 text-[#75D69A]" />;
      case "Layout":
        return <Layout className="w-4 h-4 text-[#75D69A]" />;
      case "Server":
        return <Server className="w-4 h-4 text-[#75D69A]" />;
      case "Database":
        return <Database className="w-4 h-4 text-[#75D69A]" />;
      case "Layers":
        return <Layers className="w-4 h-4 text-[#75D69A]" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-[#75D69A]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#75D69A]" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Proficient":
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#75D69A]/12 text-[#75D69A] border border-[#75D69A]/25">
            Proficient
          </span>
        );
      case "Actively Using":
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-[#F5F7FA] border border-white/[0.1]">
            Active
          </span>
        );
      default:
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-[#A0A8B5] border border-white/[0.06]">
            Exploring
          </span>
        );
    }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-[#11151D] border-b border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          pill="Technical Stack"
          title="Skills Grounded in Practical Engineering"
          description="Languages, frameworks, databases, and enterprise platforms I actively build with — presented honestly without arbitrary percentages."
        />

        {/* Status Legend */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-xs text-[#A0A8B5]">
          <span className="font-mono text-[#A0A8B5]/70 uppercase tracking-wider text-[11px]">
            Legend:
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#75D69A]" />
            <span>Proficient (Core &amp; Production)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5F7FA]/70" />
            <span>Active (Current Projects)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A0A8B5]/50" />
            <span>Exploring</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#151A24] border border-white/[0.08] hover:border-[#75D69A]/35 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#11151D] border border-white/[0.08] flex items-center justify-center shrink-0">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <h3 className="text-base font-bold text-[#F5F7FA]">
                  {cat.title}
                </h3>
              </div>

              <p className="text-xs text-[#A0A8B5] leading-relaxed mb-5">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11151D] border border-white/[0.06] text-xs text-[#F5F7FA]"
                  >
                    <span className="font-medium">{skill.name}</span>
                    {getStatusBadge(skill.status)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
