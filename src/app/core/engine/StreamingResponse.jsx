"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function StreamingResponse({
  text,
  className = "",
  collapsedLinesClass = "line-clamp-2",
  buttonClassName = "",
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-w-0">
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className={`max-w-xl break-words text-[14px] leading-6 text-[#4B5568] transition-all duration-300 ${className} ${
          expanded ? "" : collapsedLinesClass
        }`}
      >
        {text}
      </motion.p>

      {text.length > 120 ? (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className={`mt-1 text-[13px] font-medium text-[#3267EB] transition hover:text-[#1D4ED8] ${buttonClassName}`}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}
