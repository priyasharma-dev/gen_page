"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Sparkles } from "lucide-react";

import { useSearchUI } from "@/app/core/state/SearchUIContext";
import {
  getInsuranceComparisonUrl,
} from "../routing/variation.js";
import InsuranceComparisonPage from "./InsuranceComparisonPage";

import InsurancePreferenceSection from "./InsurancePreferenceSection";
import InsuranceProviderCard from "./InsuranceProviderCard";

function reorderProvidersForPreferences(providers, selectedTags) {
  if (!selectedTags.length) {
    return providers;
  }

  const scoreProvider = (provider) => {
    let score = 0;

    if (
      selectedTags.includes("First-time Driver") &&
      provider.providerName === "State Farm"
    ) {
      score += 6;
    }

    if (
      selectedTags.includes("Already Have Insurance") &&
      provider.providerName === "Progressive"
    ) {
      score += 4;
    }

    if (
      selectedTags.includes("Urgent - Need Coverage") &&
      provider.providerName === "GEICO"
    ) {
      score += 5;
    }

    if (
      selectedTags.includes("Compare") &&
      provider.providerName === "Progressive"
    ) {
      score += 4;
    }

    if (
      selectedTags.includes("Lowest monthly payment") &&
      (provider.providerName === "State Farm" || provider.providerName === "USAA")
    ) {
      score += 4;
    }

    if (
      selectedTags.includes("Fast approval") &&
      provider.providerName === "GEICO"
    ) {
      score += 3;
    }

    if (
      selectedTags.includes("Full coverage") &&
      provider.providerName === "Progressive"
    ) {
      score += 3;
    }

    if (
      selectedTags.includes("Good customer support") &&
      (provider.providerName === "USAA" || provider.providerName === "State Farm")
    ) {
      score += 4;
    }

    return score;
  };

  return [...providers].sort((left, right) => scoreProvider(right) - scoreProvider(left));
}

function SectionHeading({ title, description, helperLabel }) {
  return (
    <div className="space-y-2">
      <div className="flex min-w-0 flex-wrap items-center gap-2">
        <h3 className="text-[22px] font-medium leading-[33px] text-[#09090B]">
          {title}
        </h3>
        {helperLabel ? (
          <div className="flex items-center gap-1 text-[14px] font-semibold text-[#2563EB]">
            <Sparkles size={16} />
            <span>{helperLabel}</span>
          </div>
        ) : null}
      </div>
      {description ? (
        <p className="text-[14px] leading-[21px] text-[#6A7282]">{description}</p>
      ) : null}
    </div>
  );
}

function ProviderGrid({ providers, selectedProviderId, onSelect }) {
  return (
    <div className="mt-5 grid min-w-0 grid-cols-1 gap-[14px] md:grid-cols-2 xl:grid-cols-4">
      {providers.map((provider, index) => (
        <InsuranceProviderCard
          key={provider.id}
          product={provider}
          index={index}
          isSelected={selectedProviderId === provider.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}


export default function InsuranceVariationRouter({
  content,
  query,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { selectedProduct, openRightPanel } = useSearchUI();
  const [preferenceSelections, setPreferenceSelections] = useState([]);
  const pageMode = searchParams.get("insurancePage") || "results";
  const providerId = searchParams.get("provider");
  const variation = content.variation || "comparison";

  const providers = useMemo(() => {
    if (variation !== "preference") {
      return content.providers || content.topRatedProducts || [];
    }

    return reorderProvidersForPreferences(
      content.providers || content.topRatedProducts || [],
      preferenceSelections
    );
  }, [content.providers, content.topRatedProducts, preferenceSelections, variation]);

  const activeProvider =
    (content.providers || []).find((provider) => provider.id === providerId) ||
    selectedProduct ||
    null;

  if (pageMode === "comparison") {
    return (
      <InsuranceComparisonPage
        comparisonRows={content.comparisonRows || []}
        query={query}
        onBack={() => router.push(`/?q=${encodeURIComponent(query)}`)}
      />
    );
  }

  return (
    <div className="w-full min-w-0">
      <SectionHeading
        title={content.sections?.[0]?.title}
        description={content.sections?.[0]?.description}
        helperLabel={content.sections?.[0]?.helperLabel}
      />

      {variation === "preference" ? (
        <div className="mt-6">
          <InsurancePreferenceSection
            title="Which best describes you?"
            subtitle="Choose the profile that best matches your insurance shopping needs."
            chips={content.situationChips || []}
            selectionMode="single"
            selected={preferenceSelections}
            onChange={setPreferenceSelections}
          />
        </div>
      ) : null}

      <ProviderGrid
        providers={providers}
        selectedProviderId={selectedProduct?.id || null}
        onSelect={openRightPanel}
      />

      {variation === "preference" ? (
        <div className="mt-8">
          <InsurancePreferenceSection
            title="What matters most to you?"
            subtitle="These choices can influence which provider feels like the best fit."
            chips={content.priorityChips || []}
            selectionMode="multiple"
            selected={preferenceSelections}
            onChange={setPreferenceSelections}
          />
        </div>
      ) : null}
    </div>
  );
}
