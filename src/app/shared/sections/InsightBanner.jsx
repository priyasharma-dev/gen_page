"use client";

import { motion } from "framer-motion";
import { ChartNoAxesCombined } from "lucide-react";

export default function InsightBanner({
  title,
  body,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-[22px] border border-white/70 bg-[linear-gradient(90deg,rgba(248,241,255,0.92),rgba(235,238,255,0.96),rgba(231,245,255,0.92))] px-6 py-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
    >
      <div className="flex min-w-0 items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DCEBFF] text-[#3468EB] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
          <ChartNoAxesCombined size={18} />
        </div>

        <div className="min-w-0">
          <h3 className="break-words text-[17px] font-semibold tracking-[-0.02em] text-[#182033]">
            {title}
          </h3>

          <p className="mt-2 max-w-3xl break-words text-[13px] leading-6 text-[#394458]">
            {body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}