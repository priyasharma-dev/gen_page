/**
 *  QUERY SELECTOR
 * Converts raw query → structured token object
 */

export function querySelector(query) {
  // STEP 1: normalize query
  const normalized = normalize(query);

  // STEP 2: tokenize
  const tokens = normalized.split(" ").filter(Boolean);

  // STEP 3: classify tokens
  const modifiers = [];
  const numericValues = [];
  const keywords = [];

  const modifierWords = [
    "best",
    "top",
    "cheap",
    "under",
    "latest",
    "new",
    "buy",
    "compare",
  ];

  tokens.forEach((token) => {
    // numbers
    if (!isNaN(token)) {
      numericValues.push(token);
      return;
    }

    // modifiers
    if (modifierWords.includes(token)) {
      modifiers.push(token);
      return;
    }

    // remaining meaningful keywords
    keywords.push(token);
  });

  return {
    raw: query,
    normalized,
    tokens,
    keywords,
    modifiers,
    numericValues,
  };
}

/**
 *  Normalize query
 */
function normalize(query) {
  return query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}