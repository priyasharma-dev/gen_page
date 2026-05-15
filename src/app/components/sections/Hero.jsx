"use client";

import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full overflow-x-hidden">
      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0B1020] via-[#111827] to-black px-6 py-12 text-white shadow-[0_25px_100px_rgba(0,0,0,0.35)] sm:px-8 sm:py-16 lg:px-14 lg:py-20">
          {/* glow effects */}
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

          <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent" />

          {/* content */}
          <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-200 backdrop-blur-md sm:text-xs">
              <Sparkles size={14} />
              Schema Driven UI Engine
            </div>

            {/* title */}
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Discover Amazing Products
            </h1>

            {/* description */}
            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base lg:text-lg lg:leading-8">
              A dynamic search-powered interface where UI adapts based on query,
              schema, and intent — built with a modular rendering engine
              optimized for responsive experiences.
            </p>

            {/* actions */}
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <button className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto">
                Explore Engine
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 sm:w-auto">
                View Schema Flow
              </button>
            </div>

            {/* bottom stats */}
            <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-md">
                <p className="text-3xl font-bold text-white">120+</p>

                <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-gray-400">
                  Live Sources
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-md">
                <p className="text-3xl font-bold text-white">9</p>

                <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-gray-400">
                  UI Layouts
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-md">
                <p className="text-3xl font-bold text-white">0.3s</p>

                <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-gray-400">
                  Query Latency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}