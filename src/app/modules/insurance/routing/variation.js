const COMPARISON_KEYWORDS = [
  "compare",
  "cheapest",
  "cheap",
  "rates",
  "quotes",
  "quote",
  "price",
  "best cheap",
];

const TRUST_KEYWORDS = [
  "trusted",
  "reliable",
  "safest",
  "best claims",
  "recommended",
];

const PREFERENCE_KEYWORDS = [
  "student",
  "military",
  "family",
  "new driver",
  "new drivers",
  "personalized",
  "for me",
];

export function resolveInsuranceVariation(query = "") {
  const normalized = String(query || "").toLowerCase();

  if (PREFERENCE_KEYWORDS.some((keyword) => normalized.includes(keyword))) {
    return "preference";
  }

  if (TRUST_KEYWORDS.some((keyword) => normalized.includes(keyword))) {
    return "trust";
  }

  if (COMPARISON_KEYWORDS.some((keyword) => normalized.includes(keyword))) {
    return "comparison";
  }

  return "comparison";
}

export function getInitialInsuranceFlowState() {
  return {
    selectedProvider: null,
  };
}

export function shouldShowInsuranceWebsitesPanel(selectedProvider) {
  return selectedProvider == null;
}

export function getInsuranceComparisonUrl(query) {
  return `/insurance/comparison?q=${encodeURIComponent(query)}`;
}

export function getInsuranceDetailUrl(query, providerId) {
  return `/insurance/providers/${encodeURIComponent(providerId)}?q=${encodeURIComponent(query)}`;
}

export function isInsuranceProviderSelected(selectedProviderId, providerId) {
  return selectedProviderId === providerId;
}
