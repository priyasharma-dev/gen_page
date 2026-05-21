import ExpandedProductExplorer from "@/app/core/search/ExpandedProductExplorer";

import InsuranceDetailsPanel from "./components/InsuranceDetailsPanel";
import InsuranceProviderCard from "./components/InsuranceProviderCard";
import InsuranceResponseBlock from "./components/InsuranceResponseBlock";
import InsuranceResultsSection from "./components/InsuranceResultsSection";
import InsuranceSupplementalContent from "./components/InsuranceSupplementalContent";
import InsuranceVariationRouter from "./components/InsuranceVariationRouter";
import insuranceConfig from "./config/insuranceConfig";
import insuranceData from "./data/insuranceData";
import useInsuranceSearch from "./hooks/useInsuranceSearch";
import InsuranceLayout from "./layouts/InsuranceLayout";

const insuranceModule = {
  id: "insurance",
  label: "Insurance",
  ProductCard: InsuranceProviderCard,
  Explorer: ExpandedProductExplorer,
  RightSidebar: InsuranceDetailsPanel,
  ResponseComponent: InsuranceResponseBlock,
  ContentComponent: InsuranceVariationRouter,
  Filters: null,
  Layout: InsuranceLayout,
  RecommendationSection: InsuranceResultsSection,
  Insights: null,
  PostSections: InsuranceSupplementalContent,
  config: insuranceConfig,
  data: insuranceData,
  useCategorySearch: useInsuranceSearch,
  getHeroSuggestions: insuranceData.getHeroSuggestions,
  getSearchExperienceContent: insuranceData.getSearchExperienceContent,
};

export default insuranceModule;
