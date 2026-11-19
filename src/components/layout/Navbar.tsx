"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profileData } from "@/data/profile";

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Journey", href: "#journey", id: "journey" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Certifications", href: "#certifications", id: "certifications" },
  { name: "DSA", href: "#dsa", id: "dsa" },
  { name: "Vision", href: "#vision", id: "vision" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;
      if (nearBottom) {
        setActiveSection("contact");
        return;
      }

      const scrollPos = window.scrollY + 140;
      let current = "";
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = link.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
        isScrolled
          ? "bg-[#090B10]/85 backdrop-blur-md border-white/[0.08]"
          : "bg-[#090B10]/70 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#top"
          className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#75D69A] rounded-lg"
        >
          <div className="w-9 h-9 rounded-lg bg-[#151A24] border border-[#75D69A]/35 flex items-center justify-center shrink-0 group-hover:border-[#75D69A] transition-colors">
            <span className="font-mono font-bold text-xs tracking-tight text-[#75D69A]">
              RN
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm text-[#F5F7FA] tracking-tight group-hover:text-[#75D69A] transition-colors">
              Rahul Nishad
            </span>
            <span className="text-[11px] text-[#A0A8B5] font-mono">
              B.Tech CSE &apos;27
            </span>
          </div>
        </a>

        {/* Desktop Anchor Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-1"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75D69A] ${
                  isActive
                    ? "text-[#75D69A] bg-[#75D69A]/10"
                    : "text-[#A0A8B5] hover:text-[#F5F7FA] hover:bg-white/[0.05]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#A0A8B5] hover:text-[#F5F7FA] hover:bg-white/[0.05] border border-white/[0.06] hover:border-white/[0.14] transition-colors"
          >
            <GithubIcon size={16} className="w-4 h-4" />
          </a>
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#A0A8B5] hover:text-[#F5F7FA] hover:bg-white/[0.05] border border-white/[0.06] hover:border-white/[0.14] transition-colors"
          >
            <LinkedinIcon size={16} className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="ml-1 inline-flex items-center justify-center h-9 px-4 rounded-lg text-[13px] font-semibold bg-[#75D69A] text-[#090B10] hover:bg-[#8be0ac] transition-colors whitespace-nowrap"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[#A0A8B5] hover:text-[#F5F7FA] bg-[#151A24] border border-white/[0.08]"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#11151D] border-b border-white/[0.08] px-5 pt-3 pb-5 space-y-4">
          <nav className="grid grid-cols-2 gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#75D69A]/10 text-[#75D69A]"
                      : "text-[#A0A8B5] hover:text-[#F5F7FA] hover:bg-white/[0.05]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#151A24] border border-white/[0.08] text-[#A0A8B5] hover:text-[#F5F7FA]"
              >
                <GithubIcon size={16} className="w-4 h-4" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#151A24] border border-white/[0.08] text-[#A0A8B5] hover:text-[#F5F7FA]"
              >
                <LinkedinIcon size={16} className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center h-9 px-4 rounded-lg text-sm font-semibold bg-[#75D69A] text-[#090B10] hover:bg-[#8be0ac] transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
