import { querySelector } from "./querySelector.js";
import { entityExtractor } from "./entityExtractor.js";
import { intentEngine } from "./intentEngine.js";
import { categoryResolver } from "./categoryResolver.js";
import { classifyQuery } from "./queryClassifier.js";
import { schemaRegistry } from "@/lib/schema/registry";

/**
 *  MASTER QUERY RESOLVER
 * Orchestrates full query pipeline
 */

export function resolveQuery(query) {
  /**
   * STEP 1 — Parse query
   */
  const queryData = querySelector(query);

  /**
   * STEP 2 — Extract entities
   */
  const entities = entityExtractor(queryData);

  /**
   * STEP 3 — Detect intent
   */
  const intent = intentEngine(queryData);
  const classification = classifyQuery(queryData);

  /** * STEP 4 — Resolve category  */
  const category = categoryResolver(entities, intent, queryData);

  /**
   * FINAL OUTPUT
   */
  return {
    raw: query,
    queryData,
    entities,
    intent,
    category,
    shouldClarify: category === "clarification",
    categorySignals: classification.categorySignals.rankings,
    routingMargin: classification.margin,
    layout:
      schemaRegistry[category]?.layout ||
      schemaRegistry.generic.layout,
    confidence: classification.confidence,
  };
}
