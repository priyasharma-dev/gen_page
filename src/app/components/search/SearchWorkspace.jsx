"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  MessageSquareText,
  Sparkles,
  SearchCheck,
} from "lucide-react";

import { getHeroSuggestions } from "@/lib/data/mockContent";

import ConversationalSearchLayout from "./ConversationalSearchLayout";
import SearchConversation from "./SearchConversation";

const landingCards = [
  {
    title: "Conversational results",
    body: "Responses stream in as a readable thread instead of a dashboard grid.",
    icon: MessageSquareText,
  },
  {
    title: "Search-native layout",
    body: "The workspace shifts into follow-up mode after your first question.",
    icon: SearchCheck,
  },
  {
    title: "Curated recommendations",
    body: "Relevant products, competitors, and related searches stay within reach.",
    icon: Sparkles,
  },
];

export default function SearchWorkspace({
  activeQuery,
  resolvedQuery,
  query,
  setQuery,
  onSearch,
  loading,
}) {
  const hasQuery = Boolean(activeQuery?.trim());
  const activeCategory = resolvedQuery?.category || "generic";
  const heroSuggestions = useMemo(
    () => getHeroSuggestions(activeCategory),
    [activeCategory]
  );

  return (
    <ConversationalSearchLayout
      hasQuery={hasQuery}
      query={query}
      setQuery={setQuery}
      onSearch={onSearch}
      hero={
        <div className="mx-auto flex w-full max-w-[760px] flex-col gap-6 pt-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#3267EB]">
              Conversational AI search
            </p>
            <h1 className="mt-3 break-words text-[42px] font-semibold tracking-tight text-gray-950 sm:text-[54px]">
              Ask once, then keep the conversation moving.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl break-words text-[15px] leading-7 text-[#667085]">
              ANSI starts clean and centered, then turns into a flowing search
              thread with references, recommendations, competitors, and follow-up prompts.
            </p>
          </div>

          <div className="flex min-w-0 flex-wrap items-center justify-center gap-2">
            {heroSuggestions.map((item) => (
              <button
                key={item}
                onClick={() => onSearch(item)}
                className="rounded-full border border-[#E6EAF2] bg-white px-4 py-2 text-sm text-[#4B5568] transition hover:border-[#CFE0FF] hover:text-[#3267EB]"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {landingCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-[24px] border border-white/70 bg-white/82 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] backdrop-blur-2xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF4FF] text-[#3267EB]">
                    <Icon size={18} />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-gray-900">
                    {card.title}
                  </h2>
                  <p className="mt-2 break-words text-sm leading-6 text-[#667085]">
                    {card.body}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      }
      thread={
        <div className="mx-auto w-full max-w-[860px]">
          <SearchConversation
            query={activeQuery}
            resolvedQuery={resolvedQuery}
            loading={loading}
          />
        </div>
      }
    />
  );
}
