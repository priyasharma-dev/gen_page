import { getHeroSuggestions, getSearchExperienceContent } from "@/lib/data/mockContent";

export function getFashionHeroSuggestions() {
  return getHeroSuggestions("fashion");
}

export function getFashionSearchExperienceContent() {
  return getSearchExperienceContent("fashion");
}

const fashionData = {
  getHeroSuggestions: getFashionHeroSuggestions,
  getSearchExperienceContent: getFashionSearchExperienceContent,
};

export default fashionData;
