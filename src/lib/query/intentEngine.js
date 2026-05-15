import { classifyQuery } from "./queryClassifier.js";

/**
 * INTENT ENGINE
 * Detects user intention from query modifiers/tokens.
 */

export function intentEngine(queryData) {
  return classifyQuery(queryData).intent;
}
