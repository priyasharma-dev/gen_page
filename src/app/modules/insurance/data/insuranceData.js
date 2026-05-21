import { resolveInsuranceVariation } from "../routing/variation.js";

const INSURANCE_HERO_SUGGESTIONS = [
  "best cheap auto insurance in USA",
  "car insurance quotes",
  "affordable vehicle insurance",
  "best insurance for new drivers",
];

export const AUTO_INSURANCE_PROVIDERS = [
  {
    id: "insurance-geico",
    rank: 1,
    providerName: "GEICO",
    title: "GEICO",
    brand: "GEICO",
    label: "Cheapest Overall",
    badge: "Cheapest Overall",
    priceValue: "$89",
    priceSuffix: "/mo",
    price: "$89/mo",
    estimatedPriceRange: "$89/mo",
    rating: "4.4",
    reviews: "22K+",
    status: "Great",
    statusTone: "green",
    subtitle: "Low rate for great coverage",
    shortDescription: "Great rates for safe drivers with lots of discounts.",
    highlights: [
      "Low average monthly rates",
      "High claims satisfaction",
      "Easy online quotes",
    ],
    coverageHighlights: [
      "Low average monthly rates",
      "High claims satisfaction",
      "Easy online quotes",
    ],
    whyChoose: [
      "Cheapest overall rates in 2026",
      "High claims satisfaction (4.4/5)",
      "Easy online quotes in minutes",
      "Many discounts available",
      "24/7 customer support",
    ],
    quickFacts: [
      { label: "AM Best Rating", value: "A++ (Superior)", icon: "shield" },
      { label: "Claims Satisfaction", value: "4.4 / 5 (22K+)", icon: "star" },
      { label: "Quote Speed", value: "2 mins", icon: "timer" },
      { label: "Discounts", value: "13+ Available", icon: "tag" },
    ],
    discounts: [
      "Multi-policy",
      "Safe Driver",
      "Good Student",
      "Military",
      "Low Mileage",
    ],
    availability: "Available 7 AM – 10 PM (EST)",
    callToAction: "Call Now",
    detailSummary:
      "Low rate for great coverage with dependable support and one of the fastest quote flows in the market.",
    bestFor: "Affordable everyday coverage",
    audienceTags: ["budget", "everyday drivers"],
    logoText: "GEICO",
    logoStyle: "geico",
    websiteUrl: "https://www.geico.com/auto-insurance/",
  },
  {
    id: "insurance-state-farm",
    rank: 2,
    providerName: "State Farm",
    title: "State Farm",
    brand: "State Farm",
    label: "Best Value",
    badge: "Best Value",
    priceValue: "$72",
    priceSuffix: "/mo",
    price: "$72/mo",
    estimatedPriceRange: "$72/mo",
    rating: "4.6",
    reviews: "19K+",
    status: "Excellent",
    statusTone: "green",
    subtitle: "Great rates & local agent support",
    shortDescription:
      "Affordable rates and strong local agent support for balanced value.",
    highlights: [
      "Great rates & local agent support",
      "Reliable claims service",
      "Many discount options",
    ],
    coverageHighlights: [
      "Great rates & local agent support",
      "Reliable claims service",
      "Many discount options",
    ],
    whyChoose: [
      "Balanced pricing with local support",
      "Reliable claims service experience",
      "Strong driver discount stack",
      "Trusted household brand",
    ],
    quickFacts: [
      { label: "AM Best Rating", value: "A++", icon: "shield" },
      { label: "Claims Satisfaction", value: "4.6 / 5", icon: "star" },
      { label: "Quote Speed", value: "4 mins", icon: "timer" },
      { label: "Discounts", value: "10+ Available", icon: "tag" },
    ],
    discounts: ["Multi-line", "Safe Driver", "Drive Safe", "Student"],
    availability: "Available 8 AM – 8 PM (EST)",
    callToAction: "Call Now",
    detailSummary:
      "One of the strongest value picks if you want a low monthly rate without sacrificing claims support.",
    bestFor: "Local support and value",
    audienceTags: ["families", "new drivers"],
    logoText: "StateFarm",
    logoStyle: "statefarm",
    websiteUrl: "https://www.statefarm.com/insurance/auto",
  },
  {
    id: "insurance-progressive",
    rank: 3,
    providerName: "Progressive",
    title: "Progressive",
    brand: "Progressive",
    label: "Best for Flexibility",
    badge: "Best for Flexibility",
    priceValue: "$97",
    priceSuffix: "/mo",
    price: "$97/mo",
    estimatedPriceRange: "$97/mo",
    rating: "4.5",
    reviews: "17K+",
    status: "Strong",
    statusTone: "green",
    subtitle: "Flexible coverage options",
    shortDescription:
      "Flexible coverage options and easy online experience.",
    highlights: [
      "Flexible coverage options",
      "Usage-based discounts",
      "Customizable plans",
    ],
    coverageHighlights: [
      "Flexible coverage options",
      "Usage-based discounts",
      "Customizable plans",
    ],
    whyChoose: [
      "Flexible coverage configuration",
      "Strong quote comparison tools",
      "Usage-based savings potential",
      "Fast digital checkout",
    ],
    quickFacts: [
      { label: "AM Best Rating", value: "A+", icon: "shield" },
      { label: "Claims Satisfaction", value: "4.5 / 5", icon: "star" },
      { label: "Quote Speed", value: "3 mins", icon: "timer" },
      { label: "Discounts", value: "12+ Available", icon: "tag" },
    ],
    discounts: ["Multi-policy", "Snapshot", "Online Sign", "Teen Driver"],
    availability: "Available 24/7 online",
    callToAction: "Call Now",
    detailSummary:
      "Best fit for shoppers who want to customize coverage and compare scenarios before they commit.",
    bestFor: "Flexible coverage",
    audienceTags: ["comparers", "switchers"],
    logoText: "PROGRESSIVE",
    logoStyle: "progressive",
    websiteUrl: "https://www.progressive.com/auto/",
  },
  {
    id: "insurance-usaa",
    rank: 4,
    providerName: "USAA",
    title: "USAA",
    brand: "USAA",
    label: "Best for Military",
    badge: "Best for Military",
    priceValue: "$68",
    priceSuffix: "/mo",
    price: "$68/mo",
    estimatedPriceRange: "$68/mo",
    rating: "4.8",
    reviews: "14K+",
    status: "Excellent",
    statusTone: "green",
    subtitle: "Exclusive for military families",
    shortDescription:
      "Exclusive low rates and strong trust for military families.",
    highlights: [
      "Exclusive for military families",
      "Excellent member service",
      "Highly trusted",
    ],
    coverageHighlights: [
      "Exclusive for military families",
      "Excellent member service",
      "Highly trusted",
    ],
    whyChoose: [
      "Excellent member support",
      "Highly trusted claims experience",
      "Great rates for eligible families",
      "Strong long-term loyalty signals",
    ],
    quickFacts: [
      { label: "AM Best Rating", value: "A++", icon: "shield" },
      { label: "Claims Satisfaction", value: "4.8 / 5", icon: "star" },
      { label: "Quote Speed", value: "3 mins", icon: "timer" },
      { label: "Discounts", value: "9+ Available", icon: "tag" },
    ],
    discounts: ["Military", "Safe Driver", "Garage", "Multi-vehicle"],
    availability: "Available 24/7 online",
    callToAction: "Call Now",
    detailSummary:
      "Outstanding service and price if you qualify, especially for military households looking for trusted support.",
    bestFor: "Military families",
    audienceTags: ["military", "families", "budget"],
    logoText: "USAA",
    logoStyle: "usaa",
    websiteUrl: "https://www.usaa.com/inet/wc/auto-insurance",
  },
];

