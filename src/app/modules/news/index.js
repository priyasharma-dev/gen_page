import DynamicResultCard from "@/app/core/engine/DynamicResultCard";
import ExpandedProductExplorer from "@/app/core/search/ExpandedProductExplorer";

import newsConfig from "./config/newsConfig";
import newsData from "./data/newsData";
import useNewsSearch from "./hooks/useNewsSearch";
import NewsLayout from "./layouts/NewsLayout";

const newsModule = {
  id: "news",
  label: "News",
  ProductCard: DynamicResultCard,
  Explorer: ExpandedProductExplorer,
  Filters: null,
  Layout: NewsLayout,
  RecommendationSection: null,
  Insights: null,
  PostSections: null,
  config: newsConfig,
  data: newsData,
  useCategorySearch: useNewsSearch,
  getHeroSuggestions: newsData.getHeroSuggestions,
  getSearchExperienceContent: newsData.getSearchExperienceContent,
};

export default newsModule;
