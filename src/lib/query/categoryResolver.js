import { classifyQuery } from "./queryClassifier.js";

export function categoryResolver(entities, intent, queryData) {
  const classification = classifyQuery(queryData);
  const { matchedCategory, productConfidence } = entities || {};
  const intentType = typeof intent === "string" ? intent : intent?.type;

  if (classification.category !== "clarification") {
    return classification.category;
  }

  if (matchedCategory && productConfidence >= 0.84) {
    return matchedCategory;
  }

  if (intentType === "discover") {
    return "news";
  }

  if (intentType === "compare") {
    return "electronics";
  }

  return "clarification";
}
