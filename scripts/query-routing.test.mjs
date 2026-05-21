import assert from "node:assert/strict";

import { querySelector } from "../src/lib/query/querySelector.js";
import { entityExtractor } from "../src/lib/query/entityExtractor.js";
import { intentEngine } from "../src/lib/query/intentEngine.js";
import { categoryResolver } from "../src/lib/query/categoryResolver.js";
import { classifyQuery } from "../src/lib/query/queryClassifier.js";

const cases = [
  { query: "bburger", expectedCategory: "food" },
  { query: "buger", expectedCategory: "food" },
  { query: "burger near me", expectedCategory: "food" },
  { query: "piza", expectedCategory: "food" },
  { query: "best moisturizer for dry skin", expectedCategory: "skincare" },
  { query: "cerave cleanser", expectedCategory: "skincare" },
  { query: "electronics", expectedCategory: "electronics" },
  { query: "fashion", expectedCategory: "fashion" },
  { query: "western dress", expectedCategory: "fashion" },
  { query: "black western dress", expectedCategory: "fashion" },
  { query: "best cheap auto insurance in USA", expectedCategory: "insurance" },
  { query: "car insurance quotes", expectedCategory: "insurance" },
  { query: "affordable vehicle insurance", expectedCategory: "insurance" },
  { query: "best insurance for new drivers", expectedCategory: "insurance" },
  { query: "compare auto insurance companies", expectedCategory: "insurance" },
  { query: "best thriller movies to watch tonight", expectedCategory: "movie" },
  { query: "psychological thriller movies", expectedCategory: "movie" },
];

const results = cases.map(({ query, expectedCategory }) => {
  const queryData = querySelector(query);
  const entities = entityExtractor(queryData);
  const intent = intentEngine(queryData);
  const resolvedCategory = categoryResolver(entities, intent, queryData);
  const classification = classifyQuery(queryData);

  assert.equal(
    resolvedCategory,
    expectedCategory,
    `Expected "${query}" to resolve to "${expectedCategory}" but got "${resolvedCategory}".`
  );

  assert.ok(
    classification.confidence >= 0.72,
    `Expected "${query}" to resolve with strong confidence, got ${classification.confidence}.`
  );

  return {
    query,
    category: resolvedCategory,
    confidence: classification.confidence,
    margin: classification.margin,
  };
});

const lowConfidenceQuery = querySelector("qzxtr maybe");
const lowConfidenceEntities = entityExtractor(lowConfidenceQuery);
const lowConfidenceIntent = intentEngine(lowConfidenceQuery);
const lowConfidenceCategory = categoryResolver(
  lowConfidenceEntities,
  lowConfidenceIntent,
  lowConfidenceQuery
);
const lowConfidenceCase = classifyQuery(lowConfidenceQuery);

assert.equal(
  lowConfidenceCategory,
  "clarification",
  `Expected low-confidence query to route to clarification, got "${lowConfidenceCategory}".`
);

const insuranceQueryData = querySelector("best cheap auto insurance in USA");
const insuranceEntities = entityExtractor(insuranceQueryData);
const insuranceIntent = intentEngine(insuranceQueryData);

assert.equal(
  insuranceEntities.matchedCategory,
  "insurance",
  `Expected insurance entity extraction to match insurance, got "${insuranceEntities.matchedCategory}".`
);

assert.equal(
  insuranceEntities.productType,
  "auto insurance",
  `Expected insurance product type to resolve to auto insurance, got "${insuranceEntities.productType}".`
);

assert.equal(
  insuranceEntities.location,
  "USA",
  `Expected location extraction to resolve to USA, got "${insuranceEntities.location}".`
);

assert.equal(
  insuranceIntent.type,
  "compare",
  `Expected insurance intent to resolve to compare, got "${insuranceIntent.type}".`
);

const movieQueryData = querySelector("best thriller movies to watch tonight");
const movieEntities = entityExtractor(movieQueryData);
const movieCategory = categoryResolver(movieEntities, intentEngine(movieQueryData), movieQueryData);

assert.equal(
  movieCategory,
  "movie",
  `Expected movie query to resolve to movie, got "${movieCategory}".`
);

assert.equal(
  movieEntities.productType,
  "thriller movies",
  `Expected movie product type to resolve to thriller movies, got "${movieEntities.productType}".`
);

console.table(results);
console.log("Low-confidence fallback:", {
  query: "qzxtr maybe",
  category: lowConfidenceCategory,
  confidence: lowConfidenceCase.confidence,
  margin: lowConfidenceCase.margin,
});
console.log("Routing tests passed.");
