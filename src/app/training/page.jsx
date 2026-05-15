"use client";

import {
  Sparkles,
  Brain,
  Workflow,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    title: "Prompt Engineering Fundamentals",
    description:
      "Learn prompt structures, chaining strategies, context control, and response optimization techniques.",
    icon: Sparkles,
  },
  {
    title: "Schema-driven Interface Design",
    description:
      "Build scalable dynamic interfaces powered by schema-based rendering systems and modular UI contracts.",
    icon: Brain,
  },
  {
    title: "Workflow Orchestration & Analysis",
    description:
      "Understand orchestration pipelines, routing layers, query analysis, and adaptive workflow rendering.",
    icon: Workflow,
  },
  {
    title: "Reliable Context Systems",
    description:
      "Design systems that preserve contextual relevance, supporting data, and intelligent response alignment.",
    icon: ShieldCheck,
  },
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F7F9FC]">
      {/* background */}
      <div className="absolute inset-x-0 top-0 h-[340px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_70%)]" />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 xl:px-10">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white/85 px-6 py-10 shadow-[0_20px_80px_rgba(15,23,42,0.06)] backdrop-blur-2xl sm:px-10 sm:py-14">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-100/40 via-transparent to-transparent" />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
              <Sparkles size={14} />
              Training Center
            </div>

            {/* title */}
            <h1 className="mt-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
              Structured Learning Modules
            </h1>

            {/* description */}
            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
              Explore scalable AI learning paths designed around
              prompt systems, schema-driven interfaces, workflow orchestration,
              and intelligent UI architecture.
            </p>

            {/* stats */}
            <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-gray-100 bg-white px-5 py-5 shadow-sm">
                <p className="text-3xl font-bold text-gray-900">12+</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-gray-500">
                  Learning Tracks
                </p>
              </div>

              <div className="rounded-[24px] border border-gray-100 bg-white px-5 py-5 shadow-sm">
                <p className="text-3xl font-bold text-gray-900">48</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-gray-500">
                  Practical Lessons
                </p>
              </div>

              <div className="rounded-[24px] border border-gray-100 bg-white px-5 py-5 shadow-sm">
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-gray-500">
                  Responsive UI
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MODULE GRID */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <article
                key={module.title}
                className="group rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                  <Icon size={24} />
                </div>

                {/* title */}
                <h2 className="mt-5 text-xl font-semibold leading-tight text-gray-900">
                  {module.title}
                </h2>

                {/* description */}
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {module.description}
                </p>

                {/* footer */}
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3">
                  Start Module
                  <ArrowRight size={16} />
                </button>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}