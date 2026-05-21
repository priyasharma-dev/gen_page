"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const defaultSteps = [
  "Understanding query",
  "Analyzing trends",
  "Scanning 12+ platforms",
  "Ranking results",
  "Preparing response",
];

export default function AIThinkingSteps({
  steps = defaultSteps,
  activeIndex = 0,
  isDone = false,
}) {
  if (isDone) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="mx-auto w-full rounded-[20px] border border-[#DCE7FF] bg-white p-5 sm:p-6"
    >
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#EEF4FF] text-[#2563EB]"
        >
          <Sparkles size={24} fill="#2563EB" />
        </motion.div>
        <p className="text-[17px] font-medium text-[#111827] sm:text-[19px]">
          ANSI is thinking…
        </p>
      </div>

      {/* Steps — wrap naturally on small screens */}
      <div className="flex flex-wrap gap-2">
        {steps.map((step, index) => {
          const complete = index <= activeIndex;
          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`
                inline-flex items-center gap-2 rounded-full
                border px-3 py-1.5 text-[13px] font-medium
                sm:px-3.5 sm:py-2 sm:text-[14px]
                ${complete
                  ? "border-[#C7D9FF] bg-[#EEF4FF] text-[#2563EB]"
                  : "border-[#E5E7EB] bg-[#F9FAFB] text-[#9CA3AF]"}
              `}
            >
              {complete ? (
                <motion.span
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-white"
                >
                  <Check size={11} strokeWidth={3} />
                </motion.span>
              ) : (
                <span className="h-[18px] w-[18px] shrink-0 rounded-full border-[1.5px] border-[#D1D5DB]" />
              )}
              {step}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}