"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  User2,
} from "lucide-react";

import { useCategoryModule } from "@/app/shared/hooks/useCategoryModule";

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
  const activeCategory = resolvedQuery?.category || "generic";
  const categoryModule = useCategoryModule(activeCategory);
  const conversationConfig = categoryModule.config?.conversation || {};
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
    <div className={`mx-auto flex w-full min-w-0 flex-col ${conversationConfig.wrapperClass || "gap-5"}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-full min-w-0 justify-end"
      >
        <div className="flex w-full min-w-0 items-start justify-end gap-2">
          <div className="flex min-w-0 flex-col items-end">
            <div
              className={`
        min-w-0
        max-w-[460px]
        rounded-[28px]
        rounded-tr-[6px]
        bg-[#EEF4FF]
        px-8
        py-4
        text-[#172133]
        ${conversationConfig.userBubbleClass || ""}
      `}
            >
              <p className="break-words text-base font-normal leading-[1.25] tracking-[-0.02em]">
                {query}
              </p>
            </div>

            <p className="mt-4 text-right text-sm font-normal leading-none text-[#9AA4B5]">
              10:42 AM
            </p>
          </div>

          <span className="mt-0 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EF6FD0] text-white">
            <User2 size={24} strokeWidth={2.4} />
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className={`flex w-full min-w-0 flex-col ${conversationConfig.assistantStackClass || "gap-5"}`}
      >
        <div className={`flex min-w-0 items-start ${conversationConfig.assistantRowClass || "gap-3"}`}>
          <span className={`shrink-0 items-center justify-center rounded-full bg-[#EEF4FF] text-[#3267EB] ${conversationConfig.assistantIconClass || "mt-1 flex h-8 w-8"}`}>
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
