import { getHeroSuggestions, getSearchExperienceContent } from "@/lib/data/mockContent";

export function getElectronicsHeroSuggestions() {
  return getHeroSuggestions("electronics");
}

export function getElectronicsSearchExperienceContent() {
  return getSearchExperienceContent("electronics");
}

const electronicsData = {
  getHeroSuggestions: getElectronicsHeroSuggestions,
  getSearchExperienceContent: getElectronicsSearchExperienceContent,
};

export default electronicsData;
