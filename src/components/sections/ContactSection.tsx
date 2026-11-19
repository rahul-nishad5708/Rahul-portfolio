"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profileData } from "@/data/profile";
import {
  Mail,
  Copy,
  Check,
  Send,
  Code2,
  MapPin,
  ExternalLink,
  MessageSquare,
  Info,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/BrandIcons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // Honeypot field
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "delivered" | "fallback" | "error"
  >("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const copyText = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(textarea);
        return ok;
      } catch {
        return false;
      }
    }
  };

  const copyEmail = async () => {
    const ok = await copyText(profileData.contact.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\n${formData.message.trim()}`
    );
    return `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyFormattedMessage = async () => {
    const formatted = `To: ${profileData.contact.email}\nSubject: ${
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    }\nFrom: ${formData.name.trim()} <${formData.email.trim()}>\n\n${formData.message.trim()}`;
    const ok = await copyText(formatted);
    if (ok) {
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (trimmedName.length < 2) {
      setStatus("error");
      setFeedbackMessage("Please enter your name (at least 2 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setFeedbackMessage("Please enter a valid email address.");
      return;
    }

    if (trimmedMessage.length < 10) {
      setStatus("error");
      setFeedbackMessage("Please enter a message of at least 10 characters.");
      return;
    }

    setFeedbackMessage("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        delivered?: boolean;
        message?: string;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setFeedbackMessage(
          data.error || "Unable to validate or send your message. Please try emailing directly."
        );
        return;
      }

      if (data.delivered) {
        setStatus("delivered");
        setFeedbackMessage(
          data.message || "Your message has been accepted for email delivery."
        );
      } else {
        setStatus("fallback");
        setFeedbackMessage(
          data.message ||
            "Automated email delivery is not configured on this server yet. Send your validated message via your email app or copy it below."
        );
      }
    } catch {
      setStatus("error");
      setFeedbackMessage(
        "Network error while contacting the server. Please email directly."
      );
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setFeedbackMessage("");
    setFormData({ name: "", email: "", subject: "", message: "", website: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#11151D] border-b border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          pill="Contact"
          title="Have an Idea? Let's Build Something Meaningful."
          description="Open to software engineering discussions, full-stack collaborations, and ServiceNow development conversations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Email & Social Profiles */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-xl bg-[#151A24] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#75D69A]/10 border border-[#75D69A]/25 text-[#75D69A] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#F5F7FA]">
                    Direct Email
                  </h3>
                  <p className="text-xs text-[#A0A8B5]">Fastest way to reach me</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#11151D] border border-white/[0.07] flex items-center justify-between gap-2">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="text-xs sm:text-sm font-mono text-[#75D69A] hover:underline truncate"
                >
                  {profileData.contact.email}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 h-8 px-3 rounded-md bg-[#151A24] hover:bg-white/[0.06] text-[#F5F7FA] text-xs font-medium border border-white/[0.08] transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#75D69A]" />
                      <span className="text-[#75D69A]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#A0A8B5]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <span className="sr-only" aria-live="polite">
                {copied ? "Email address copied to clipboard." : ""}
              </span>

              <div className="flex items-center gap-2 text-xs text-[#A0A8B5]">
                <MapPin className="w-4 h-4 text-[#75D69A] shrink-0" />
                <span>{profileData.location}</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#151A24] border border-white/[0.08] space-y-3">
              <h3 className="text-[11px] font-mono uppercase tracking-wider text-[#A0A8B5]">
                Professional Profiles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#11151D] border border-white/[0.06] hover:border-[#75D69A]/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon size={16} className="w-4 h-4 text-[#75D69A]" />
                    <span className="text-xs font-medium text-[#F5F7FA]">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A0A8B5] group-hover:text-[#75D69A] transition-colors" />
                </a>

                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#11151D] border border-white/[0.06] hover:border-[#75D69A]/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon size={16} className="w-4 h-4 text-[#75D69A]" />
                    <span className="text-xs font-medium text-[#F5F7FA]">GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A0A8B5] group-hover:text-[#75D69A] transition-colors" />
                </a>

                <a
                  href={profileData.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#11151D] border border-white/[0.06] hover:border-[#75D69A]/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-[#75D69A]" />
                    <span className="text-xs font-medium text-[#F5F7FA]">LeetCode</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A0A8B5] group-hover:text-[#75D69A] transition-colors" />
                </a>

                <a
                  href={profileData.contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#11151D] border border-white/[0.06] hover:border-[#75D69A]/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <TwitterIcon size={16} className="w-4 h-4 text-[#75D69A]" />
                    <span className="text-xs font-medium text-[#F5F7FA]">X / Twitter</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A0A8B5] group-hover:text-[#75D69A] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#151A24] border border-white/[0.08]">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-[#75D69A]" />
                <h3 className="text-base font-bold text-[#F5F7FA]">
                  Send a Message
                </h3>
              </div>

              {status === "delivered" ? (
                <div
                  role="status"
                  className="p-6 rounded-xl bg-[#11151D] border border-[#75D69A]/30 text-center space-y-4"
                >
                  <div className="w-11 h-11 rounded-full bg-[#75D69A]/15 text-[#75D69A] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#F5F7FA]">
                    Message Delivered
                  </h4>
                  <p className="text-xs text-[#A0A8B5] max-w-sm mx-auto leading-relaxed">
                    {feedbackMessage}
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs font-mono text-[#75D69A] underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : status === "fallback" ? (
                <div
                  role="status"
                  className="p-6 rounded-xl bg-[#11151D] border border-amber-500/25 space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#F5F7FA]">
                        Message Validated &mdash; Send via Direct Email
                      </h4>
                      <p className="text-xs text-[#A0A8B5] leading-relaxed">
                        {feedbackMessage}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={buildMailtoHref()}
                      className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-[#75D69A] hover:bg-[#8be0ac] text-[#090B10] font-semibold text-xs transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyFormattedMessage}
                      className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-[#151A24] hover:bg-white/[0.06] text-[#F5F7FA] border border-white/[0.1] text-xs font-medium transition-colors"
                    >
                      {copiedMessage ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#75D69A]" />
                          <span className="text-[#75D69A]">Message Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#A0A8B5]" />
                          <span>Copy Message</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-xs font-mono text-[#A0A8B5] hover:text-[#F5F7FA] underline underline-offset-4 ml-auto"
                    >
                      Edit form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 text-xs">
                  {status === "error" && (
                    <div
                      role="alert"
                      className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/25 text-rose-300"
                    >
                      {feedbackMessage}
                    </div>
                  )}

                  {/* Hidden Honeypot for Bot Protection */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input
                      id="contact-website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-[#A0A8B5] font-mono">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        minLength={2}
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Alex Morgan"
                        className="w-full h-10 px-3.5 rounded-lg bg-[#11151D] border border-white/[0.1] text-[#F5F7FA] placeholder:text-[#A0A8B5]/45 focus:outline-none focus:border-[#75D69A] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-[#A0A8B5] font-mono">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        maxLength={160}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full h-10 px-3.5 rounded-lg bg-[#11151D] border border-white/[0.1] text-[#F5F7FA] placeholder:text-[#A0A8B5]/45 focus:outline-none focus:border-[#75D69A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-[#A0A8B5] font-mono">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      maxLength={150}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Software Engineering Role / Collaboration"
                      className="w-full h-10 px-3.5 rounded-lg bg-[#11151D] border border-white/[0.1] text-[#F5F7FA] placeholder:text-[#A0A8B5]/45 focus:outline-none focus:border-[#75D69A] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-[#A0A8B5] font-mono">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      minLength={10}
                      maxLength={2500}
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Rahul, I came across your portfolio and wanted to connect..."
                      className="w-full p-3.5 rounded-lg bg-[#11151D] border border-white/[0.1] text-[#F5F7FA] placeholder:text-[#A0A8B5]/45 focus:outline-none focus:border-[#75D69A] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[11px] text-[#A0A8B5]/70">
                      * Required fields (min. 10 characters for message)
                    </span>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-lg bg-[#75D69A] hover:bg-[#8be0ac] text-[#090B10] font-semibold text-xs transition-colors disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{status === "submitting" ? "Validating..." : "Send Message"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
