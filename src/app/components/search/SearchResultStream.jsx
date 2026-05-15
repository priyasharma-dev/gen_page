"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

import {
  conversationalReply,
  curatedDressSections,
} from "@/lib/data/mockContent";

import ScrollableRecommendationRow from "./ScrollableRecommendationRow";
import StreamingResponse from "./StreamingResponse";

export default function SearchResultStream() {
  // dynamic current time
  const currentTime = useMemo(() => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  return (
    <div className="flex w-full min-w-0 flex-col gap-7">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-w-0 items-start gap-3"
      >
        <div className="min-w-0">
          <p className="text-[15px] font-medium text-gray-800">
            ANSI
          </p>

          <div className="mt-2 max-w-[640px] min-w-0">
            <StreamingResponse
              text={conversationalReply.intro}
            />
          </div>

          <p className="mt-2 text-xs text-gray-400">
            {currentTime}
          </p>
        </div>
      </motion.div>

      <div className="ml-11 min-w-0 space-y-10">
        {curatedDressSections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <ScrollableRecommendationRow
              title={section.title}
              description={section.description}
              products={section.products}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}