"use client";

import { motion } from "framer-motion";

export default function StreamingResponse({
  text,
}) {
  const sentences = text.split(". ").filter(Boolean);

  return (
    <div className="min-w-0">
      {sentences.map((sentence, index) => (
        <motion.p
          key={`${sentence}-${index}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
          className={`break-words text-[15px] leading-7 text-[#4B5568] ${
            index > 0 ? "mt-2" : ""
          }`}
        >
          {sentence}
          {sentence.endsWith(".") ? "" : "."}
        </motion.p>
      ))}
    </div>
  );
}
