"use client";

import { ArrowRight, Star } from "lucide-react";

export default function WebsitesWidget({
  websites = [],
}) {
  return (
    <section className="w-full min-w-0">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-[19px] font-semibold tracking-[-0.02em] text-[#1C2433]">
          Top Websites
        </p>
        <button className="inline-flex items-center gap-1 text-[13px] font-medium text-[#3267EB]">
          View all
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="rounded-[28px] border border-[#D7E6FF] bg-white px-5 py-4 shadow-[0_10px_30px_rgba(80,124,210,0.05)]">
        {websites.map((site, index) => (
          <div
            key={site.rank}
            className={`flex min-w-0 items-center gap-4 px-2 py-4 ${
              index < websites.length - 1 ? "border-b border-[#EEF1F6]" : ""
            }`}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-[15px] font-semibold text-[#7894C6]">
              {site.rank}
            </div>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] border border-[#ECEEF4] bg-white shadow-sm">
              <span className="text-[20px] font-bold text-[#F044B0]">
                {site.logoText || site.name[0]}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[16px] font-medium text-[#202633]">
                {site.name}
              </p>
              <p className="truncate text-[12px] text-[#8C95A5]">{site.domain}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2 text-[14px] text-[#445064]">
              <Star size={14} className="fill-[#FFC623] text-[#FFC623]" />
              {site.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
