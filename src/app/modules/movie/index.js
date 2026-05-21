import ExpandedProductExplorer from "@/app/core/search/ExpandedProductExplorer";

import movieConfig from "./config/movieConfig";
import MovieResponseBlock from "./components/MovieResponseBlock";
import MovieResultsView from "./components/MovieResultsView";
import MovieRightSidebar from "./components/MovieRightSidebar";
import movieData from "./data/movieData";
import MovieLayout from "./layouts/MovieLayout";

const movieModule = {
  id: "movie",
  label: "Movie",
  ProductCard: null,
  Explorer: ExpandedProductExplorer,
  RightSidebar: MovieRightSidebar,
  ResponseComponent: MovieResponseBlock,
  ContentComponent: MovieResultsView,
  Filters: null,
  Layout: MovieLayout,
  RecommendationSection: null,
  Insights: null,
  PostSections: null,
  config: movieConfig,
  data: movieData,
  getHeroSuggestions: movieData.getHeroSuggestions,
  getSearchExperienceContent: movieData.getSearchExperienceContent,
};

export default movieModule;
