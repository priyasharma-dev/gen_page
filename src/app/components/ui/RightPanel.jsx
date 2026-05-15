"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  ExternalLink,
  MoreVertical,
  Star,
} from "lucide-react";

import RelatedSearchPanel from "@/app/components/search/RelatedSearchPanel";
import { useSearchUI } from "@/app/components/search/SearchUIContext";
import { getSearchExperienceContent } from "@/lib/data/mockContent";
import { resolveQuery } from "@/lib/query/resolver";

export default function RightPanel() {
  const searchParams = useSearchParams();
  const { selectedCard } = useSearchUI();
  const query = searchParams.get("q") || searchParams.get("query") || "";
  const category = useMemo(() => {
    if (!query.trim()) {
      return "generic";
    }

    return resolveQuery(query).category;
  }, [query]);
  const content = useMemo(
    () => getSearchExperienceContent(category),
    [category]
  );

  return (
    <div className="flex w-full min-w-0 flex-col gap-4 overflow-x-hidden p-5">
      {selectedCard?.type === "electronicsProduct" ? (
        <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-4 shadow-[0_18px_44px_rgba(15,23,42,0.07)]">
          <div className="flex items-center justify-between gap-3 border-b border-[#E5E7EB] pb-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex -space-x-2">
                {["F", "A", "M"].map((site, index) => (
                  <span
                    key={site}
                    className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#F8FAFC] text-xs font-bold shadow-sm ${
                      index === 0
                        ? "bg-[#FFE8A3] text-[#A15C00]"
                        : index === 1
                          ? "bg-[#FFE6C7] text-[#9A4A08]"
                          : "bg-[#FFE7F5] text-[#E00086]"
                    }`}
                  >
                    {site}
                  </span>
                ))}
              </div>
              <p className="text-lg font-semibold text-[#111827]">9 sites</p>
            </div>

            <button className="flex h-9 w-9 items-center justify-center rounded-full text-[#6B7280] transition hover:bg-white">
              <MoreVertical size={18} />
            </button>
          </div>

          <div className="divide-y divide-[#E5E7EB]">
            {(selectedCard.sources || []).map((site) => (
              <article
                key={site.id}
                className="grid grid-cols-[1fr_76px] gap-3 py-4"
              >
                <div className="min-w-0">
                  <h3 className="line-clamp-2 text-[15px] font-semibold leading-5 text-[#111827]">
                    {site.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[12px] leading-5 text-[#7B8190]">
                    {site.snippet}
                  </p>
                  <p className="mt-3 text-[13px] font-semibold text-[#111827]">
                    {site.source}
                  </p>
                </div>

                <div className="relative">
                  <div className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white p-2">
                    <img
                      src={selectedCard.image}
                      alt={selectedCard.title}
                      className="h-full w-full rounded-xl object-contain"
                    />
                  </div>
                  <button className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#F8FAFC] text-[#6B7280]">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <button className="mt-3 h-11 w-full rounded-full bg-[#E9EDF3] text-sm font-medium text-[#111827] transition hover:bg-[#DEE5EE]">
            Show All
          </button>
        </div>
      ) : selectedCard ? (
        <div className="rounded-[24px] border border-[#E6EBF3] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,255,0.92))] p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
          <div className="flex min-w-0 items-start gap-3">
            {selectedCard.image ? (
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="h-[86px] w-[74px] shrink-0 rounded-[18px] object-cover"
              />
            ) : null}
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7B8798]">
                Selected item
              </p>
              <h2 className="mt-2 break-words text-[18px] font-semibold text-gray-900">
                {selectedCard.title}
              </h2>
              <p className="mt-1 break-words text-sm text-[#667085]">
                {selectedCard.subtitle || selectedCard.brand}
              </p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-lg font-semibold text-[#111827]">
                  {selectedCard.price}
                </p>
                <button className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-4 py-2 text-sm font-medium text-white">
                  Open
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>

          {selectedCard.description ? (
            <p className="mt-4 break-words text-sm leading-6 text-[#667085]">
              {selectedCard.description}
            </p>
          ) : null}

          {selectedCard.tags?.length ? (
            <div className="mt-4 flex min-w-0 flex-wrap gap-2">
              {selectedCard.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#F4F7FB] px-3 py-1 text-[11px] font-semibold text-[#516074]"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {content.topRatedProducts.length ? (
        <RailSection
          title="Top Rated Products"
          action="View all"
        >
          <div className="rounded-[18px] border border-[#DCE7FF] bg-[#FCFDFF] p-3">
            <div className="space-y-3">
              {content.topRatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex min-w-0 items-start gap-3 rounded-[14px] p-1"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[70px] w-[70px] shrink-0 rounded-[14px] object-cover"
                  />
                  <div className="min-w-0 pt-1">
                    <p className="break-words text-[15px] font-semibold text-[#4B5568]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[15px] font-semibold text-gray-800">
                      {item.price}
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-gray-400">
                      <Star size={12} className="fill-[#FDBA12] text-[#FDBA12]" />
                      <span className="text-[#4B5568]">{item.rating}</span>
                      <span>({item.reviews})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RailSection>
      ) : null}

      {content.topWebsites.length ? (
        <RailSection
          title="Top Websites"
          action="View all"
        >
          <div className="rounded-[18px] border border-[#DCE7FF] bg-[#FCFDFF] p-3">
            <div className="space-y-1">
              {content.topWebsites.map((site) => (
                <div
                  key={site.rank}
                  className="flex min-w-0 items-center gap-3 rounded-[14px] px-1 py-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEF4FF] text-[11px] font-semibold text-[#6A8AE8]">
                    {site.rank}
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-white shadow-sm">
                    <span className="text-sm font-bold text-[#F044B0]">
                      {site.name[0]}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="break-words text-[14px] font-medium text-[#4B5568]">
                      {site.name}
                    </p>
                    <p className="text-[11px] text-gray-400">{site.domain}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1 text-xs text-[#4B5568]">
                    <Star size={12} className="fill-[#FDBA12] text-[#FDBA12]" />
                    {site.rating}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RailSection>
      ) : null}

      <div className="pt-2">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
          Recent Queries
        </p>
        <div className="space-y-3">
          {content.recentQueries.map((item, index) => (
            <div
              key={item.label}
              className={`rounded-[14px] px-3 py-3 ${
                index === 0 ? "bg-[#F7F9FD]" : ""
              }`}
            >
              <p className="break-words text-[15px] text-[#4B5568]">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-gray-400">{item.time}</p>
            </div>
          ))}
        </div>

        <button className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900">
          View all
          <ArrowRight size={14} />
        </button>
      </div>

      <RelatedSearchPanel
        relatedSearches={content.relatedSearches}
        topSources={content.topSources}
      />

      <div className="rounded-[18px] bg-gradient-to-br from-[#EAF0FF] to-[#E8E6FF] p-4">
        <div className="flex min-w-0 items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[18px] font-semibold text-[#3267EB]">ANSI Pro</p>
            <p className="mt-2 break-words text-sm leading-6 text-[#667085]">
              Get deeper insights, custom recommendations and more.
            </p>
            <button className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#3267EB] shadow-sm">
              Upgrade now
            </button>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/50 text-[#7C8AF5]">
            ✦
          </div>
        </div>
      </div>
    </div>
  );
}

function RailSection({
  title,
  action,
  children,
}) {
  return (
    <section className="w-full min-w-0">
      <div className="mb-3 flex min-w-0 items-center justify-between gap-3">
        <p className="break-words text-[15px] font-semibold text-gray-900">{title}</p>
        <button className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-[#3267EB]">
          {action}
          <ArrowRight size={12} />
        </button>
      </div>
      {children}
    </section>
  );
}
