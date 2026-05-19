"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Layers3,
  Sparkle,
} from "lucide-react";

const cards = [
  {
    title: "Best next step",
    body: "Compare the highest-rated matches before narrowing by price or brand.",
    icon: BadgeCheck,
  },
  {
    title: "Why these results",
    body: "The engine prioritized intent match, fresh relevance, and source agreement.",
    icon: Layers3,
  },
  {
    title: "Hidden opportunity",
    body: "Exploring adjacent categories can uncover stronger value than the obvious picks.",
    icon: Sparkle,
  },
];

export default function DynamicRecommendationBlock({
  category = "generic",
  intent = "search",
}) {
  return (
    <section className="w-full   min-w-0 rounded-[32px] border border-white/70 bg-white/82 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.05)] backdrop-blur-2xl sm:p-6">
      <div className="mb-5 flex min-w-0 flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <p className="break-words text-sm font-semibold text-gray-900">
            AI recommendations
          </p>
          <p className="break-words text-sm text-gray-500">
            Guidance tailored to {category} searches with {intent} intent.
          </p>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          Generated strategy
        </div>
      </div>

      <div className="grid w-full min-w-0 grid-cols-1 gap-4 lg:grid-cols-[1.25fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-w-0 rounded-[28px] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6 text-white"
        >
          <p className="break-words text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
            Search summary
          </p>
          <h3 className="mt-3 break-words text-2xl font-semibold">
            The engine is seeing a strong signal for curated, comparison-ready results.
          </h3>
          <p className="mt-3 break-words text-sm leading-7 text-blue-100/80">
            Queries in this cluster respond best to concise summaries, ranked options,
            and supporting references before deeper exploration.
          </p>
        </motion.div>

        <div className="grid min-w-0 grid-cols-1 gap-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 }}
                className="min-w-0 rounded-[24px] border border-gray-100 bg-white p-4 shadow-sm"
              >
                <div className="flex min-w-0 items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="break-words text-sm font-semibold text-gray-900">
                      {card.title}
                    </p>
                    <p className="mt-1 break-words text-sm text-gray-500">
                      {card.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
