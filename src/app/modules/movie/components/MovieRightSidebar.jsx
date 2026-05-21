"use client";

import { ExternalLink, Search } from "lucide-react";

function SourceLogo({ label }) {
  if (label === "IMDb") {
    return (
      <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#F5C518] text-[11px] font-black text-black">
        IMDb
      </span>
    );
  }

  if (label === "RT") {
    return (
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FA4B2A] text-[12px] font-black text-white">
        RT
      </span>
    );
  }

  if (label === "Reddit" || label === "R") {
    return (
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF5700] text-[14px] font-black text-white">
        r
      </span>
    );
  }

  if (label === "Letterboxd") {
    return (
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F172A] text-[11px] font-black text-white">
        lb
      </span>
    );
  }

  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF2FF] text-[14px] font-bold text-[#344054]">
      {label}
    </span>
  );
}

function SidebarCard({ children, className = "" }) {
  return (
    <section
      className={`rounded-[26px] border border-[rgba(15,23,42,0.08)] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)] ${className}`}
    >
      {children}
    </section>
  );
}

export default function MovieRightSidebar({ topSources = [], relatedSearches = [], collections = [], content }) {
  const lookedAtSites = content?.lookedAtSites || [];

  return (
    <div className="flex h-full w-full min-w-0 flex-col overflow-hidden bg-transparent px-3 py-4 lg:px-6 lg:py-5">
      <div className="flex-1 space-y-5 overflow-y-auto overflow-x-hidden">
        <SidebarCard>
          <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#111827]">
            Looked at 8 sites
          </h3>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {lookedAtSites.map((site) => (
              <SourceLogo key={site} label={site} />
            ))}
          </div>
        </SidebarCard>

        <SidebarCard>
          <div className="space-y-5">
            {topSources.map((source, index) => (
              <a
                key={source.title}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className={`flex items-start gap-3 ${index < topSources.length - 1 ? "border-b border-[rgba(15,23,42,0.08)] pb-5" : ""}`}
              >
                <div className="min-w-0 flex-1">
                  <p className="text-[17px] font-medium leading-[1.45] text-[#111827]">
                    {source.title}
                  </p>
                  <p className="mt-2 text-[14px] text-[#667085]">{source.domain}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <SourceLogo label={source.logo} />
                  <ExternalLink size={14} className="text-[#98A2B3]" />
                </div>
              </a>
            ))}
          </div>

          <button
            type="button"
            className="mt-5 inline-flex w-full items-center justify-center rounded-[18px] bg-[#F3F4F6] px-4 py-3 text-[15px] font-semibold text-[#344054]"
          >
            See all sources
          </button>
        </SidebarCard>

        <SidebarCard>
          <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#111827]">
            Related searches
          </h3>
          <div className="mt-4 space-y-4">
            {relatedSearches.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Search size={18} className="mt-1 shrink-0 text-[#667085]" />
                <p className="text-[16px] leading-[1.55] text-[#344054]">{item}</p>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-5 inline-flex w-full items-center justify-center rounded-[18px] bg-[#F3F4F6] px-4 py-3 text-[15px] font-semibold text-[#344054]"
          >
            See more
          </button>
        </SidebarCard>

        <SidebarCard>
          <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#111827]">
            Popular collections
          </h3>
          <div className="mt-4 space-y-3">
            {collections.map((collection) => (
              <div
                key={collection.title}
                className="relative overflow-hidden rounded-[18px] border border-[rgba(15,23,42,0.05)]"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-[92px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.85),rgba(2,6,23,0.35),rgba(2,6,23,0.08))]" />
                <div className="absolute inset-0 flex flex-col justify-center px-4">
                  <p className="max-w-[160px] text-[17px] font-semibold leading-[1.35] text-white">
                    {collection.title}
                  </p>
                  <p className="mt-1 text-[13px] text-white/80">{collection.count}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-5 inline-flex w-full items-center justify-center rounded-[18px] bg-[#F3F4F6] px-4 py-3 text-[15px] font-semibold text-[#344054]"
          >
            View all collections
          </button>
        </SidebarCard>

        <SidebarCard>
          <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#111827]">
            Save this search
          </h3>
          <p className="mt-3 text-[15px] leading-[1.6] text-[#667085]">
            Get updates when new movie rankings or streaming options change.
          </p>
          <button
            type="button"
            className="mt-5 inline-flex w-full items-center justify-center rounded-[18px] bg-[#111827] px-4 py-3 text-[15px] font-semibold text-white"
          >
            Save search
          </button>
        </SidebarCard>
      </div>
    </div>
  );
}
