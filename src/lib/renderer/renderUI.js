"use client";

import Hero from "@/app/components/sections/Hero";
import Filters from "@/app/components/sections/Filters";
import ProductGrid from "@/app/components/sections/ProductGrid";
import Trending from "@/app/components/sections/Trending";
import Specs from "@/app/components/sections/Specs";
import ComparisonTable from "@/app/components/sections/ComparisonTable";
import RecipeList from "@/app/components/sections/RecipeList";
import BreakingNews from "@/app/components/sections/BreakingNews";
import NewsFeed from "@/app/components/sections/NewsFeed";

export function renderUI(schema, options = {}) {
  if (!schema || !schema.components) {
    return null;
  }

  return (
    <div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center gap-8 overflow-hidden">
      {schema.components.map((block, index) => {
        if (options.omitHero && block.type === "hero") {
          return null;
        }

        switch (block.type) {
          case "hero":
            return <Hero key={index} />;

          case "filters":
            return <Filters key={index} />;

          case "productGrid":
            return <ProductGrid key={index} data={block.data} />;

          case "trending":
            return <Trending key={index} />;

          case "specs":
            return <Specs key={index} />;

          case "comparisonTable":
            return <ComparisonTable key={index} />;

          case "recipeList":
            return <RecipeList key={index} />;

          case "breakingNews":
            return <BreakingNews key={index} />;

          case "newsFeed":
            return <NewsFeed key={index} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
