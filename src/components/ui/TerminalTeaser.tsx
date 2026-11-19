"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Copy, Check, Play } from "lucide-react";
import { profileData } from "@/data/profile";

interface HistoryEntry {
  cmd: string;
  output: string | React.ReactNode;
}

export function TerminalTeaser() {
  const [inputCommand, setInputCommand] = useState("");
  const [copied, setCopied] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      cmd: "whoami",
      output: `${profileData.fullName} — Final-Year B.Tech CSE @ Parul University (2027). Full-Stack Developer & ServiceNow CAD/CSA Certified.`,
    },
    {
      cmd: "cat stats.json",
      output: (
        <div className="text-[#75D69A] font-mono text-xs space-y-0.5">
          <div>{`{`}</div>
          <div className="pl-4">{`"leetcode_solved": 435,`}</div>
          <div className="pl-4">{`"certifications": ["ServiceNow CAD", "ServiceNow CSA"],`}</div>
          <div className="pl-4">{`"flagship_saas": "JobFit.ai (jobfit-ai-pi.vercel.app)"`}</div>
          <div>{`}`}</div>
        </div>
      ),
    },
  ]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdToRun: string) => {
    const trimmed = cmdToRun.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputCommand("");
      return;
    }

    let res: string | React.ReactNode = "";
    switch (trimmed) {
      case "help":
        res =
          "Available commands: whoami, skills, projects, certifications, dsa, contact, clear";
        break;
      case "whoami":
        res = `${profileData.fullName} — ${profileData.tagline}`;
        break;
      case "skills":
        res =
          "Languages: Java, JavaScript, TypeScript, Python, SQL | Web: React, Next.js, Node.js, Express, Tailwind CSS | DB: PostgreSQL, MongoDB | Platform: ServiceNow (CSA/CAD)";
        break;
      case "projects":
        res =
          "1. JobFit.ai (Production SaaS) | 2. SnippetSphere (MERN) | 3. ConnectSphere (Next.js 16 + Supabase) | 4. ServiceNow Employee Lifecycle (Phase 0) | 5. LeetMetrics";
        break;
      case "certifications":
        res =
          "• ServiceNow Certified Application Developer (CAD)\n• ServiceNow Certified System Administrator (CSA)\n• Microsoft Power BI Learning Credentials";
        break;
      case "dsa":
        res =
          "LeetCode (@raahul_12): 435 solved (170 Easy, 220 Medium, 45 Hard) | Rank ~285K | 400+ across LeetCode & GeeksforGeeks";
        break;
      case "contact":
        res = `Email: ${profileData.contact.email}\nGitHub: ${profileData.contact.github}\nLinkedIn: ${profileData.contact.linkedin}`;
        break;
      default:
        res = `command not found: '${trimmed}'. Type 'help' to see available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: cmdToRun.trim(), output: res }]);
    setInputCommand("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputCommand);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable
    }
  };

  return (
    <div className="w-full rounded-xl bg-[#0D1017] border border-white/[0.08] overflow-hidden font-mono text-sm">
      {/* Terminal Titlebar */}
      <div className="px-4 py-2.5 bg-[#151A24] border-b border-white/[0.07] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#75D69A]/70" />
          </div>
          <span className="ml-1.5 text-xs text-[#A0A8B5] flex items-center gap-1.5 truncate">
            <TerminalIcon className="w-3.5 h-3.5 text-[#75D69A] shrink-0" />
            <span>rahul@portfolio: ~</span>
          </span>
        </div>

        <button
          type="button"
          onClick={copyEmail}
          aria-label="Copy Rahul's email address"
          className="inline-flex items-center gap-1.5 text-[11px] text-[#A0A8B5] hover:text-[#F5F7FA] px-2.5 py-1 rounded-md bg-[#11151D] border border-white/[0.08] transition-colors shrink-0"
        >
          {copied ? (
            <Check className="w-3 h-3 text-[#75D69A]" />
          ) : (
            <Copy className="w-3 h-3" />
          )}
          <span>{copied ? "Copied" : "Copy Email"}</span>
        </button>
      </div>

      {/* Terminal Output */}
      <div
        ref={outputRef}
        className="p-4 space-y-3.5 max-h-[260px] overflow-y-auto"
        aria-live="polite"
      >
        {history.length === 0 ? (
          <p className="text-xs text-[#A0A8B5]/60">
            Terminal cleared. Type &apos;help&apos; or click a quick command below.
          </p>
        ) : (
          history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#75D69A] text-xs">
                <span className="text-[#A0A8B5]">$</span>
                <span className="font-semibold">{item.cmd}</span>
              </div>
              <div className="text-[#A0A8B5] text-xs leading-relaxed whitespace-pre-line pl-4 break-words">
                {item.output}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input & Quick Commands */}
      <div className="px-4 py-3 bg-[#11151D] border-t border-white/[0.06] space-y-2.5">
        <form onSubmit={onSubmit} className="flex items-center gap-2">
          <span className="text-[#75D69A] font-bold text-xs" aria-hidden="true">
            $
          </span>
          <input
            type="text"
            aria-label="Portfolio terminal command input"
            value={inputCommand}
            onChange={(e) => setInputCommand(e.target.value)}
            placeholder="Type 'help', 'skills', 'projects', 'dsa'..."
            className="flex-1 min-w-0 bg-transparent border-none outline-none text-[#F5F7FA] text-xs placeholder:text-[#A0A8B5]/45"
          />
          <button
            type="submit"
            className="text-[11px] px-2.5 py-1 bg-[#75D69A]/12 text-[#75D69A] hover:bg-[#75D69A]/20 border border-[#75D69A]/25 rounded-md inline-flex items-center gap-1 transition-colors shrink-0"
          >
            <Play className="w-2.5 h-2.5 fill-current" />
            <span>Run</span>
          </button>
        </form>

        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#A0A8B5]/70">
          <span>Try:</span>
          {["help", "skills", "projects", "certifications", "dsa", "contact", "clear"].map(
            (cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded bg-[#151A24] border border-white/[0.06] hover:border-[#75D69A]/40 hover:text-[#75D69A] text-[#A0A8B5] transition-colors"
              >
                {cmd}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
