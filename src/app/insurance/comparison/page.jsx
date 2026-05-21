"use client";

import { Suspense, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useSearchUI } from "@/app/core/state/SearchUIContext";
import InsuranceComparisonPage from "@/app/modules/insurance/components/InsuranceComparisonPage";
import insuranceData from "@/app/modules/insurance/data/insuranceData";
import InsuranceLayout from "@/app/modules/insurance/layouts/InsuranceLayout";
import { resolveQuery } from "@/lib/query/resolver";

function InsuranceComparisonRouteContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setActiveCategory, resetRightPanel } = useSearchUI();
  const query =
    searchParams.get("q") || "best cheap auto insurance in USA";
  const resolvedQuery = useMemo(() => resolveQuery(query), [query]);
  const content = useMemo(
    () => insuranceData.getSearchExperienceContent(query, resolvedQuery),
    [query, resolvedQuery]
  );

  useEffect(() => {
    setActiveCategory("insurance");
    resetRightPanel();
  }, [resetRightPanel, setActiveCategory]);

  return (
    <InsuranceLayout>
      <InsuranceComparisonPage
        comparisonRows={content.comparisonRows || []}
        query={query}
        onBack={() => router.push(`/?q=${encodeURIComponent(query)}`)}
      />
    </InsuranceLayout>
  );
}

export default function InsuranceComparisonRoute() {
  return (
    <Suspense fallback={null}>
      <InsuranceComparisonRouteContent />
    </Suspense>
  );
}
