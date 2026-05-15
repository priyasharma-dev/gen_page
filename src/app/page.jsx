"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import SearchWorkspace from "@/app/components/search/SearchWorkspace";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") || "";

  const [inputValue, setInputValue] = useState(urlQuery);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setInputValue(urlQuery);
    });
  }, [urlQuery]);

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
      query={inputValue}
      setQuery={handleInputChange}
      onSearch={handleSearch}
      loading={loading}
    />
  );
}
