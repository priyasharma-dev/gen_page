"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import SearchWorkspace from "@/app/core/search/SearchWorkspace";
import { useSearchUI } from "@/app/core/state/SearchUIContext";
import { resolveQuery } from "@/lib/query/resolver";

function SearchPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { resetRightPanel } = useSearchUI();
  const urlQuery = searchParams.get("q") || "";
  const resolvedQuery = useMemo(() => {
    if (!urlQuery.trim()) {
      return null;
    }

    return resolveQuery(urlQuery);
  }, [urlQuery]);

  const [inputValue, setInputValue] = useState(urlQuery);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setInputValue(urlQuery);
    });
  }, [urlQuery]);

  useEffect(() => {
    resetRightPanel();
  }, [urlQuery, resetRightPanel]);

  useEffect(() => {
    let active = true;

    const run = async () => {
      const q = urlQuery.trim();

      if (!q) {
        queueMicrotask(() => {
          setLoading(false);
        });
        return;
      }

      queueMicrotask(() => {
        setLoading(true);
      });

      try {
        await new Promise((resolve) => {
          setTimeout(resolve, 1400);
        });

        if (!active) return;
      } catch (error) {
        console.error(error);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    const timer = setTimeout(run, 260);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [urlQuery]);

  const handleSearch = (value) => {
    if (!value.trim()) return;
    router.push(`/?q=${encodeURIComponent(value)}`);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <SearchWorkspace
      activeQuery={urlQuery}
      resolvedQuery={resolvedQuery}
      query={inputValue}
      setQuery={handleInputChange}
      onSearch={handleSearch}
      loading={loading}
    />
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <SearchPageContent />
    </Suspense>
  );
}