export const AUTO_INSURANCE_WEBSITES = [
  { rank: 1, name: "NerdWallet", logoStyle: "nerdwallet", url: "https://www.nerdwallet.com/insurance/auto/car-insurance", description: "Expert editorial comparisons for rates, discounts, and insurer quality." },
  { rank: 2, name: "The Zebra", logoStyle: "zebra", url: "https://www.thezebra.com/auto-insurance/", description: "Quote-focused marketplace with side-by-side carrier pricing guidance." },
  { rank: 3, name: "Liberty Mutual", logoStyle: "liberty", url: "https://www.libertymutual.com/vehicle/auto-insurance", description: "Direct carrier site with policy options, discounts, and quote flows." },
  { rank: 4, name: "FARMERS", logoStyle: "farmers", url: "https://www.farmers.com/auto/", description: "Carrier site with local agent support and coverage bundle options." },
  { rank: 5, name: "Nationwide", logoStyle: "nationwide", url: "https://www.nationwide.com/personal/insurance/auto/", description: "Coverage overview and digital quote experience for comparison shoppers." },
  { rank: 6, name: "TRAVELERS", logoStyle: "travelers", url: "https://www.travelers.com/car-insurance", description: "Carrier source for plan details, claims info, and discount eligibility." },
  { rank: 7, name: "Esurance", logoStyle: "esurance", url: "https://www.esurance.com/", description: "Digital-first quote flow with streamlined online purchase experience." },
];

const COMPARISON_ROWS = [
  {
    provider: "GEICO",
    bestFor: "Cheapest overall",
    rate: "$89",
    highlights: "Low rates, easy online experience, many discounts",
    logoStyle: "geico",
  },
  {
    provider: "StateFarm",
    bestFor: "Local support",
    rate: "$72",
    highlights: "Local agents, reliable claims service",
    logoStyle: "statefarm",
  },
  {
    provider: "PROGRESSIVE",
    bestFor: "Flexible coverage",
    rate: "$97",
    highlights: "Customizable plans, usage-based discounts",
    logoStyle: "progressive",
  },
  {
    provider: "USAA",
    bestFor: "Military families",
    rate: "$68",
    highlights: "Exclusive rates, excellent member support",
    logoStyle: "usaa",
  },
];

