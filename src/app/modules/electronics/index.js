import DynamicResultCard from "@/app/core/engine/DynamicResultCard";
import ExpandedProductExplorer from "@/app/core/search/ExpandedProductExplorer";

import electronicsConfig from "./config/electronicsConfig";
import electronicsData from "./data/electronicsData";
import useElectronicsSearch from "./hooks/useElectronicsSearch";
import ElectronicsLayout from "./layouts/ElectronicsLayout";

const electronicsModule = {
  id: "electronics",
  label: "Electronics",
  ProductCard: DynamicResultCard,
  Explorer: ExpandedProductExplorer,
  Filters: null,
  Layout: ElectronicsLayout,
  RecommendationSection: null,
  Insights: null,
  PostSections: null,
  config: electronicsConfig,
  data: electronicsData,
  useCategorySearch: useElectronicsSearch,
  getHeroSuggestions: electronicsData.getHeroSuggestions,
  getSearchExperienceContent: electronicsData.getSearchExperienceContent,
};

export default electronicsModule;
