"use client";

import { motion } from "framer-motion";

export default function SearchProgress({
  currentStep = 1,
  totalSteps = 5,
  label = "Analyzing your request",
}) {
  const progress = Math.min(100, Math.round((currentStep / totalSteps) * 100));

  return (
    <div className="w-full min-w-0 rounded-[26px] border border-white/70 bg-white/75 p-4 shadow-[0_16px_60px_rgba(15,23,42,0.05)] backdrop-blur-2xl">
      <div className="mb-3 flex min-w-0 items-center justify-between gap-3">
        <p className="break-words text-sm font-semibold text-gray-800">
          {label}
        </p>
        <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {progress}%
        </span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
