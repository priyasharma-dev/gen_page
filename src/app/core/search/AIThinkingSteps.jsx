"use client";

import { motion } from "framer-motion";
import {
  Check,
  Circle,
  Sparkles,
} from "lucide-react";

export default function AIThinkingSteps({
  steps = [],
  activeIndex = 0,
}) {
  return (
    <div className="w-full min-w-0 rounded-[18px] border border-[#DCE7FF] bg-white px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
      <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEF4FF] text-[#3267EB]">
            <Sparkles size={18} />
          </div>
          <p className="break-words text-[15px] font-medium text-gray-700">
            ANSI is thinking...
          </p>
        </div>

        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-3 lg:justify-between">
          {steps.map((step, index) => {
            const complete = index <= activeIndex;

            return (
              <div
                key={step}
                className="flex min-w-0 items-center gap-2"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                  {complete ? (
                    <Check size={15} className="text-[#3267EB]" />
                  ) : (
                    <Circle size={15} className="text-gray-300" />
                  )}
                </span>
                <p
                  className={`break-words text-[14px] leading-5 ${
                    complete ? "text-[#3267EB]" : "text-gray-400"
                  }`}
                >
                  {step}
                </p>
                {index < steps.length - 1 ? (
                  <motion.div
                    className="hidden h-px w-4 shrink-0 bg-[#DCE7FF] lg:block"
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: complete ? 1 : 0.4 }}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
