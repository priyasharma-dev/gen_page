"use client";

import { trendingItems } from "@/lib/data/mockContent";

const tagStyles = {
  Trending: "bg-purple-100 text-purple-700",
  Popular: "bg-blue-100 text-blue-700",
  Hot: "bg-red-100 text-red-700",
  Recommended: "bg-green-100 text-green-700",
};

export default function Trending() {
  return (
    <section className="w-full min-w-0 space-y-6 overflow-hidden">
      <div className="min-w-0 text-center">
        <h2 className="break-words text-2xl font-bold text-gray-900">
          AI Trending Insights
        </h2>

        <p className="mt-1 break-words text-sm text-gray-500">
          Live patterns from search behavior, product curiosity, and emerging
          user intent.
        </p>
      </div>

      <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {trendingItems.map((item) => (
          <div
            key={item.id}
            className="group relative min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-purple-50 opacity-0 transition group-hover:opacity-100" />

            <div className="relative">
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${tagStyles[item.tag]}`}
              >
                {item.tag}
              </span>

              <h3 className="mt-3 break-words text-lg font-semibold leading-snug text-gray-900 transition group-hover:text-black">
                {item.title}
              </h3>

              <p className="mt-2 break-words text-sm leading-6 text-gray-500">
                {item.insight}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
