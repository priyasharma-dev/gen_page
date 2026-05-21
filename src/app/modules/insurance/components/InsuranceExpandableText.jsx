"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function InsuranceExpandableText({
  text,
  className = "",
  collapsedLinesClass = "line-clamp-3",
}) {
  const paragraphRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    const element = paragraphRef.current;

    if (!element) {
      return undefined;
    }

    const measure = () => {
      const previousClamp = element.classList.contains("line-clamp-3");
      if (!expanded && !previousClamp) {
        element.classList.add("line-clamp-3");
      }

      const nextShowToggle = element.scrollHeight - element.clientHeight > 4;
      setShowToggle(nextShowToggle);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);

    return () => observer.disconnect();
  }, [expanded, text]);

  return (
    <div className="min-w-0">
      <motion.p
        ref={paragraphRef}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className={`break-words text-[15px] leading-[24.38px] text-[#101828] ${className} ${
          expanded ? "" : collapsedLinesClass
        }`}
      >
        {text}
      </motion.p>

      {showToggle ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 text-[13px] font-medium text-[#3267EB] transition hover:text-[#1D4ED8]"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}
