"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Project } from "@/types";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Clock,
  AlertCircle,
  Lightbulb,
  Cpu,
  Layers,
  Sparkles,
  Users,
  Image as ImageIcon,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      closeButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#11151D] border border-white/[0.1] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#F5F7FA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 px-5 sm:px-6 py-4 bg-[#11151D]/95 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="uppercase tracking-wider text-[#75D69A] font-semibold">
                {project.categoryLabel}
              </span>
              <span className="text-white/20">&bull;</span>
              <span className="text-[#A0A8B5]">{project.status}</span>
            </div>
            <h2
              id="project-modal-title"
              className="text-lg sm:text-xl font-bold mt-0.5 truncate"
            >
              {project.name}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#A0A8B5] hover:text-[#F5F7FA] bg-[#151A24] border border-white/[0.08] shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75D69A]"
            aria-label="Close Case Study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-7 text-sm">
          {/* Summary & External Links */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#151A24] border border-white/[0.07] space-y-4">
            <p className="text-sm sm:text-base text-[#F5F7FA] font-medium leading-relaxed">
              {project.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-[#75D69A] text-[#090B10] font-semibold text-xs hover:bg-[#8be0ac] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-[#11151D] hover:bg-white/[0.05] text-xs text-[#F5F7FA] border border-white/[0.1] transition-colors"
                >
                  <GithubIcon size={14} className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Real Application Screenshots (only when genuine screenshots exist) */}
          {project.screenshots && project.screenshots.length > 0 ? (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#75D69A] font-semibold flex items-center gap-2">
                <ImageIcon className="w-4 h-4" />
                <span>Application Screenshots</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.screenshots.map((shot, idx) => (
                  <figure
                    key={idx}
                    className="rounded-xl overflow-hidden bg-[#090B10] border border-white/[0.08]"
                  >
                    <div className="relative aspect-[16/10] w-full bg-[#090B10]">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 360px"
                        className="object-cover object-top"
                      />
                    </div>
                    <figcaption className="px-3 py-2 text-[11px] font-mono text-[#A0A8B5] border-t border-white/[0.06]">
                      {shot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ) : (
            <div className="px-4 py-3 rounded-lg bg-[#151A24] border border-white/[0.06] text-xs text-[#A0A8B5] flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-[#A0A8B5]/60 shrink-0" />
              <span>
                Application screenshots are not yet published in this repository. Review the full source code and documentation on GitHub.
              </span>
            </div>
          )}

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#151A24] border border-white/[0.08] space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs font-mono uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs text-[#A0A8B5] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#151A24] border border-[#75D69A]/25 space-y-2">
              <div className="flex items-center gap-2 text-[#75D69A] font-semibold text-xs font-mono uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs text-[#A0A8B5] leading-relaxed">
                {project.proposedSolution || project.solution}
              </p>
            </div>
          </div>

          {/* Target Users & Motivation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#151A24] border border-white/[0.07] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#75D69A] font-semibold">
                <Users className="w-4 h-4" />
                <span>Target Users</span>
              </div>
              <p className="text-xs text-[#A0A8B5] leading-relaxed">
                {project.targetUsers}
              </p>
            </div>

            {project.whyCreated && (
              <div className="p-4 rounded-xl bg-[#151A24] border border-white/[0.07] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#75D69A] font-semibold">
                  <Lightbulb className="w-4 h-4" />
                  <span>Why It Was Built</span>
                </div>
                <p className="text-xs text-[#A0A8B5] leading-relaxed">
                  {project.whyCreated}
                </p>
              </div>
            )}
          </div>

          {/* Architecture Notes */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#75D69A] font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Architecture &amp; System Design</span>
            </h3>
            <p className="text-xs text-[#A0A8B5] leading-relaxed p-4 rounded-xl bg-[#151A24] border border-white/[0.07]">
              {project.architectureNotes}
            </p>
          </div>

          {/* Implemented Features (Strictly Separated) */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#75D69A] font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Implemented Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.mainFeatures.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[#151A24] border border-white/[0.06] text-xs text-[#A0A8B5]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#75D69A] mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Planned / Roadmap Features (Strictly Separated) */}
          {project.plannedFeatures && project.plannedFeatures.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Planned / Roadmap Features</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.plannedFeatures.map((feat, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-[#151A24] border border-amber-500/15 text-xs text-[#A0A8B5]"
                  >
                    <Clock className="w-3.5 h-3.5 text-amber-300/80 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Solutions */}
          {project.challengesAndSolutions.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#75D69A] font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Technical Challenges &amp; Solutions</span>
              </h3>
              <div className="space-y-3">
                {project.challengesAndSolutions.map((cs, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-xl bg-[#151A24] border border-white/[0.07] space-y-2"
                  >
                    <div className="text-xs text-[#F5F7FA] leading-relaxed">
                      <span className="font-mono font-semibold text-rose-400 mr-1.5">
                        Challenge:
                      </span>
                      {cs.challenge}
                    </div>
                    <div className="text-xs text-[#A0A8B5] leading-relaxed pl-3 border-l-2 border-[#75D69A]/40">
                      <span className="font-mono font-semibold text-[#75D69A] mr-1.5">
                        Solution:
                      </span>
                      {cs.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Personal Contribution & Lessons */}
          <div className="p-4 rounded-xl bg-[#151A24] border border-white/[0.07] space-y-2.5 text-xs">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#75D69A] font-semibold">
              <Lightbulb className="w-4 h-4" />
              <span>Personal Contribution &amp; Lessons Learned</span>
            </div>
            <p className="text-[#A0A8B5] leading-relaxed">
              <strong className="text-[#F5F7FA]">My Role: </strong>
              {project.myContribution}
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#A0A8B5] pt-1">
              {project.lessonsLearned.map((lesson, lIdx) => (
                <li key={lIdx}>{lesson}</li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2 pt-3 border-t border-white/[0.08]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#A0A8B5]">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#151A24] text-[#75D69A] border border-white/[0.07]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
