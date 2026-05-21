import {
  createTokenVariants,
  scoreCategorySignals,
} from "./queryMatcher.js";

/**
 * ENTITY EXTRACTOR
 * Converts query tokens into structured entities with typo-tolerant matching.
 */

export function entityExtractor(queryData) {
  const { keywords = [], numericValues = [] } = queryData || {};

  const brands = [
    "nike",
    "adidas",
    "puma",
    "apple",
    "samsung",
    "zara",
    "myntra",
    "cerave",
    "cetaphil",
    "minimalist",
    "theordinary",
    "ordinary",
    "neutrogena",
    "h&m",
    "hm",
    "mango",
  ];

  let brand = null;
  let productType = null;
  let matchedCategory = null;
  let productConfidence = 0;
  let priceLimit = null;
  let location = null;
  let audience = null;

  const normalizedKeywordVariants = keywords.flatMap((keyword) =>
    createTokenVariants(keyword)
  );
  const normalizedQuery = String(queryData?.normalized || "").toLowerCase();

  const locationMatchers = [
    { match: /\bunited states\b|\busa\b|\bus\b/, value: "USA" },
    { match: /\bindia\b/, value: "India" },
    { match: /\bcanada\b/, value: "Canada" },
    { match: /\buk\b|\bunited kingdom\b/, value: "United Kingdom" },
  ];

  for (const word of normalizedKeywordVariants) {
    if (brands.includes(word)) {
      if (word === "hm") {
        brand = "h&m";
      } else if (word === "ordinary" || word === "theordinary") {
        brand = "the ordinary";
      } else {
        brand = word;
      }
      break;
    }
  }

  const categorySignals = scoreCategorySignals(queryData);
  const bestCategory = categorySignals.best;
  const bestConcept = bestCategory?.concepts?.[0];

  if (bestConcept) {
    productType = bestConcept.canonical;
    matchedCategory = bestCategory.category;
    productConfidence = bestConcept.score;
  }

  for (const candidate of locationMatchers) {
    if (candidate.match.test(normalizedQuery)) {
      location = candidate.value;
      break;
    }
  }

  if (/\bnew driver\b|\bnew drivers\b/.test(normalizedQuery)) {
    audience = "new drivers";
  }

  if (
    matchedCategory === "insurance" &&
    (!productType || productType === "insurance") &&
    /\bauto\b|\bcar\b|\bvehicle\b|\bdriver\b|\bdrivers\b/.test(normalizedQuery)
  ) {
    productType = "auto insurance";
  }

  if (
    matchedCategory === "movie" &&
    (!productType || productType === "movie") &&
    /\bthriller\b|\bpsychological\b|\bsuspense\b|\bcrime\b/.test(normalizedQuery)
  ) {
    productType = "thriller movies";
  }

  if (numericValues.length > 0) {
    priceLimit = Number(numericValues[0]);
  }

  return {
    brand,
    productType,
    matchedCategory,
    productConfidence,
    priceLimit,
    location,
    audience,
    categorySignals,
  };
}
