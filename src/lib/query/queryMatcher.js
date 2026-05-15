const CATEGORY_DICTIONARY = {
  food: [
    {
      canonical: "burger",
      aliases: [
        "burger",
        "burgers",
        "hamburger",
        "hamburgers",
        "buger",
        "bburger",
        "burgr",
      ],
      weight: 1,
    },
    {
      canonical: "pizza",
      aliases: ["pizza", "pizzas", "piza", "pizzza", "pizzeria"],
      weight: 1,
    },
    {
      canonical: "sandwich",
      aliases: [
        "sandwich",
        "sandwiches",
        "sandwhich",
        "sandwhiches",
        "sub",
        "subs",
      ],
      weight: 0.96,
    },
    {
      canonical: "restaurant",
      aliases: [
        "restaurant",
        "restaurants",
        "food",
        "cafe",
        "cafes",
        "dinner",
        "lunch",
        "breakfast",
        "eatery",
        "near me",
      ],
      weight: 0.82,
    },
    {
      canonical: "pasta",
      aliases: ["pasta", "noodles", "spaghetti"],
      weight: 0.9,
    },
  ],
  fashion: [
    {
      canonical: "fashion",
      aliases: [
        "fashion",
        "style",
        "clothing",
        "clothes",
        "apparel",
        "wardrobe",
      ],
      weight: 0.98,
    },
    {
      canonical: "western dress",
      aliases: [
        "western dress",
        "western dresses",
        "western wear",
        "dress",
        "dresses",
        "gown",
        "gowns",
        "outfit",
        "outfits",
      ],
      weight: 1,
    },
    {
      canonical: "shirt",
      aliases: ["shirt", "shirts", "top", "tops", "blouse", "blouses"],
      weight: 0.88,
    },
    {
      canonical: "jeans",
      aliases: ["jeans", "denim", "pants", "trousers"],
      weight: 0.88,
    },
    {
      canonical: "shoes",
      aliases: ["shoes", "shoe", "heels", "heels", "sandals", "sneakers"],
      weight: 0.86,
    },
  ],
  electronics: [
    {
      canonical: "electronics",
      aliases: [
        "electronics",
        "electronic",
        "gadgets",
        "gadget",
        "tech",
        "technology",
      ],
      weight: 0.98,
    },
    {
      canonical: "phone",
      aliases: ["phone", "mobile", "smartphone", "iphone", "android"],
      weight: 0.95,
    },
    {
      canonical: "laptop",
      aliases: ["laptop", "notebook", "macbook", "computer"],
      weight: 0.95,
    },
    {
      canonical: "tablet",
      aliases: ["tablet", "ipad"],
      weight: 0.9,
    },
    {
      canonical: "camera",
      aliases: ["camera", "dslr", "mirrorless"],
      weight: 0.9,
    },
  ],
  skincare: [
    {
      canonical: "skincare",
      aliases: [
        "skincare",
        "skin care",
        "skin-care",
        "skin routine",
        "routine",
      ],
      weight: 0.98,
    },
    {
      canonical: "moisturizer",
      aliases: [
        "moisturizer",
        "moisturizers",
        "moisturiser",
        "moisturiser",
        "cream",
        "hydrating cream",
      ],
      weight: 1,
    },
    {
      canonical: "cleanser",
      aliases: ["cleanser", "face wash", "facewash", "wash"],
      weight: 0.95,
    },
    {
      canonical: "serum",
      aliases: ["serum", "vitamin c", "niacinamide", "retinol", "essence"],
      weight: 0.95,
    },
    {
      canonical: "sunscreen",
      aliases: ["sunscreen", "sun screen", "spf", "sunblock"],
      weight: 0.97,
    },
  ],
  news: [
    {
      canonical: "news",
      aliases: ["news", "headline", "headlines", "report", "reports", "update", "updates"],
      weight: 0.92,
    },
    {
      canonical: "breaking news",
      aliases: ["breaking", "latest", "current events"],
      weight: 0.82,
    },
  ],
};

const CATEGORY_ORDER = ["food", "fashion", "electronics", "skincare", "news"];

const TOKEN_STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "for",
  "to",
  "of",
  "in",
  "on",
  "with",
  "under",
  "near",
  "me",
  "my",
]);

export function getCategoryDictionary() {
  return CATEGORY_DICTIONARY;
}

