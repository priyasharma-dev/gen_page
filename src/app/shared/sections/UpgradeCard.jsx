"use client";

import { Sparkles, ArrowUpRight } from "lucide-react";

export default function UpgradeCard() {
  return (
    <section className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#C9D9FF_0%,#DCE4FF_40%,#ECE9FF_100%)] px-6 py-6 shadow-[0_10px_26px_rgba(120,144,255,0.12)]">
      <div className="relative z-10 max-w-[190px]">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[#3267EB] backdrop-blur-md">
          <Sparkles size={14} />
          <p className="text-[14px] font-semibold">
            ANSI Pro
          </p>
        </div>

        <p className="mt-3 break-words text-[13px] leading-6 text-[#596374]">
          Get deeper insights, custom recommendations and more.
        </p>

        <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-[#3267EB] shadow-[0_4px_12px_rgba(117,142,255,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:gap-3 hover:shadow-[0_8px_18px_rgba(117,142,255,0.18)]">
          Upgrade now
          <ArrowUpRight size={14} />
        </button>
      </div>

      <div className="pointer-events-none absolute right-7 top-5 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(123,146,255,0.5),rgba(123,146,255,0.02))]" />

      <Sparkles
        size={58}
        className="pointer-events-none absolute right-7 top-5 text-[#7B94FF] opacity-20"
      />

      <Sparkles
        size={34}
        className="pointer-events-none absolute bottom-7 right-24 text-[#B892FF] opacity-30"
      />
    </section>
  );
}