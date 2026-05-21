"use client";

import { Suspense, useEffect, useMemo } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import { useSearchUI } from "@/app/core/state/SearchUIContext";
import InsuranceProviderDetailPage from "@/app/modules/insurance/components/InsuranceProviderDetailPage";
import {
  getInsuranceProviderById,
  getSearchExperienceContent,
} from "@/app/modules/insurance/data/insuranceData";
import InsuranceLayout from "@/app/modules/insurance/layouts/InsuranceLayout";
import { resolveQuery } from "@/lib/query/resolver";

function InsuranceProviderRouteContent() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setActiveCategory, resetRightPanel } = useSearchUI();
  const query =
    searchParams.get("q") || "best cheap auto insurance in USA";
  const providerId = params?.provider;
  const resolvedQuery = useMemo(() => resolveQuery(query), [query]);

  useEffect(() => {
    setActiveCategory("insurance");
    resetRightPanel();
  }, [resetRightPanel, setActiveCategory]);

  const provider =
    getInsuranceProviderById(providerId) ||
    getSearchExperienceContent(query, resolvedQuery).providers?.[0] ||
    null;

  return (
    <InsuranceLayout>
      <InsuranceProviderDetailPage
        provider={provider}
        onBack={() => router.push(`/?q=${encodeURIComponent(query)}`)}
      />
    </InsuranceLayout>
  );
}

export default function InsuranceProviderRoute() {
  return (
    <Suspense fallback={null}>
      <InsuranceProviderRouteContent />
    </Suspense>
  );
}
