import DynamicResultCard from "@/app/core/engine/DynamicResultCard";
import ExpandedProductExplorer from "@/app/core/search/ExpandedProductExplorer";

import skincareConfig from "./config/skincareConfig";
import skincareData from "./data/skincareData";
import useSkincareSearch from "./hooks/useSkincareSearch";
import SkincareLayout from "./layouts/SkincareLayout";

const skincareModule = {
  id: "skincare",
  label: "Skincare",
  ProductCard: DynamicResultCard,
  Explorer: ExpandedProductExplorer,
  Filters: null,
  Layout: SkincareLayout,
  RecommendationSection: null,
  Insights: null,
  PostSections: null,
  config: skincareConfig,
  data: skincareData,
  useCategorySearch: useSkincareSearch,
  getHeroSuggestions: skincareData.getHeroSuggestions,
  getSearchExperienceContent: skincareData.getSearchExperienceContent,
};

export default skincareModule;
