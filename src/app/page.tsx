import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { CodingJourneySection } from "@/components/sections/CodingJourneySection";
import { BeyondCodeSection } from "@/components/sections/BeyondCodeSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#090B10] text-[#F5F7FA]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#75D69A] focus:text-[#090B10] focus:font-semibold focus:text-xs"
      >
        Skip to main content
      </a>

      {/* Top Navigation */}
      <Navbar />

      <main id="main-content">
        {/* Section 1: Hero Landing */}
        <HeroSection />

        {/* Section 2: About Me */}
        <AboutSection />

        {/* Section 3: My Journey Timeline */}
        <JourneySection />

        {/* Section 4: Technical Skills */}
        <SkillsSection />

        {/* Section 5: Featured Projects & Case Studies */}
        <ProjectsSection />

        {/* Section 6: Certifications & Credentials */}
        <CertificationsSection />

        {/* Section 7: Problem Solving & DSA Journey */}
        <CodingJourneySection />

        {/* Section 8: Beyond Code */}
        <BeyondCodeSection />

        {/* Section 9: Vision & Future Ambitions */}
        <VisionSection />

        {/* Section 10: Contact & Networking */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
