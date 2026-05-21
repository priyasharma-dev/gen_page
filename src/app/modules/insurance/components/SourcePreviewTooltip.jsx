"use client";

import { ExternalLink } from "lucide-react";

export default function SourcePreviewTooltip({
  label,
  url,
  description,
  logo,
}) {
  return (
    <div
      role="tooltip"
      className="pointer-events-none absolute left-0 top-full z-20 mt-2 hidden w-[min(320px,calc(100vw-2rem))] rounded-[18px] border border-[#DDE5F0] bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.12)] group-hover:block group-focus-within:block md:w-[300px]"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#F4F7FC] text-[#0B57D0]">
          {logo}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-[13px] font-semibold text-[#111827]">{label}</p>
            <ExternalLink size={12} className="text-[#2563EB]" />
          </div>
          <p className="mt-2 text-[12px] leading-5 text-[#667085]">{description}</p>
          <p className="mt-2 truncate text-[11px] text-[#94A3B8]">{url}</p>
        </div>
      </div>
    </div>
  );
}
