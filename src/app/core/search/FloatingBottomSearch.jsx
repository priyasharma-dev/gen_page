// src/components/FloatingBottomSearch.jsx
"use client";

import { motion } from "framer-motion";
import { Paperclip, Search, ArrowUp } from "lucide-react";

/**
 * FloatingBottomSearch
 *
 * Uses .floating-search-anchor (globals.css) for positioning:
 *   left  = var(--shell-left-offset)  → never under the sidebar
 *   right = var(--shell-right-offset) → shrinks when right panel opens
 *
 * .content-frame centres + caps the pill at --search-feed-max-width,
 * matching the feed cards above it exactly.
 */
export default function FloatingBottomSearch({ value, setValue, onSearch }) {
  return (
    <motion.div
      initial={{ y: 32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="floating-search-anchor"
    >
      {/* content-frame centres the pill, same cap as feed cards */}
      <div className="content-frame">
        <div className="pointer-events-auto w-full">
          <div className="flex w-full items-center gap-3 rounded-full border border-[#DFE5F0] bg-white/95 px-4 py-3 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:px-5">

            {/* Attachment */}
            <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3F6FC] text-gray-500 border-none cursor-pointer">
              <Paperclip size={17} />
            </button>

            {/* Input */}
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <Search size={17} className="shrink-0 text-gray-400" />
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") onSearch(value);
                }}
                placeholder="Ask a follow-up..."
                className="w-full min-w-0 bg-transparent text-[16px] text-gray-800 outline-none placeholder:text-gray-400 border-none"
              />
            </div>

            {/* Send */}
            <button
              onClick={() => onSearch(value)}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3267EB] text-white border-none cursor-pointer shadow-[0_10px_22px_rgba(50,103,235,0.24)]"
            >
              <ArrowUp size={19} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}