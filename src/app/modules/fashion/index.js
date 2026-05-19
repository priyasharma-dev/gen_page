import FashionExplorer from "./components/FashionExplorer";
import FashionInsights from "./components/FashionInsights";
import FashionProductCard from "./components/FashionProductCard";
import FashionSection from "./components/FashionSection";
import FashionSupplementalContent from "./components/FashionSupplementalContent";
import fashionConfig from "./config/fashionConfig";
import fashionData from "./data/fashionData";
import useFashionSearch from "./hooks/useFashionSearch";
import FashionLayout from "./layouts/FashionLayout";

const fashionModule = {
  id: "fashion",
  label: "Fashion",
  ProductCard: FashionProductCard,
  Explorer: FashionExplorer,
  Filters: null,
  Layout: FashionLayout,
  RecommendationSection: FashionSection,
  Insights: FashionInsights,
  PostSections: FashionSupplementalContent,
  config: fashionConfig,
  data: fashionData,
  useCategorySearch: useFashionSearch,
  getHeroSuggestions: fashionData.getHeroSuggestions,
  getSearchExperienceContent: fashionData.getSearchExperienceContent,
};

export default fashionModule;
