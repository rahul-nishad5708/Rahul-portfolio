"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Code2,
  Mail,
  Award,
  GraduationCap,
  MapPin,
  X,
  ExternalLink,
  FileText,
  Eye,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/BrandIcons";
import { profileData } from "@/data/profile";

export function HeroSection() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const closeResumeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowResumeModal(false);
    };
    if (showResumeModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      closeResumeRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showResumeModal]);

  return (
    <section
      id="top"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#090B10] bg-subtle-grid border-b border-white/[0.06] overflow-hidden"
    >
      {/* Restrained ambient backdrop highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-[#75D69A]/[0.05] blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Identity, Intro, CTAs, Socials */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small Introduction */}
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#75D69A]">
              HELLO, I&apos;M
            </p>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#F5F7FA] leading-[1.08]">
                {profileData.fullName}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#A0A8B5]">
                Aspiring Software Engineer <span className="text-white/25 mx-1.5">|</span> Full-Stack Developer
              </p>
            </div>

            {/* Academic Status Line (No fake availability badge) */}
            <div className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-[13px] font-mono text-[#A0A8B5] px-3.5 py-2 rounded-lg bg-[#11151D] border border-white/[0.08]">
              <GraduationCap className="w-4 h-4 text-[#75D69A] shrink-0" />
              <span>Final-Year Computer Science Undergraduate</span>
              <span className="text-white/25">·</span>
              <span>Parul University</span>
              <span className="text-white/25">·</span>
              <span className="text-[#F5F7FA]">2027</span>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base text-[#A0A8B5] max-w-xl leading-relaxed">
              Computer Science undergraduate passionate about building practical software applications,
              full-stack web platforms, and enterprise workflows on ServiceNow (CAD &amp; CSA Certified).
              Backed by 435+ solved algorithmic problems and hands-on product development.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-[#75D69A] text-[#090B10] font-semibold text-sm hover:bg-[#8be0ac] transition-colors"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Rahul_Chandraveer_Nishad_Resume.pdf"
                download="Rahul_Chandraveer_Nishad_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-[#151A24] text-[#F5F7FA] border border-white/[0.1] hover:border-[#75D69A]/50 font-medium text-sm transition-colors group"
              >
                <Download className="w-4 h-4 text-[#75D69A] group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => setShowResumeModal(true)}
                aria-haspopup="dialog"
                className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-[#11151D] text-[#A0A8B5] hover:text-[#F5F7FA] border border-white/[0.08] hover:border-white/[0.18] font-medium text-sm transition-colors"
              >
                <Eye className="w-4 h-4 text-[#75D69A]" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-transparent text-[#F5F7FA] border border-white/[0.1] hover:bg-white/[0.04] font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-[#A0A8B5]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A0A8B5]/70">
                Connect
              </span>
              <div className="h-4 w-px bg-white/10" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-[#11151D] border border-white/[0.08] text-[#A0A8B5] hover:text-[#F5F7FA] hover:border-[#75D69A]/40 text-xs font-medium transition-colors"
                >
                  <GithubIcon size={15} className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-[#11151D] border border-white/[0.08] text-[#A0A8B5] hover:text-[#F5F7FA] hover:border-[#75D69A]/40 text-xs font-medium transition-colors"
                >
                  <LinkedinIcon size={15} className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profileData.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-[#11151D] border border-white/[0.08] text-[#A0A8B5] hover:text-[#F5F7FA] hover:border-[#75D69A]/40 text-xs font-medium transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>
                <a
                  href={profileData.contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X Profile"
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#11151D] border border-white/[0.08] text-[#A0A8B5] hover:text-[#F5F7FA] hover:border-[#75D69A]/40 transition-colors"
                >
                  <TwitterIcon size={15} className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Profile Image Placeholder & Subtle Framed Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px]">
              {/* Subtle decorative offset frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-2xl border border-[#75D69A]/15 bg-[#11151D]/40 -z-10 translate-x-2 translate-y-2"
              />

              {/* Main Portrait Card */}
              <div className="rounded-2xl bg-[#151A24] border border-white/[0.09] overflow-hidden shadow-xl">
                {/* Portrait Visual Area */}
                <div className="relative aspect-[4/4.2] bg-[#11151D] flex flex-col items-center justify-center p-8 border-b border-white/[0.06]">
                  {/* Subtle geometric corner ticks */}
                  <div aria-hidden="true" className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#75D69A]/40" />
                  <div aria-hidden="true" className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#75D69A]/40" />
                  <div aria-hidden="true" className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#75D69A]/40" />
                  <div aria-hidden="true" className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#75D69A]/40" />

                  {/* Circular Profile Portrait */}
                  <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-[#75D69A]/35 bg-[#151A24] shadow-lg ring-4 ring-[#75D69A]/[0.07]">
                    <Image
                      src="/images/profile.jpg"
                      alt="Rahul Chandraveer Nishad"
                      width={240}
                      height={240}
                      priority
                      className="w-full h-full object-cover object-top scale-[1.03]"
                    />
                  </div>

                  <div className="mt-6 text-center space-y-1">
                    <p className="text-sm font-semibold text-[#F5F7FA]">
                      Rahul Chandraveer Nishad
                    </p>
                    <p className="text-xs font-mono text-[#A0A8B5] inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#75D69A]" />
                      Vadodara, Gujarat, India
                    </p>
                  </div>
                </div>

                {/* Verified Highlights Strip */}
                <div className="grid grid-cols-3 divide-x divide-white/[0.06] bg-[#151A24] text-center">
                  <div className="py-4 px-2">
                    <div className="text-base font-bold font-mono text-[#75D69A]">435+</div>
                    <div className="text-[11px] text-[#A0A8B5] mt-0.5">LeetCode</div>
                  </div>
                  <div className="py-4 px-2">
                    <div className="text-base font-bold font-mono text-[#F5F7FA]">CAD &amp; CSA</div>
                    <div className="text-[11px] text-[#A0A8B5] mt-0.5">ServiceNow</div>
                  </div>
                  <div className="py-4 px-2">
                    <div className="text-base font-bold font-mono text-[#F5F7FA]">2027</div>
                    <div className="text-[11px] text-[#A0A8B5] mt-0.5">B.Tech CSE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setShowResumeModal(false)}
        >
          <div
            className="bg-[#11151D] border border-white/[0.1] rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5 min-w-0">
                <Award className="w-5 h-5 text-[#75D69A] shrink-0" />
                <h3
                  id="resume-modal-title"
                  className="font-semibold text-sm sm:text-base text-[#F5F7FA] truncate"
                >
                  Rahul Chandraveer Nishad &mdash; Verified Resume
                </h3>
              </div>
              <button
                ref={closeResumeRef}
                type="button"
                onClick={() => setShowResumeModal(false)}
                aria-label="Close resume dialog"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#A0A8B5] hover:text-[#F5F7FA] bg-white/[0.05] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75D69A]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#A0A8B5] leading-relaxed">
              <div className="p-3.5 rounded-xl bg-[#151A24] border border-[#75D69A]/20 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#75D69A]/10 border border-[#75D69A]/30 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-[#75D69A]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[#F5F7FA] font-medium text-xs truncate">
                    Rahul_Chandraveer_Nishad_Resume.pdf
                  </div>
                  <div className="text-[11px] text-[#A0A8B5] font-mono mt-0.5">
                    Verified PDF Document &middot; Ready for View &amp; Download
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#151A24] border border-white/[0.06] space-y-1">
                <div className="text-[#F5F7FA] font-semibold">Education</div>
                <div>B.Tech in Computer Science and Engineering &mdash; Parul University (Graduating 2027)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#151A24] border border-white/[0.06] space-y-1">
                <div className="text-[#F5F7FA] font-semibold">Verified Certifications</div>
                <div>&bull; ServiceNow Certified Application Developer (CAD)</div>
                <div>&bull; ServiceNow Certified System Administrator (CSA)</div>
                <div>&bull; Microsoft Power BI Learning Credentials</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#151A24] border border-white/[0.06] space-y-1">
                <div className="text-[#F5F7FA] font-semibold">Core Technical Focus</div>
                <div>&bull; Full-Stack Web Development: Next.js, React, Node.js, PostgreSQL, MongoDB</div>
                <div>&bull; Problem Solving: 435+ algorithmic solutions on LeetCode (@raahul_12)</div>
              </div>
            </div>

            {/* Modal Actions: View Resume, Download PDF, Contact Me */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
              <a
                href="/Rahul_Chandraveer_Nishad_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-4 rounded-lg inline-flex items-center justify-center gap-1.5 bg-[#151A24] border border-white/[0.1] hover:border-[#75D69A]/50 text-xs font-medium text-[#F5F7FA] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#75D69A]" />
                <span>View Resume</span>
              </a>

              <a
                href="/Rahul_Chandraveer_Nishad_Resume.pdf"
                download="Rahul_Chandraveer_Nishad_Resume.pdf"
                className="h-9 px-4 rounded-lg inline-flex items-center justify-center gap-1.5 bg-[#75D69A] hover:bg-[#8be0ac] text-xs font-semibold text-[#090B10] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <a
                href="#contact"
                onClick={() => setShowResumeModal(false)}
                className="h-9 px-4 rounded-lg inline-flex items-center justify-center gap-1.5 bg-transparent border border-white/[0.08] hover:bg-white/[0.04] text-xs font-medium text-[#A0A8B5] hover:text-[#F5F7FA] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
