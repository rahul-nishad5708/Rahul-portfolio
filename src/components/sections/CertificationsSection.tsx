import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificationsData } from "@/data/certifications";
import { Award, ShieldCheck, ExternalLink } from "lucide-react";

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-24 bg-[#11151D] border-b border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          pill="Certifications & Credentials"
          title="Verified Accreditations & Technical Milestones"
          description="Industry certifications in enterprise platform development and administration alongside data analytics learning credentials."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-xl bg-[#151A24] border border-white/[0.08] hover:border-[#75D69A]/35 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Top Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#75D69A]/10 border border-[#75D69A]/25 text-[#75D69A] flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#A0A8B5] block">
                        {cert.issuer}
                      </span>
                      <span className="text-xs font-mono font-semibold text-[#75D69A]">
                        {cert.shortCode}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Credential Type Tag */}
                <div>
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#11151D] border border-white/[0.08] text-[#A0A8B5] mb-2">
                    {cert.type}
                  </span>
                  <h3 className="text-base font-bold text-[#F5F7FA] leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#A0A8B5] leading-relaxed mt-2">
                    {cert.description}
                  </p>
                </div>

                {/* Skills Covered */}
                <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A0A8B5]/80">
                    Areas Validated
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#11151D] text-[#A0A8B5] border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 mt-5 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#75D69A] font-mono text-[11px]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified</span>
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#A0A8B5] hover:text-[#F5F7FA] transition-colors"
                  >
                    <span>Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
