"use client";

import { ArrowRight } from "lucide-react";

export default function RelatedSearchPanel({
  relatedSearches = [],
  topSources = [],
}) {
  return (
    <div className="space-y-4">
      <section>
        <p className="mb-3 text-[15px] font-semibold text-gray-900">
          Related searches
        </p>
        <div className="space-y-2">
          {relatedSearches.map((item) => (
            <button
              key={item}
              className="w-full rounded-[14px] bg-[#F8FAFD] px-3 py-3 text-left text-sm text-[#4B5568] transition hover:bg-[#F2F6FF] hover:text-[#3267EB]"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-[15px] font-semibold text-gray-900">Top sources</p>
          <button className="inline-flex items-center gap-1 text-xs font-medium text-[#3267EB]">
            View all
            <ArrowRight size={12} />
          </button>
        </div>
        <div className="rounded-[18px] border border-[#DCE7FF] bg-[#FCFDFF] p-3">
          <div className="space-y-2">
            {topSources.map((source) => (
              <div
                key={source.title}
                className="rounded-[14px] bg-white px-3 py-3 shadow-sm"
              >
                <p className="break-words text-sm font-semibold text-[#4B5568]">
                  {source.title}
                </p>
                <p className="mt-1 text-xs text-gray-400">{source.domain}</p>
                <p className="mt-2 text-xs text-gray-500">{source.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
