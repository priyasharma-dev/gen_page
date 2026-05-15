"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Search,
  SunMedium,
} from "lucide-react";

export default function QueryInput({
  value,
  setValue,
  onSearch,
}) {
  return (
    <motion.div
      layout
      className="w-full min-w-0 rounded-[18px] border border-[#E7EBF3] bg-white/92 px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl"
    >
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Search size={18} className="shrink-0 text-gray-400" />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch(value);
              }
            }}
            placeholder="Western dresses for woman"
            className="w-full min-w-0 bg-transparent text-[15px] font-medium text-gray-900 outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E7EBF3] text-gray-500 transition hover:bg-gray-50">
            <Bell size={15} />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E7EBF3] text-gray-500 transition hover:bg-gray-50">
            <SunMedium size={15} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
