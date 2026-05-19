"use client";

import { useMemo } from "react";

import ConversationalSearchLayout from "@/app/core/layout/ConversationalSearchLayout";
import SearchAxisContainer from "@/app/core/layout/SearchAxisContainer";
import { useCategoryModule } from "@/app/shared/hooks/useCategoryModule";

import SearchConversation from "./SearchConversation";

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
  const categoryModule = useCategoryModule(activeCategory);
  const heroSuggestions = useMemo(
    () => categoryModule.getHeroSuggestions(),
    [categoryModule]
  );

  return (
    <ConversationalSearchLayout
      hasQuery={hasQuery}
      query={query}
      setQuery={setQuery}
      onSearch={onSearch}
      hero={
        <SearchAxisContainer className="pt-8">
          <div className="flex w-full min-w-0 flex-col gap-6 ">
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
          </div>
        </SearchAxisContainer>
      }
      thread={
        <SearchAxisContainer>
          <SearchConversation
            query={activeQuery}
            resolvedQuery={resolvedQuery}
            loading={loading}
          />
        </SearchAxisContainer>
      }
    />
  );
}
