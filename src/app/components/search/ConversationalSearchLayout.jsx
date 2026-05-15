"use client";

import { AnimatePresence, motion } from "framer-motion";

import FloatingBottomSearch from "./FloatingBottomSearch";
import QueryInput from "./QueryInput";

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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6 pb-12"
          >
            <div className="mx-auto w-full max-w-[760px]">
              <QueryInput
                value={query}
                setValue={setQuery}
                onSearch={onSearch}
              />
            </div>
            {hero}
          </motion.div>
        ) : (
          <motion.div
            key="thread"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
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
