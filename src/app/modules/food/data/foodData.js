import { getHeroSuggestions, getSearchExperienceContent } from "@/lib/data/mockContent";

export function getFoodHeroSuggestions() {
  return getHeroSuggestions("food");
}

export function getFoodSearchExperienceContent() {
  return getSearchExperienceContent("food");
}

const foodData = {
  getHeroSuggestions: getFoodHeroSuggestions,
  getSearchExperienceContent: getFoodSearchExperienceContent,
};

export default foodData;
