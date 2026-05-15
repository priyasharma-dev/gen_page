"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExpandableDescription({
  text,
  clampClass = "line-clamp-2",
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-w-0">
      <AnimatePresence initial={false}>
        <motion.p
          key={expanded ? "expanded" : "collapsed"}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          className={`break-words text-sm leading-6 text-[#4B5568] ${
            expanded ? "" : clampClass
          }`}
        >
          {text}
        </motion.p>
      </AnimatePresence>

      <button
        onClick={() => setExpanded((value) => !value)}
        className="mt-2 text-sm font-medium text-[#3267EB] transition hover:text-[#224ec5]"
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
}
