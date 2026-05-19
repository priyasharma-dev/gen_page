"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function QueryHistoryWidget({
  items = [],
}) {
  return (
    <section className="w-full min-w-0 pt-1">
      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[#6F7B8D]">
        Recent Queries
      </p>

      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className={`cursor-pointer rounded-[18px] border border-transparent px-3.5 py-3 transition-all duration-300 hover:border-[#E6EAF2] hover:bg-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.05)] ${
              index === 0 ? "bg-[#F6F8FC]" : "bg-transparent"
            }`}
          >
            <p className="break-words text-[15px] tracking-[-0.02em] text-[#4B5568] transition-colors duration-200 group-hover:text-[#111827]">
              {item.label}
            </p>

            <p className="mt-1.5 text-[11px] text-[#A1A9B7]">
              {item.time}
            </p>
          </motion.div>
        ))}
      </div>

      <button className="mt-5 inline-flex items-center gap-1.5 text-[14px] text-[#667085] transition-all duration-200 hover:gap-2 hover:text-[#1F2937]">
        View all
        <ArrowRight size={14} />
      </button>
    </section>
  );
}