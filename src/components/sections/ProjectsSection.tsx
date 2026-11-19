"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData } from "@/data/projects";
import { Project, ProjectCategory } from "@/types";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { ExternalLink, ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: "All Projects", value: "all" },
    { label: "AI & SaaS", value: "ai-saas" },
    { label: "Full-Stack", value: "fullstack" },
    { label: "ServiceNow", value: "servicenow" },
    { label: "Tools", value: "tools" },
  ];

  const getCount = (cat: ProjectCategory) =>
    cat === "all"
      ? projectsData.length
      : projectsData.filter((p) => p.category === cat).length;

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const getStatusStyle = (status: Project["status"]) => {
    switch (status) {
      case "Production":
        return "bg-[#75D69A]/12 text-[#75D69A] border-[#75D69A]/30";
      case "Completed":
        return "bg-white/[0.06] text-[#F5F7FA] border-white/[0.12]";
      case "In Development":
        return "bg-amber-500/10 text-amber-300 border-amber-500/25";
      default:
        return "bg-white/[0.04] text-[#A0A8B5] border-white/[0.08]";
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-[#090B10] border-b border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          pill="Featured Projects"
          title="Practical Applications Built for Real Utility"
          description="Production SaaS platforms, full-stack developer tools, and scoped ServiceNow architectures with implemented vs. planned capabilities clearly distinguished."
        />

        {/* Category Filter Tabs */}
        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                type="button"
                key={cat.value}
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(cat.value)}
                className={`h-9 px-3.5 rounded-lg text-xs font-mono transition-colors ${
                  isSelected
                    ? "bg-[#75D69A] text-[#090B10] font-semibold"
                    : "bg-[#151A24] text-[#A0A8B5] hover:text-[#F5F7FA] border border-white/[0.08]"
                }`}
              >
                {cat.label}{" "}
                <span className={isSelected ? "text-[#090B10]/75" : "text-[#A0A8B5]/60"}>
                  ({getCount(cat.value)})
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const primaryShot = project.screenshots?.[0];
            return (
              <article
                key={project.id}
                className="rounded-xl bg-[#151A24] border border-white/[0.08] hover:border-[#75D69A]/35 transition-colors flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Real Application Screenshot Banner (only when verified screenshot exists) */}
                  {primaryShot && (
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      aria-label={`Open ${project.name} case study`}
                      className="relative block w-full aspect-[16/9] bg-[#090B10] border-b border-white/[0.07] overflow-hidden group text-left"
                    >
                      <Image
                        src={primaryShot.src}
                        alt={primaryShot.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </button>
                  )}

                  <div className="p-6 space-y-5">
                    {/* Top Meta Row */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#75D69A] font-semibold">
                          {project.categoryLabel}
                        </span>
                        <span className="text-white/20">&bull;</span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getStatusStyle(
                            project.status
                          )}`}
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Quick Links */}
                      <div className="flex items-center gap-2 shrink-0">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live demo of ${project.name}`}
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#75D69A] bg-[#75D69A]/10 hover:bg-[#75D69A]/20 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open GitHub repository of ${project.name}`}
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#A0A8B5] hover:text-[#F5F7FA] bg-[#11151D] border border-white/[0.08] transition-colors"
                          >
                            <GithubIcon size={15} className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-[#F5F7FA]">
                        {project.name}
                      </h3>
                      <p className="text-xs font-mono text-[#75D69A]/85">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#A0A8B5] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlight Stats Strip */}
                    {project.highlightStats && (
                      <div className="grid grid-cols-2 gap-2.5 pt-1">
                        {project.highlightStats.slice(0, 4).map((stat, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-2.5 rounded-lg bg-[#11151D] border border-white/[0.06]"
                          >
                            <div className="text-[10px] font-mono uppercase text-[#A0A8B5]/70">
                              {stat.label}
                            </div>
                            <div className="text-xs font-medium text-[#F5F7FA] truncate mt-0.5">
                              {stat.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Feature Preview Bullets */}
                    <div className="space-y-1.5">
                      {project.mainFeatures.slice(0, 2).map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-[#A0A8B5]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#75D69A] mt-0.5 shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                      {project.plannedFeatures && project.plannedFeatures.length > 0 && (
                        <div className="flex items-start gap-2 text-xs text-[#A0A8B5]/80">
                          <Clock className="w-3.5 h-3.5 text-amber-300/80 mt-0.5 shrink-0" />
                          <span className="line-clamp-1">
                            Planned: {project.plannedFeatures[0]}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 6).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#11151D] text-[#A0A8B5] border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-[#11151D] text-[#A0A8B5]/70">
                          +{project.technologies.length - 6}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 bg-[#11151D]/80 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#75D69A] hover:text-[#8be0ac] transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <span className="text-[11px] font-mono text-[#A0A8B5]">
                    {project.status}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
