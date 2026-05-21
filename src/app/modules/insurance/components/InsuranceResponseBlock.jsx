"use client";

import { ExternalLink } from "lucide-react";

import InsuranceExpandableText from "./InsuranceExpandableText";
import SourcePreviewTooltip from "./SourcePreviewTooltip";

function SourceLogo({ source }) {
  if (source.logoStyle === "nerdwallet") {
    return (
      <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-[#00C853] text-[10px] font-bold text-white">
        N
      </span>
    );
  }

  return (
    <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-black text-[10px] font-bold italic text-white">
      Z
    </span>
  );
}

function SourcePill({ source }) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noreferrer"
      className="group relative inline-flex items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-white px-[13px] py-[7px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] outline-none transition hover:border-[#BFD3F8] focus-visible:ring-2 focus-visible:ring-[#BFD3F8]"
    >
      <SourceLogo source={source} />
      <span className="text-[13px] font-medium text-[#364153]">{source.label}</span>
      <ExternalLink size={12} className="text-[#94A3B8]" />
      <SourcePreviewTooltip
        label={source.label}
        url={source.url}
        description={source.description}
        logo={<SourceLogo source={source} />}
      />
    </a>
  );
}

export default function InsuranceResponseBlock({
  text,
  currentTime,
  content,
}) {
  return (
    <>
      <p className="text-[16px] text-[rgba(74,85,101,0.7)]">Thought for 8 seconds</p>

      <div className="mt-4 min-w-0 max-w-[690px]">
        <InsuranceExpandableText
          text={text}
          className="max-w-[690px]"
          collapsedLinesClass="line-clamp-3"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {(content?.sources || []).map((source) => (
          <SourcePill key={source.label} source={source} />
        ))}
      </div>

      <p className="mt-3 text-[13px] text-[#94A3B8]">{currentTime}</p>
    </>
  );
}
