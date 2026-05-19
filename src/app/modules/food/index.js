import DynamicResultCard from "@/app/core/engine/DynamicResultCard";
import ExpandedProductExplorer from "@/app/core/search/ExpandedProductExplorer";

import foodConfig from "./config/foodConfig";
import foodData from "./data/foodData";
import useFoodSearch from "./hooks/useFoodSearch";
import FoodLayout from "./layouts/FoodLayout";

const foodModule = {
  id: "food",
  label: "Food",
  ProductCard: DynamicResultCard,
  Explorer: ExpandedProductExplorer,
  Filters: null,
  Layout: FoodLayout,
  RecommendationSection: null,
  Insights: null,
  PostSections: null,
  config: foodConfig,
  data: foodData,
  useCategorySearch: useFoodSearch,
  getHeroSuggestions: foodData.getHeroSuggestions,
  getSearchExperienceContent: foodData.getSearchExperienceContent,
};

export default foodModule;
