"use client";

import {
  SlidersHorizontal,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function Filters() {
  return (
    <section className="w-full overflow-x-hidden   rounded-[30px] border border-white/10 bg-gradient-to-br from-[#0F172A] via-[#111827] to-black p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
      {/* header */}
      <div className="flex flex-col gap-5 pl-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-300 backdrop-blur-md">
            <Sparkles size={14} />
            Smart Filtering Engine
          </div>

          {/* heading */}
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            AI Assisted Filters
          </h2>

          {/* description */}
          <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
            Refine search results dynamically using schema-aware filters,
            intelligent ranking, and adaptive UI rendering.
          </p>
        </div>

        {/* indicator */}
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          Live Filtering
        </div>
      </div>

      {/* filters */}
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* category */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
            Category
          </label>

          <div className="group relative">
            <select className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-5 pr-12 text-sm font-medium text-white outline-none backdrop-blur-md transition-all duration-300 hover:border-white/20 focus:border-purple-500">
              <option className="text-black">All Categories</option>
              <option className="text-black">Fashion</option>
              <option className="text-black">Electronics</option>
              <option className="text-black">Food</option>
              <option className="text-black">Lifestyle</option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* price */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
            Price
          </label>

          <div className="relative">
            <select className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-5 pr-12 text-sm font-medium text-white outline-none backdrop-blur-md transition-all duration-300 hover:border-white/20 focus:border-purple-500">
              <option className="text-black">Low → High</option>
              <option className="text-black">High → Low</option>
              <option className="text-black">Under $50</option>
              <option className="text-black">$50 - $100</option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* sort */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
            Sort By
          </label>

          <div className="relative">
            <select className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-5 pr-12 text-sm font-medium text-white outline-none backdrop-blur-md transition-all duration-300 hover:border-white/20 focus:border-purple-500">
              <option className="text-black">Trending</option>
              <option className="text-black">Newest</option>
              <option className="text-black">Best Rated</option>
              <option className="text-black">Most Popular</option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className="mt-7 flex flex-col gap-4 rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-300">
            <SlidersHorizontal size={18} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              Dynamic Schema Rendering
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-400">
              Filters automatically update layouts, ranking logic,
              and contextual rendering inside the UI engine.
            </p>
          </div>
        </div>

        {/* button */}
        <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
          Apply Filters
        </button>
      </div>
    </section>
  );
}