const ANSI_REASONS = [
  {
    title: "Affordable Rates",
    body: "Lowest average monthly premiums in 2026.",
    tone: "lime",
  },
  {
    title: "High Satisfaction",
    body: "Strong customer reviews and claims experience.",
    tone: "violet",
  },
  {
    title: "Great Discounts",
    body: "Multiple ways to save with smart discounts.",
    tone: "emerald",
  },
  {
    title: "Trusted Support",
    body: "Responsive support and easy claims process.",
    tone: "blue",
  },
];

const SITUATION_CHIPS = [
  "First-time Driver",
  "Already Have Insurance",
  "Urgent - Need Coverage",
  "Compare",
];

const PRIORITY_CHIPS = [
  "Lowest monthly payment",
  "Fast approval",
  "Full coverage",
  "Good customer support",
];

const RELATED_INSURANCE = [
  {
    title: "Life Insurance",
    body: "Financial protection for your family’s future.",
    cta: "Learn More",
    tone: "violet",
  },
  {
    title: "Term Insurance",
    body: "Affordable coverage for a specific period of time.",
    cta: "Learn More",
    tone: "green",
  },
  {
    title: "Health Insurance",
    body: "Coverage for medical expenses and better health.",
    cta: "Learn More",
    tone: "amber",
  },
  {
    title: "Home Insurance",
    body: "Protect your home and belongings from unexpected events.",
    cta: "Learn More",
    tone: "blue",
  },
];

export function getInsuranceContext(query = "", resolvedQuery = null) {
  const normalized = String(query || "").toLowerCase();
  const entities = resolvedQuery?.entities || {};

  return {
    productType:
      entities.productType === "insurance" ? "auto insurance" : entities.productType || "auto insurance",
    location: entities.location || "USA",
    audience:
      entities.audience ||
      (/\bnew driver\b|\bnew drivers\b/.test(normalized) ? "new drivers" : null),
    compareIntent:
      resolvedQuery?.intent?.type === "compare" ||
      /\bquotes?\b|\bcompare\b|\bproviders\b|\bcompanies\b/.test(normalized),
  };
}

function getSortedProviders(context) {
  const providers = [...AUTO_INSURANCE_PROVIDERS];

  if (context.audience === "new drivers") {
    const preferred = ["State Farm", "GEICO", "Progressive", "USAA"];
    providers.sort(
      (left, right) =>
        preferred.indexOf(left.providerName) - preferred.indexOf(right.providerName)
    );
    return providers;
  }

  return providers.sort((left, right) => left.rank - right.rank);
}

function buildInsuranceIntro(context) {
  return `ANSI analyzed top providers across the ${context.location} based on average rates, customer satisfaction, financial strength, claims experience, and available discounts to find the most affordable ${context.productType} options for you.`;
}

export function getInsuranceProviderById(providerId) {
  return AUTO_INSURANCE_PROVIDERS.find((provider) => provider.id === providerId) || null;
}

const insuranceData = {
  getHeroSuggestions() {
    return INSURANCE_HERO_SUGGESTIONS;
  },
  getSearchExperienceContent(query = "", resolvedQuery = null) {
    const context = getInsuranceContext(query, resolvedQuery);
    const providers = getSortedProviders(context);

    return {
      promptTitle: "Best cheap auto insurance in USA",
      topRatedProducts: providers,
      topWebsites: AUTO_INSURANCE_WEBSITES,
      providers,
      recentQueries: [
        { label: "best cheap auto insurance in USA", time: "Just now" },
        { label: "car insurance quotes", time: "53m ago" },
        { label: "best insurance for new drivers", time: "Yesterday" },
      ],
      websitePanelTitle: "Top Websites to Buy Auto Insurance",
      variation: resolveInsuranceVariation(query),
      comparisonUrl: "/?q=best%20cheap%20auto%20insurance%20in%20USA&insurancePage=comparison",
      sources: [
        {
          label: "NerdWallet",
          url: "https://www.nerdwallet.com/insurance/auto/car-insurance",
          description:
            "Consumer-facing insurance comparisons focused on pricing, discounts, and provider trust signals.",
          logoStyle: "nerdwallet",
        },
        {
          label: "The Zebra",
          url: "https://www.thezebra.com/auto-insurance/",
          description:
            "Insurance comparison marketplace with quote-focused provider summaries and rate-shopping guidance.",
          logoStyle: "zebra",
        },
      ],
      comparisonRows: COMPARISON_ROWS,
      ansiReasons: ANSI_REASONS,
      situationChips: SITUATION_CHIPS,
      priorityChips: PRIORITY_CHIPS,
      relatedInsurance: RELATED_INSURANCE,
      conversationalReply: {
        intro: buildInsuranceIntro(context),
      },
      sections: [
        {
          id: "insurance-core",
          title: "Top Affordable Auto Insurance Providers",
          description:
            "Top picks based on affordability, coverage value & customer trust.",
          products: providers,
          helperLabel: "Recommended by ANSI",
        },
      ],
    };
  },
};

export function getSearchExperienceContent(query = "", resolvedQuery = null) {
  return insuranceData.getSearchExperienceContent(query, resolvedQuery);
}

export default insuranceData;
