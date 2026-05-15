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

console.table(results);
console.log("Low-confidence fallback:", {
  query: "qzxtr maybe",
  category: lowConfidenceCategory,
  confidence: lowConfidenceCase.confidence,
  margin: lowConfidenceCase.margin,
});
console.log("Routing tests passed.");
