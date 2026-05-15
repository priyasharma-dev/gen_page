"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Sparkles } from "lucide-react";

import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import ElectronicsLayout from "@/app/components/layouts/ElectronicsLayout";
import FashionLayout from "@/app/components/layouts/FashionLayout";
import FoodLayout from "@/app/components/layouts/FoodLayout";
import NewsLayout from "@/app/components/layouts/NewsLayout";
import SkincareLayout from "@/app/components/layouts/SkincareLayout";
import { resolveQuery } from "@/lib/query/resolver";
import { buildSchema } from "@/lib/schema/builder";
import { renderUI } from "@/lib/renderer/renderUI";

function SearchLayoutFrame({
  layoutName,
  children,
}) {
  switch (layoutName) {
    case "FashionLayout":
      return <FashionLayout>{children}</FashionLayout>;
    case "ElectronicsLayout":
      return <ElectronicsLayout>{children}</ElectronicsLayout>;
    case "FoodLayout":
      return <FoodLayout>{children}</FoodLayout>;
    case "NewsLayout":
      return <NewsLayout>{children}</NewsLayout>;
    case "SkincareLayout":
      return <SkincareLayout>{children}</SkincareLayout>;
    case "DefaultLayout":
      return <DefaultLayout>{children}</DefaultLayout>;
    default:
      if (typeof window !== "undefined") {
        console.warn(
          `[ANSI] Missing layout "${layoutName}". Falling back to DefaultLayout.`
        );
      }
      return <DefaultLayout>{children}</DefaultLayout>;
  }
}

export default function SearchPage() {
  const params = useSearchParams();

  const query = params.get("query") || "";

  const [schema, setSchema] = useState(null);
  const [resolved, setResolved] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function hydrateSearch() {
      if (!query.trim()) {
        queueMicrotask(() => {
          setSchema(null);
        });
        return;
      }

      queueMicrotask(() => {
        setLoading(true);
      });

      try {
        const resolved = resolveQuery(query);
        const built = await buildSchema(resolved);

        if (!cancelled) {
          setResolved(resolved);
          setSchema(built);
        }
      } catch (error) {
        console.error(error);

        if (!cancelled) {
          setResolved(null);
          setSchema(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    hydrateSearch();

    return () => {
      cancelled = true;
    };
  }, [query]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F7F9FC]">
      {/* gradient background */}
      <div className="absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_70%)]" />

      {/* container */}
      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 xl:px-10">
        {/* top card */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/85 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl sm:p-8">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-100/40 via-transparent to-transparent" />

          <div className="relative flex flex-col items-center text-center">
            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
              <Sparkles size={14} />
              Search Route
            </div>

            {/* heading */}
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Query Results
            </h1>

            {/* subtext */}
            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Route-driven search rendering inside the shared app shell
              with responsive spacing, schema-aware layouts, and dynamic UI rendering.
            </p>

            {/* query chip */}
            {query && (
              <div className="mt-5 inline-flex max-w-full items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                <span className="truncate">
                  Searching for: &quot;{query}&quot;
                </span>
              </div>
            )}
          </div>
        </div>

        {/* results */}
        <div className="w-full overflow-hidden rounded-[32px]">
          {loading ? (
            <div className="flex items-center justify-center rounded-[32px] border border-white/70 bg-white/80 py-24 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl">
              <div className="flex items-center gap-3 rounded-full border border-blue-100 bg-white px-6 py-3 shadow-sm">
                <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue-500" />

                <p className="text-sm font-medium text-gray-600">
                  Loading search results...
                </p>
              </div>
            </div>
          ) : schema ? (
            <div className="overflow-hidden">
              <SearchLayoutFrame
                layoutName={schema?.layout || resolved?.layout || "DefaultLayout"}
              >
                {renderUI(schema)}
              </SearchLayoutFrame>
            </div>
          ) : (
            <div className="rounded-[32px] border border-dashed border-gray-200 bg-white/75 p-14 text-center shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
                <Sparkles size={28} />
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                Start a Search
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                Search results will render here dynamically using
                schema-driven layouts and responsive UI blocks.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
