"use client";

import { ChartNoAxesCombined } from "lucide-react";

export default function FashionInsights({ content }) {
  if (!content?.insight) {
    return null;
  }

  return (
    <div className="mb-10 w-full max-w-[1020px]">
      <div className="overflow-hidden rounded-[24px] border border-white/70 bg-[linear-gradient(135deg,rgba(246,240,255,0.96),rgba(237,244,255,0.98),rgba(244,248,255,0.96))] px-6 py-6 shadow-[0_16px_34px_rgba(15,23,42,0.05)]">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/80 text-[#4F6EF7] shadow-sm">
            <ChartNoAxesCombined size={18} />
          </div>
          <div className="min-w-0">
            <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#1F2937]">
              {content.insight.title}
            </h3>
            <p className="mt-2 max-w-[760px] text-[15px] leading-7 text-[#556070]">
              {content.insight.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
