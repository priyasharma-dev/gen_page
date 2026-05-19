"use client";

import { ArrowRight } from "lucide-react";

export default function SourcesRow({
  sources = [],
  ctaLabel = "View all sources",
}) {
  return (
    <section className="rounded-[22px] border border-[#EBEDF2] bg-white px-4 py-4 shadow-[0_6px_18px_rgba(15,23,42,0.03)]">
      <p className="text-[13px] font-medium text-[#616A78]">
        Sources & References
      </p>

      <div className="mt-3 flex min-w-0 items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
        {sources.map((source,index) => (
          <div
          key={`${source.title}-${source.domain}-${index}`}
            className="flex min-w-[180px] max-w-[200px] items-center gap-3 rounded-[16px] border border-[#ECEEF4] bg-white px-3 py-2.5 transition-all duration-200 hover:border-[#D9E2F2] hover:shadow-[0_8px_18px_rgba(15,23,42,0.05)]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#ECEEF4] bg-white">
              <span className="text-[15px] font-bold text-[#F044B0]">
                {source.logoText || source.title[0]}
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="line-clamp-1 text-[13px] font-medium leading-5 text-[#202633]">
                {source.title}
              </p>

              <p className="line-clamp-1 text-[11px] text-[#7A8394]">
                {source.domain}
              </p>
            </div>
          </div>
        ))}

        <button className="ml-1 inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2 py-1 text-[13px] font-medium text-[#3267EB] transition-all duration-200 hover:gap-2 hover:text-[#1D4ED8]">
          {ctaLabel}
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}