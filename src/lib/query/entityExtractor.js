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
    "h&m",
    "hm",
    "mango",
  ];

  let brand = null;
  let productType = null;
  let matchedCategory = null;
  let productConfidence = 0;
  let priceLimit = null;

  const normalizedKeywordVariants = keywords.flatMap((keyword) =>
    createTokenVariants(keyword)
  );

  for (const word of normalizedKeywordVariants) {
    if (brands.includes(word)) {
      brand = word === "hm" ? "h&m" : word;
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

  if (numericValues.length > 0) {
    priceLimit = Number(numericValues[0]);
  }

  return {
    brand,
    productType,
    matchedCategory,
    productConfidence,
    priceLimit,
    categorySignals,
  };
}
