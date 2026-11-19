import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profileData } from "@/data/profile";
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  BookOpen,
  Compass,
  GraduationCap,
} from "lucide-react";

export function AboutSection() {
  const story = profileData.aboutMeStory;

  const corePillars = [
    {
      icon: Code2,
      title: "Pragmatic Full-Stack Engineering",
      description:
        "Building applications end-to-end with React, Next.js, Node.js, and modern databases, focusing on reliability beyond local demos.",
    },
    {
      icon: Layers,
      title: "Enterprise Systems & ServiceNow",
      description:
        "Certified in both CSA and CAD. Experienced with CMDB modeling, ITSM processes, scoped workflows, and role-based governance.",
    },
    {
      icon: Sparkles,
      title: "Purpose-Driven Applied AI",
      description:
        "Integrating LLMs to solve concrete friction points — like real-time streaming resume analysis in JobFit.ai and content moderation in ConnectSphere.",
    },
    {
      icon: Cpu,
      title: "Algorithmic Rigor & DSA",
      description:
        "435+ problems solved on LeetCode. Consistent problem-solving sharpens fundamentals and time-space trade-off analysis.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#11151D] border-b border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          pill="About Me"
          title="From Learning Concepts to Building Practical Software"
          description="My path through Computer Science at Parul University, engineering philosophy, and focus areas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-[#A0A8B5] text-base leading-relaxed">
            <p className="text-[#F5F7FA] font-medium text-lg leading-snug">
              &ldquo;I believe the most effective way to understand software engineering is to build real systems, debug edge cases, and refine fundamentals continuously.&rdquo;
            </p>

            <p>{story.intro}</p>

            <div className="p-5 rounded-xl bg-[#151A24] border border-white/[0.08] space-y-2.5">
              <div className="flex items-center gap-2 text-[#75D69A] font-semibold text-xs font-mono uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Why Computer Science?</span>
              </div>
              <p className="text-sm text-[#A0A8B5] leading-relaxed">
                {story.whyCS}
              </p>
            </div>

            <p>{story.learningToBuilding}</p>

            <p>{story.enterpriseAndAI}</p>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-[#F5F7FA] font-semibold text-sm mb-2">
                <Compass className="w-4 h-4 text-[#75D69A]" />
                <span>Development Philosophy</span>
              </div>
              <p className="text-sm text-[#A0A8B5] leading-relaxed border-l-2 border-[#75D69A]/50 pl-4 py-1">
                {story.philosophy}
              </p>
            </div>
          </div>

          {/* Right Column: Education Card & Core Pillars */}
          <div className="lg:col-span-5 space-y-5">
            {/* Academic Snapshot */}
            <div className="p-6 rounded-xl bg-[#151A24] border border-white/[0.08]">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#75D69A]/10 border border-[#75D69A]/25 text-[#75D69A] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#75D69A]">
                    Education
                  </span>
                  <h3 className="text-base font-bold text-[#F5F7FA] mt-0.5">
                    Parul University
                  </h3>
                  <p className="text-xs text-[#A0A8B5]">Vadodara, Gujarat, India</p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/[0.07] space-y-2.5 text-xs text-[#A0A8B5]">
                <div className="flex justify-between gap-4">
                  <span>Degree</span>
                  <span className="text-[#F5F7FA] font-medium text-right">B.Tech, Computer Science &amp; Eng.</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Current Status</span>
                  <span className="text-[#75D69A] font-medium text-right">Final-Year Undergraduate</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Graduation Year</span>
                  <span className="text-[#F5F7FA] font-medium text-right">2027</span>
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="space-y-3">
              <h3 className="text-[11px] font-mono uppercase tracking-wider text-[#A0A8B5] px-1">
                Core Dimensions
              </h3>

              {corePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#151A24] border border-white/[0.07] hover:border-[#75D69A]/35 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComponent className="w-4 h-4 text-[#75D69A] shrink-0" />
                      <h4 className="text-sm font-semibold text-[#F5F7FA]">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#A0A8B5] leading-relaxed pl-6">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
