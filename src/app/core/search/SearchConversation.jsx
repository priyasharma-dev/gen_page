"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  User2,
} from "lucide-react";

import SearchResultStream from "./SearchResultStream";
import AIThinkingSteps from "./AIThinkingSteps";
import SearchProgress from "./SearchProgress";

const thinkingSteps = [
  "Understanding query",
  "Analyzing trends",
  "Scanning 12+ platforms",
  "Ranking results",
  "Preparing response",
];

export default function SearchConversation({
  query,
  resolvedQuery,
  loading,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!loading) {
      queueMicrotask(() => {
        setActiveIndex(thinkingSteps.length);
      });
      return;
    }

    queueMicrotask(() => {
      setActiveIndex(0);
    });

    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current >= thinkingSteps.length - 1 ? current : current + 1
      );
    }, 700);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="mx-auto flex w-full min-w-0 flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-full min-w-0 justify-end"
      >
        <div className="flex w-full min-w-0 items-start justify-end gap-3">
          <div className="min-w-0 max-w-[980px] rounded-[18px] bg-[#EEF4FF] px-5 py-4 text-[#253040] shadow-sm">
            <p className="break-words text-[15px] leading-6">
              {query}
            </p>
            <p className="mt-2 text-right text-xs text-gray-400">10:42 AM</p>
          </div>

          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F58AD8] text-white">
            <User2 size={18} />
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="flex w-full min-w-0 flex-col gap-5"
      >
        <div className="flex min-w-0 items-start gap-3">
          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF4FF] text-[#3267EB]">
            <Bot size={15} />
          </span>
          {loading ? (
            <div className="min-w-0 flex-1 space-y-4">
              <SearchProgress
                currentStep={Math.min(activeIndex + 1, thinkingSteps.length)}
                totalSteps={thinkingSteps.length}
                label="ANSI is thinking..."
              />
              <AIThinkingSteps
                steps={thinkingSteps}
                activeIndex={activeIndex}
              />
            </div>
          ) : (
            <SearchResultStream
              query={query}
              resolvedQuery={resolvedQuery}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}
