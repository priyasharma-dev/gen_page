"use client";

import { specs } from "@/lib/data/mockContent";

export default function Specs() {
  return (
    <section className="w-full min-w-0 space-y-6 overflow-hidden">
      <div className="min-w-0 text-center">
        <h2 className="break-words text-2xl font-bold text-gray-900">
          AI Product Specifications
        </h2>

        <p className="mt-1 break-words text-sm text-gray-500">
          Structured technical breakdown generated from product schema and
          comparison intent.
        </p>
      </div>

      <div className="grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="group relative min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 transition group-hover:opacity-100" />

            <div className="relative">
              <p className="break-words text-xs font-medium uppercase tracking-wide text-gray-500">
                {spec.label}
              </p>

              <h3 className="mt-2 break-words text-lg font-semibold text-gray-900">
                {spec.value}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
