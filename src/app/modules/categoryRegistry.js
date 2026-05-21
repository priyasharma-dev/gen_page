import DefaultLayout from "@/app/core/layout/DefaultLayout";
import DynamicResultCard from "@/app/core/engine/DynamicResultCard";
import ExpandedProductExplorer from "@/app/core/search/ExpandedProductExplorer";
import { getHeroSuggestions, getSearchExperienceContent } from "@/lib/data/mockContent";

import electronics from "./electronics";
import fashion from "./fashion";
import food from "./food";
import insurance from "./insurance";
import movie from "./movie";
import news from "./news";
import skincare from "./skincare";

const genericModule = {
  id: "generic",
  label: "Generic",
  ProductCard: DynamicResultCard,
  Explorer: ExpandedProductExplorer,
  Filters: null,
  Layout: DefaultLayout,
  RecommendationSection: null,
  Insights: null,
  PostSections: null,
  config: {
    stream: {},
    row: {},
  },
  data: {
    getHeroSuggestions: () => getHeroSuggestions("generic"),
    getSearchExperienceContent: () => getSearchExperienceContent("generic"),
  },
  getHeroSuggestions: () => getHeroSuggestions("generic"),
  getSearchExperienceContent: () => getSearchExperienceContent("generic"),
};

// Core search orchestration should only consume modules through this registry.
// Category teams should stay inside their module folders to avoid cross-category breakage.
export const CATEGORY_REGISTRY = {
  generic: genericModule,
  fashion,
  food,
  electronics,
  insurance,
  movie,
  skincare,
  news,
};

export function getCategoryModule(category = "generic") {
  return CATEGORY_REGISTRY[category] || CATEGORY_REGISTRY.generic;
}
