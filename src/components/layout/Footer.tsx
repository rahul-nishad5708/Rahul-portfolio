"use client";

import React from "react";
import { ArrowUp, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/BrandIcons";
import { profileData } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#090B10] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Identity column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#151A24] border border-[#75D69A]/35 flex items-center justify-center shrink-0">
                <span className="font-mono font-bold text-xs text-[#75D69A]">RN</span>
              </div>
              <span className="font-semibold text-base text-[#F5F7FA]">
                {profileData.fullName}
              </span>
            </div>
            <p className="text-sm text-[#A0A8B5] max-w-md leading-relaxed">
              {profileData.tagline}
            </p>
            <p className="text-xs font-mono text-[#A0A8B5]/80">
              Final-Year Computer Science Undergraduate &middot; Parul University &middot; 2027
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-[#75D69A] font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#A0A8B5]">
              <li>
                <a href="#about" className="hover:text-[#F5F7FA] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#F5F7FA] transition-colors">
                  Journey
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#F5F7FA] transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#F5F7FA] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-[#F5F7FA] transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#dsa" className="hover:text-[#F5F7FA] transition-colors">
                  DSA &amp; Coding
                </a>
              </li>
              <li>
                <a href="#beyond-code" className="hover:text-[#F5F7FA] transition-colors">
                  Beyond Code
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-[#F5F7FA] transition-colors">
                  Vision
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5F7FA] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="space-y-3">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-[#75D69A] font-semibold">
              Profiles
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A0A8B5]">
              <li>
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#F5F7FA] transition-colors"
                >
                  <GithubIcon size={15} className="w-4 h-4 text-[#75D69A]" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#F5F7FA] transition-colors"
                >
                  <LinkedinIcon size={15} className="w-4 h-4 text-[#75D69A]" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#F5F7FA] transition-colors"
                >
                  <Code2 className="w-4 h-4 text-[#75D69A]" />
                  <span>LeetCode (raahul_12)</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#F5F7FA] transition-colors"
                >
                  <TwitterIcon size={15} className="w-4 h-4 text-[#75D69A]" />
                  <span>X / Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0A8B5]/80">
          <p>
            &copy; 2026 Rahul Chandraveer Nishad. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 h-9 px-3.5 rounded-lg bg-[#151A24] hover:bg-white/[0.06] text-[#A0A8B5] hover:text-[#F5F7FA] border border-white/[0.08] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#75D69A]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
