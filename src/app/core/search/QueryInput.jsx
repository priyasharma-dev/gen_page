"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  Globe,
  ImageIcon,
  Mic,
  PencilLine,
  Plus,
} from "lucide-react";

export default function QueryInput({
  value,
  setValue,
  onSearch,
}) {
  return (
    <motion.div
      layout
      className="flex w-full min-w-0 flex-col items-center"
    >
      {/* Hero Section */}
      <div className="mb-10 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-[#E8EEFF] bg-[#F4F7FF] px-4 py-2 text-sm font-medium text-[#3B6EF5]">
          ✦ AI built for clarity, security, and scale
        </div>

        <h1 className="text-5xl font-semibold tracking-[-2px] text-[#0F172A] md:text-7xl">
          Ask Anything
        </h1>

        <h2 className="mt-2 text-4xl font-semibold tracking-[-2px] text-[#3B6EF5] md:text-6xl">
          Get Exactly What You Need
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#64748B]">
          Your intelligent assistant for everyday tasks,
          <br />
          complex questions, and everything in between.
          <br />
          Fast. Reliable. Private by design.
        </p>
      </div>

      {/* Search Box */}
      <motion.div
        layout
        className="w-full min-w-0 rounded-[32px] border border-[#E7EBF3] bg-white px-6 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
      >
        {/* Top Input */}
        <div className="flex items-center gap-2">
          {/* Plus */}
          <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3F6FF] text-[#3B6EF5] transition hover:scale-105">
            <Plus size={21} />
          </button>

          {/* Input */}
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch(value);
              }
            }}
            placeholder="Top Mobile Phone Under 20,000"
            className="flex-1 bg-transparent text-sm text-[#334155] outline-none placeholder:text-[#64748B]"
          />

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="text-gray-500 transition hover:text-black">
              <Mic size={21} />
            </button>

            <button
              onClick={() => onSearch(value)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3B6EF5] text-white transition hover:scale-105"
            >
              <ArrowUp size={21} />
            </button>
          </div>
        </div>

       
      </motion.div>

   
    </motion.div>
  );
}
