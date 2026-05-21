"use client";

import { Star } from "lucide-react";

function PlatformBadge({ tone, label }) {
  if (tone === "netflix") {
    return <span className="text-[28px] font-black tracking-[-0.03em] text-[#E50914]">NETFLIX</span>;
  }

  if (tone === "apple") {
    return <span className="text-[26px] font-semibold tracking-[-0.03em] text-black">tv</span>;
  }

  return <span className="text-[24px] font-bold tracking-[-0.03em] text-[#1D4ED8]">prime video</span>;
}

export default function MovieCard({ movie }) {
  return (
    <article className="relative overflow-hidden rounded-[26px] border border-[rgba(15,23,42,0.08)] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
      <div className="flex min-w-0 flex-col gap-5 p-4 sm:flex-row sm:p-5">
        <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-[18px] bg-[#0F172A] sm:w-[150px]">
          <img
            src={movie.image}
            alt={movie.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute left-0 top-0 inline-flex rounded-br-[14px] bg-[#2563EB] px-3 py-2 text-[14px] font-bold text-white">
            #{movie.rank}
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
          <div>
            <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#111827]">
                  {movie.title}
                </h3>
                <p className="mt-1 text-[14px] text-[#667085]">
                  {movie.year}
                  <span className="mx-2">·</span>
                  {movie.runtime}
                  <span className="mx-2">·</span>
                  {movie.genres.join(", ")}
                </p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-[14px] font-medium text-[#111827]">
              <span className="inline-flex items-center gap-1.5">
                <Star size={15} className="fill-[#FBBF24] text-[#FBBF24]" />
                {movie.rating}
              </span>
              <span className="font-semibold">{movie.source}</span>
            </div>

            <p className="mt-4 max-w-[540px] text-[15px] leading-[1.7] text-[#344054]">
              {movie.description}
            </p>

            <div className="mt-4">
              <p className="text-[15px] font-semibold text-[#365CF5]">Why ANSI picked this:</p>
              <p className="mt-1 text-[15px] leading-[1.65] text-[#344054]">
                {movie.ansiReason}
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex min-w-0 flex-wrap gap-2">
              {movie.tags.map((tag) => (
                <span
                  key={`${movie.id}-${tag}`}
                  className="rounded-full bg-[#F4F5F7] px-3 py-1.5 text-[12px] font-medium text-[#475467]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="shrink-0 text-right">
              <p className="text-[12px] text-[#98A2B3]">{movie.platformLabel}</p>
              <div className="mt-2">
                <PlatformBadge tone={movie.platformTone} label={movie.platform} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
