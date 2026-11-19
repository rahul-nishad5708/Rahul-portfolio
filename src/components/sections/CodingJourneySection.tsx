import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalTeaser } from "@/components/ui/TerminalTeaser";
import { dsaStatsData } from "@/data/dsa";
import { Code2, ExternalLink, CheckCircle2, Layers, ArrowRight } from "lucide-react";

export function CodingJourneySection() {
  const stats = dsaStatsData;

  const difficultyRatios = [
    {
      level: "Easy",
      count: stats.easySolved,
      color: "text-[#75D69A]",
      barColor: "bg-[#75D69A]",
    },
    {
      level: "Medium",
      count: stats.mediumSolved,
      color: "text-amber-300",
      barColor: "bg-amber-400",
    },
    {
      level: "Hard",
      count: stats.hardSolved,
      color: "text-rose-400",
      barColor: "bg-rose-400",
    },
  ];

  return (
    <section
      id="dsa"
      className="py-24 bg-[#090B10] border-b border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          pill="Problem Solving & DSA"
          title="Algorithmic Practice & Coding Journey"
          description="Consistent Data Structures and Algorithms problem-solving across LeetCode and GeeksforGeeks."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Verified LeetCode Snapshot */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-xl bg-[#151A24] border border-white/[0.08] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.07]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#75D69A]/10 border border-[#75D69A]/25 flex items-center justify-center text-[#75D69A] shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F5F7FA]">
                      LeetCode Profile
                    </h3>
                    <div className="text-xs font-mono text-[#75D69A]">
                      @{stats.username}
                    </div>
                  </div>
                </div>

                <a
                  href={stats.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LeetCode Profile"
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#11151D] border border-white/[0.08] text-[#A0A8B5] hover:text-[#F5F7FA] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Verified Numbers */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-lg bg-[#11151D] border border-white/[0.06]">
                  <div className="text-[11px] font-mono uppercase text-[#A0A8B5]">
                    Total Solved
                  </div>
                  <div className="text-3xl font-bold font-mono text-[#75D69A] mt-1">
                    {stats.totalSolved}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#11151D] border border-white/[0.06]">
                  <div className="text-[11px] font-mono uppercase text-[#A0A8B5]">
                    Global Rank
                  </div>
                  <div className="text-base font-bold font-mono text-[#F5F7FA] mt-2">
                    {stats.globalRanking}
                  </div>
                </div>
              </div>

              {/* Difficulty Breakdown */}
              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#A0A8B5]">
                  Solved by Difficulty
                </span>

                {difficultyRatios.map((item) => (
                  <div key={item.level} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[#F5F7FA]">
                        {item.level}
                      </span>
                      <span className={`font-mono font-semibold ${item.color}`}>
                        {item.count} solved
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#11151D] overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.barColor}`}
                        style={{
                          width: `${Math.min(
                            100,
                            Math.round((item.count / stats.totalSolved) * 100)
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Preferred Languages */}
              <div className="pt-4 border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-[#A0A8B5]">Preferred Languages:</span>
                <div className="flex flex-wrap gap-1.5 font-mono">
                  {stats.preferredLanguages.map((lang, lIdx) => (
                    <span
                      key={lIdx}
                      className="px-2.5 py-0.5 rounded bg-[#11151D] border border-white/[0.06] text-[#75D69A] text-[11px]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* LeetMetrics Callout */}
              <div className="p-3.5 rounded-lg bg-[#11151D] border border-white/[0.06] text-xs text-[#A0A8B5] flex items-center justify-between gap-3">
                <span>
                  Custom tracker built: <strong className="text-[#F5F7FA]">LeetMetrics</strong>
                </span>
                <a
                  href="#projects"
                  className="text-[#75D69A] hover:text-[#8be0ac] font-medium inline-flex items-center gap-1 shrink-0"
                >
                  <span>View</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Interactive Portfolio CLI */}
            <TerminalTeaser />
          </div>

          {/* Right Column: Topics & Methodology */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-xl bg-[#151A24] border border-white/[0.08] space-y-4">
              <h3 className="text-base font-bold text-[#F5F7FA] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#75D69A]" />
                <span>Core Algorithmic Patterns &amp; Data Structures</span>
              </h3>

              <div className="space-y-3">
                {stats.coreTopics.map((topic, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-4 rounded-lg bg-[#11151D] border border-white/[0.06] space-y-2"
                  >
                    <h4 className="text-sm font-semibold text-[#F5F7FA]">
                      {topic.name}
                    </h4>
                    <p className="text-xs text-[#A0A8B5] leading-relaxed">
                      {topic.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {topic.keyProblems.map((prob, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#151A24] text-[#A0A8B5] border border-white/[0.06]"
                        >
                          {prob}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#151A24] border border-white/[0.08] space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#75D69A] font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Problem-Solving Approach</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-[#A0A8B5] leading-relaxed">
                {stats.methodology.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5">
                    <span className="text-[#75D69A] font-mono font-semibold shrink-0">
                      0{sIdx + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
