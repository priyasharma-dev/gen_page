"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { useSearchUI } from "@/app/components/search/SearchUIContext";
import { getSearchExperienceContent } from "@/lib/data/mockContent";

import ScrollableRecommendationRow from "./ScrollableRecommendationRow";
import StreamingResponse from "./StreamingResponse";

export default function SearchResultStream({
  query,
  resolvedQuery,
}) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const formattedTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setCurrentTime(formattedTime);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const category = resolvedQuery?.category || "generic";

  const content = useMemo(
    () => getSearchExperienceContent(category),
    [category]
  );
  const { openRightPanel } = useSearchUI();

  const introText =
    content.conversationalReply?.intro ||
    `I found relevant ${category} results for "${query}".`;

  return (
    <div className="flex w-full min-w-0 flex-col gap-7">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-w-0 items-start gap-3"
      >
        <div className="min-w-0">
          <p className="text-[15px] font-medium text-gray-800">
            ANSI
          </p>

          <div className="mt-2 max-w-[640px] min-w-0">
            <StreamingResponse
              text={introText}
            />
          </div>

          <p className="mt-2 text-xs text-gray-400">
            {currentTime}
          </p>
        </div>
      </motion.div>

      <div className="ml-11 min-w-0">
        {category === "fashion" ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,240,245,0.78),rgba(245,247,255,0.92))] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
          >
            <div className="flex min-w-0 flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A4D7A]">
                  <Sparkles size={12} />
                  Editorial fashion curation
                </div>
                <h3 className="mt-4 break-words text-[32px] font-semibold tracking-[-0.04em] text-[#1F1726] sm:text-[38px]">
                  Luxury styling directions tailored to your fashion search
                </h3>
                <p className="mt-3 max-w-2xl break-words text-[15px] leading-7 text-[#6B6174]">
                  Larger cards, softer gradients, and premium collections help the fashion journey feel more editorial and less like a standard product grid.
                </p>
              </div>

              <div className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3">
                {["Curated drops", "Premium edits", "Scroll to explore"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/70 bg-white/65 px-4 py-3 text-sm font-medium text-[#4E4156] shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}

        <div className="space-y-10">
          {content.sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <ScrollableRecommendationRow
                category={category}
                title={section.title}
                description={section.description}
                products={section.products}
                onSelectCard={openRightPanel}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
