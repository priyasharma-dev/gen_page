import { getHeroSuggestions, getSearchExperienceContent } from "@/lib/data/mockContent";

export function getSkincareHeroSuggestions() {
  return getHeroSuggestions("skincare");
}

export function getSkincareSearchExperienceContent() {
  return getSearchExperienceContent("skincare");
}

const skincareData = {
  getHeroSuggestions: getSkincareHeroSuggestions,
  getSearchExperienceContent: getSkincareSearchExperienceContent,
};

export default skincareData;
