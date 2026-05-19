import { getHeroSuggestions, getSearchExperienceContent } from "@/lib/data/mockContent";

export function getNewsHeroSuggestions() {
  return getHeroSuggestions("generic");
}

export function getNewsSearchExperienceContent() {
  return getSearchExperienceContent("generic");
}

const newsData = {
  getHeroSuggestions: getNewsHeroSuggestions,
  getSearchExperienceContent: getNewsSearchExperienceContent,
};

export default newsData;
