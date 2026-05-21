"use client";

import { ArrowRight } from "lucide-react";

export default function FashionSourcesReferences({
  sources = [],
  ctaLabel = "View all sources",
}) {
  if (!sources.length) {
    return null;
  }

  return (
    <section className="w-full max-w-[1020px] rounded-[24px] border border-[#E8EDF5] bg-white px-5 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] sm:px-6 sm:py-6">
      <div className="flex min-w-0 items-center justify-between gap-3">
        <p className="text-[14px] font-semibold tracking-[-0.02em] text-[#334155]">
          Sources & References
        </p>
        <button className="inline-flex shrink-0 items-center gap-1.5 rounded-full text-[13px] font-medium text-[#2563EB] transition hover:gap-2">
          {ctaLabel}
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="mt-4 flex min-w-0 gap-3 overflow-x-auto pb-1 scrollbar-none">
        {sources.map((source, index) => (
          <div
            key={`${source.title}-${source.domain}-${index}`}
            className="flex min-w-[188px] items-center gap-3 rounded-[18px] border border-[#E7EDF5] bg-[#FCFDFE] px-3.5 py-3"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#E8EDF5] bg-white">
              <span className="text-[15px] font-bold text-[#F044B0]">
                {source.logoText || source.title[0]}
              </span>
            </div>
            <div className="min-w-0">
              <p className="line-clamp-1 text-[14px] font-medium text-[#1F2937]">
                {source.title}
              </p>
              <p className="line-clamp-1 text-[12px] text-[#7A8497]">
                {source.domain}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
