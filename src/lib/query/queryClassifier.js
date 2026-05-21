import { scoreCategorySignals } from "./queryMatcher.js";

const INTENT_KEYWORDS = {
  buy: ["buy", "price", "cost", "cheap", "discount", "shop", "purchase"],
  discover: ["best", "top", "trending", "latest", "popular", "new"],
  compare: ["compare", "vs", "difference", "better", "review"],
  learn: ["how", "guide", "tutorial", "recipe", "tips"],
  local: ["near", "nearby", "nearme"],
};

function scoreIntent(queryData) {
  const allWords = [...(queryData?.tokens || []), ...(queryData?.modifiers || [])];
  const wordSet = new Set(allWords);

  let bestIntent = "search";
  let bestScore = 0;

  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS)) {
    const matches = keywords.filter((keyword) => wordSet.has(keyword));
    const score = matches.length / keywords.length;

    if (score > bestScore) {
      bestIntent = intent;
      bestScore = score;
    }
  }

  return {
    type: bestIntent,
    confidence: Number(Math.min(1, 0.35 + bestScore).toFixed(4)),
  };
}

function scoreInsuranceIntent(queryData, categorySignals, baseIntent) {
  const bestCategory = categorySignals?.best?.category;

  if (bestCategory !== "insurance") {
    return baseIntent;
  }

  const normalized = String(queryData?.normalized || "").toLowerCase();
  const tokenSet = new Set([
    ...(queryData?.tokens || []),
    ...(queryData?.modifiers || []),
  ]);

  const compareSignals = [
    "compare",
    "quotes",
    "quote",
    "provider",
    "providers",
    "company",
    "companies",
    "best",
    "cheap",
    "affordable",
  ];

  const compareMatches = compareSignals.filter((signal) =>
    tokenSet.has(signal) || normalized.includes(signal)
  );

  if (compareMatches.length >= 2) {
    return {
      type: "compare",
      confidence: 0.88,
    };
  }

  if (compareMatches.length === 1) {
    return {
      type: "compare",
      confidence: 0.78,
    };
  }

  return {
    type: "search",
    confidence: Math.max(baseIntent.confidence, 0.62),
  };
}

export function classifyQuery(queryData) {
  const categorySignals = scoreCategorySignals(queryData);
  const intent = scoreInsuranceIntent(
    queryData,
    categorySignals,
    scoreIntent(queryData)
  );
  const best = categorySignals.best;
  const runnerUp = categorySignals.runnerUp;
  const confidence = best.score;
  const margin = Number((best.score - runnerUp.score).toFixed(4));

  const shouldClarify =
    confidence < 0.72 || (confidence < 0.84 && margin < 0.12);

  const resolvedCategory = shouldClarify ? "clarification" : best.category;

  return {
    intent,
    category: resolvedCategory,
    confidence: Number(confidence.toFixed(4)),
    margin,
    shouldClarify,
    categorySignals,
  };
}
