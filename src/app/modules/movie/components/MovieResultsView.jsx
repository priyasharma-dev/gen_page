"use client";

import { ChevronDown, Link2, Sparkles, TrendingUp, Users } from "lucide-react";

import MovieCard from "./MovieCard";

function InsightCard({ title, body, icon: Icon }) {
  return (
    <div className="flex min-w-0 items-start gap-4 border-r border-[rgba(15,23,42,0.08)] px-5 py-5 last:border-r-0 max-md:border-r-0">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[#F4F6FF] text-[#4F46E5]">
        <Icon size={20} />
      </span>
      <p className="text-[15px] leading-[1.65] text-[#475467]">
        <span className="font-semibold text-[#111827]">{title}</span> {body}
      </p>
    </div>
  );
}

function PlatformPill({ label }) {
  return (
    <div className="flex min-h-[84px] min-w-0 items-center justify-center rounded-[22px] border border-[rgba(15,23,42,0.08)] bg-white px-4 py-4 shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
      <span className="text-center text-[18px] font-semibold tracking-[-0.03em] text-[#111827]">
        {label}
      </span>
    </div>
  );
}

export default function MovieResultsView({ content }) {
  const insightIcons = [Sparkles, TrendingUp, Users];

  return (
    <div className="w-full min-w-0 space-y-8">
      <section>
        <div className="flex min-w-0 flex-wrap items-center gap-3">
          <h3 className="text-[18px] font-semibold text-[#111827] sm:text-[22px]">
            {content.sections?.[0]?.title}
          </h3>
          <Link2 size={16} className="text-[#98A2B3]" />
        </div>
        <p className="mt-2 text-[14px] text-[#667085]">
          {content.sections?.[0]?.description}
        </p>

        <div className="mt-5 space-y-4">
          {(content.results || []).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <div className="mt-5 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,23,42,0.10)] bg-white px-5 py-2.5 text-[14px] font-medium text-[#344054] shadow-[0_8px_20px_rgba(15,23,42,0.04)]"
          >
            Show more recommendations
            <ChevronDown size={16} />
          </button>
        </div>
      </section>

      <section className="overflow-hidden rounded-[26px] border border-[rgba(99,102,241,0.12)] bg-[#F8FAFF]">
        <div className="border-b border-[rgba(15,23,42,0.06)] px-5 py-4">
          <h4 className="text-[18px] font-semibold text-[#111827]">What ANSI noticed</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {(content.insights || []).map((item, index) => {
            const Icon = insightIcons[index] || Sparkles;
            return (
              <InsightCard
                key={item.title}
                title={item.title}
                body={item.body}
                icon={Icon}
              />
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex min-w-0 flex-wrap items-end justify-between gap-3">
          <div>
            <h4 className="text-[20px] font-semibold text-[#111827]">Where to watch</h4>
            <p className="mt-2 text-[14px] text-[#667085]">
              All platforms that have these movies
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {(content.platforms || []).map((platform) => (
            <PlatformPill key={platform} label={platform} />
          ))}
        </div>
      </section>
    </div>
  );
}
