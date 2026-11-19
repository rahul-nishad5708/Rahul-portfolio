import Link from "next/link";
import { Home, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#090B10] text-[#F5F7FA] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-14 h-14 rounded-xl bg-[#75D69A]/10 border border-[#75D69A]/25 text-[#75D69A] flex items-center justify-center mx-auto">
          <Terminal className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono text-[#75D69A] uppercase tracking-widest">
            404 &mdash; Page Not Found
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            Destination Unreachable
          </h1>
          <p className="text-sm text-[#A0A8B5] leading-relaxed">
            The page or route you requested does not exist or has been relocated.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-[#75D69A] hover:bg-[#8be0ac] text-[#090B10] font-semibold text-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
