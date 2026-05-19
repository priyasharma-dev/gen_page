"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import SearchBar from "@/app/shared/ui/SearchBar";

function NewChatPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(urlQuery);

  /**
   * Sync URL → Input
   */
  useEffect(() => {
    if (query !== urlQuery) {
      queueMicrotask(() => {
        setQuery(urlQuery);
      });
    }
  }, [query, urlQuery]);

  /**
   * SEARCH → update URL
   */
  const handleSearch = (value) => {
    const trimmed = value.trim();

    if (!trimmed) {
      router.replace("/"); 
      return;
    }

    router.push(`/?q=${encodeURIComponent(trimmed)}`);
  };

  /**
   * INPUT CHANGE
   */
  const handleInputChange = (value) => {
    setQuery(value);

 
    if (!value.trim()) {
      router.replace("/");
    }
  };

  return (
    <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col gap-6 py-8">

      <section className="w-full min-w-0 rounded-[32px] border border-white/60 bg-white/80 p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-500">
          New Chat
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
          Start a Fresh Conversation
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Chat routes inherit the same shell and centered content alignment.
        </p>
      </section>

      <div className="mx-auto w-full min-w-0 max-w-3xl">
        <SearchBar
          value={query}
          setValue={handleInputChange}
          onSearch={handleSearch}
        />
      </div>

    </div>
  );
}

export default function NewChatPage() {
  return (
    <Suspense fallback={null}>
      <NewChatPageContent />
    </Suspense>
  );
}
