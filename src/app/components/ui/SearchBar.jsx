"use client";

import { Search, Sparkles } from "lucide-react";

export default function SearchBar({ value, setValue, onSearch }) {
  return (
    <div
      className="
        group relative flex w-full min-w-0 flex-col gap-5
        overflow-hidden rounded-2xl
        border border-white/60 bg-white/80
        px-5 py-5 sm:px-6 sm:py-6
        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        backdrop-blur-2xl
        transition-all duration-300
        focus-within:border-blue-300
        focus-within:shadow-[0_20px_60px_rgba(59,130,246,0.18)]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      "
    >
      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-indigo-50/30 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />

      {/* HEADER */}
      <div className="relative flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
          <Sparkles className="h-5 w-5" strokeWidth={2.2} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Intelligent Search
          </p>
          <p className="text-xs text-gray-500">
            Ask anything — products, ideas, comparisons, or research
          </p>
        </div>
      </div>

      {/* INPUT ROW (BIGGER INPUT) */}
      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
        <div className="min-w-0 flex-1">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearch(value);
            }}
            placeholder="Ask anything..."
            className="
              w-full min-w-0
              rounded-2xl border border-gray-200/80
              bg-white px-5 py-4
              text-[16px] font-medium text-gray-800
              outline-none transition
              placeholder:text-gray-400
              focus:border-blue-300
              focus:ring-2 focus:ring-blue-100
            "
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={() => onSearch(value)}
          className="
            flex h-14 w-full sm:w-auto sm:min-w-[150px]
            items-center justify-center gap-0.75
            rounded-2xl
            bg-gradient-to-br from-blue-600 to-indigo-600
            px-6 text-sm font-semibold text-white
            shadow-lg transition-all duration-300
            hover:scale-[1.02]
            hover:shadow-[0_12px_30px_rgba(37,99,235,0.35)]
           
          "
        >
          <Search className="h-5 w-5" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </div>
  );
}