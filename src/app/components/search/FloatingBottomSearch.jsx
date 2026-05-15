"use client";

import { motion } from "framer-motion";
import {
  Paperclip,
  Search,
  Sparkles,
} from "lucide-react";

export default function FloatingBottomSearch({
  value,
  setValue,
  onSearch,
}) {
  return (
    <motion.div
      initial={{ y: 32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="fixed inset-x-0 bottom-4 z-40 px-4 sm:bottom-5 sm:px-6 lg:pl-[286px] lg:pr-[24px] xl:pr-[320px]"
    >
      <div className="mx-auto flex w-full max-w-[760px] min-w-0 items-center gap-3 rounded-full border border-[#DFE5F0] bg-white/88 px-4 py-3 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
        <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3F6FC] text-gray-500">
          <Paperclip size={16} />
        </button>

        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Search size={16} className="shrink-0 text-gray-400" />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch(value);
              }
            }}
            placeholder="Ask a follow-up..."
            className="w-full min-w-0 bg-transparent text-[15px] text-gray-800 outline-none placeholder:text-gray-400"
          />
        </div>

        <button
          onClick={() => onSearch(value)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3267EB] text-white shadow-[0_10px_22px_rgba(50,103,235,0.24)]"
        >
          <Sparkles size={16} />
        </button>
      </div>
    </motion.div>
  );
}