export function normalizeToken(token) {
  return String(token || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

export function normalizePhrase(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function singularize(token) {
  if (token.endsWith("ies") && token.length > 4) {
    return `${token.slice(0, -3)}y`;
  }

  if (token.endsWith("es") && token.length > 4) {
    return token.slice(0, -2);
  }

  if (token.endsWith("s") && token.length > 3) {
    return token.slice(0, -1);
  }

  return token;
}

function collapseRepeatedLetters(token) {
  return token.replace(/(.)\1+/g, "$1");
}

function phoneticKey(token) {
  const normalized = normalizeToken(token);

  if (!normalized) {
    return "";
  }

  const first = normalized[0];
  const tail = normalized
    .slice(1)
    .replace(/[aeiou]/g, "")
    .replace(/(.)\1+/g, "$1");

  return `${first}${tail}`;
}

export function createTokenVariants(token) {
  const normalized = normalizeToken(token);

  if (!normalized) {
    return [];
  }

  const variants = new Set([
    normalized,
    singularize(normalized),
    collapseRepeatedLetters(normalized),
    singularize(collapseRepeatedLetters(normalized)),
  ]);

  return [...variants].filter(Boolean);
}

export function levenshteinDistance(a, b) {
  const source = normalizeToken(a);
  const target = normalizeToken(b);

  if (source === target) {
    return 0;
  }

  if (!source.length) {
    return target.length;
  }

  if (!target.length) {
    return source.length;
  }

  const matrix = Array.from({ length: source.length + 1 }, () =>
    new Array(target.length + 1).fill(0)
  );

  for (let i = 0; i <= source.length; i += 1) {
    matrix[i][0] = i;
  }

  for (let j = 0; j <= target.length; j += 1) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= source.length; i += 1) {
    for (let j = 1; j <= target.length; j += 1) {
      const cost = source[i - 1] === target[j - 1] ? 0 : 1;

      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[source.length][target.length];
}

function similarityScore(a, b) {
  const source = normalizeToken(a);
  const target = normalizeToken(b);

  if (!source || !target) {
    return 0;
  }

  if (source === target) {
    return 1;
  }

  if (source.includes(target) || target.includes(source)) {
    return 0.92;
  }

  const distance = levenshteinDistance(source, target);
  const maxLength = Math.max(source.length, target.length);
  const editSimilarity = maxLength ? 1 - distance / maxLength : 0;

  if (phoneticKey(source) === phoneticKey(target)) {
    return Math.max(editSimilarity, 0.84);
  }

  return editSimilarity;
}

function phraseSimilarity(normalizedQuery, alias) {
  const normalizedAlias = normalizePhrase(alias);

  if (!normalizedAlias) {
    return 0;
  }

  if (normalizedQuery === normalizedAlias) {
    return 1;
  }

  if (normalizedQuery.includes(normalizedAlias)) {
    return 0.97;
  }

  return 0;
}

function tokenSimilarity(tokens, alias) {
  const aliasTokens = normalizePhrase(alias).split(" ").filter(Boolean);

  if (!aliasTokens.length) {
    return 0;
  }

  if (aliasTokens.length > 1) {
    return 0;
  }

  let best = 0;

  for (const token of tokens) {
    if (TOKEN_STOP_WORDS.has(token)) {
      continue;
    }

    for (const variant of createTokenVariants(token)) {
      best = Math.max(best, similarityScore(variant, aliasTokens[0]));
    }
  }

  return best;
}

function semanticCategoryBonus(tokens, category) {
  const tokenSet = new Set(tokens);

  if (category === "food") {
    let bonus = 0;

    if (tokenSet.has("near") || tokenSet.has("nearme")) {
      bonus += 0.05;
    }

    if (tokenSet.has("restaurant") || tokenSet.has("restaurants")) {
      bonus += 0.08;
    }

    return bonus;
  }

  if (category === "fashion") {
    return tokenSet.has("western") ? 0.06 : 0;
  }

  if (category === "skincare") {
    let bonus = 0;

    if (tokenSet.has("skin")) {
      bonus += 0.06;
    }

    if (tokenSet.has("routine") || tokenSet.has("glow")) {
      bonus += 0.05;
    }

    return bonus;
  }

  return 0;
}

export function scoreCategorySignals(queryData) {
  const normalizedQuery = normalizePhrase(queryData?.normalized || queryData?.raw || "");
  const normalizedTokens = (queryData?.tokens || [])
    .flatMap((token) => createTokenVariants(token))
    .filter(Boolean);
  const originalTokens = (queryData?.tokens || []).map((token) => normalizeToken(token)).filter(Boolean);

  const categories = CATEGORY_ORDER.map((category) => {
    const concepts = CATEGORY_DICTIONARY[category];
    const conceptMatches = concepts
      .map((concept) => {
        let bestScore = 0;
        let bestAlias = null;

        for (const alias of concept.aliases) {
          const phraseScore = phraseSimilarity(normalizedQuery, alias);
          const fuzzyTokenScore = tokenSimilarity(normalizedTokens, alias);
          const score = Math.max(phraseScore, fuzzyTokenScore) * concept.weight;

          if (score > bestScore) {
            bestScore = score;
            bestAlias = alias;
          }
        }

        return {
          canonical: concept.canonical,
          match: bestAlias,
          score: Number(bestScore.toFixed(4)),
        };
      })
      .filter((concept) => concept.score >= 0.52)
      .sort((left, right) => right.score - left.score);

    const topScores = conceptMatches.slice(0, 2).map((concept) => concept.score);
    const baseScore = topScores.reduce((sum, score) => sum + score, 0);
    const bonus = semanticCategoryBonus(originalTokens, category);
    const totalScore = Number(Math.min(1, baseScore + bonus).toFixed(4));

    return {
      category,
      score: totalScore,
      concepts: conceptMatches,
    };
  }).sort((left, right) => right.score - left.score);

  return {
    normalizedTokens: originalTokens,
    rankings: categories,
    best: categories[0] || { category: "generic", score: 0, concepts: [] },
    runnerUp: categories[1] || { category: "generic", score: 0, concepts: [] },
  };
}
