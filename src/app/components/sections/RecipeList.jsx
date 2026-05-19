"use client";

import FoodCard from "@/app/modules/food/components/FoodCard";
import { recipeItems } from "@/lib/data/mockContent";

export default function RecipeList() {
  return (
    <section className="w-full min-w-0 space-y-5 overflow-hidden">
      <div className="flex min-w-0 items-center justify-center text-center">
        <div className="min-w-0">
          <h2 className="break-words text-xl font-semibold text-gray-800 sm:text-2xl">
            Popular Foods
          </h2>

          <p className="mt-1 break-words text-sm text-gray-500">
            Curated local dishes, cafe favorites, and shareable picks for every
            mood.
          </p>
        </div>
      </div>

      <div className="grid w-full min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {recipeItems.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
