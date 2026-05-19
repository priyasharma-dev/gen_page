"use client";

import { AnimatePresence, motion } from "framer-motion";

import { fadeUpVariants } from "@/app/shared/motion/fadeUp";
import FloatingBottomSearch from "@/app/core/search/FloatingBottomSearch";
import QueryInput from "@/app/core/search/QueryInput";

import SearchAxisContainer from "./SearchAxisContainer";

export default function ConversationalSearchLayout({
  hasQuery,
  query,
  setQuery,
  onSearch,
  hero,
  thread,
}) {
  return (
    <div className="relative min-h-full w-full min-w-0 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!hasQuery ? (
          <motion.div
            key="hero"
            variants={fadeUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-6 pb-12"
          >
            <SearchAxisContainer>
              <QueryInput
                value={query}
                setValue={setQuery}
                onSearch={onSearch}
              />
            </SearchAxisContainer>
            {hero}
          </motion.div>
        ) : (
          <motion.div
            key="thread"
            variants={fadeUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pb-28"
          >
            {thread}
          </motion.div>
        )}
      </AnimatePresence>

      {hasQuery ? (
        <FloatingBottomSearch
          value={query}
          setValue={setQuery}
          onSearch={onSearch}
        />
      ) : null}
    </div>
  );
}
