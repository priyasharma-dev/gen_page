"use client";

import DynamicResultCard from "@/app/core/engine/DynamicResultCard";
import { useCategoryModule } from "@/app/shared/hooks/useCategoryModule";

export default function ScrollableRecommendationRow({
  category = "generic",
  title,
  description,
  products = [],
  onSelectCard,
}) {
  // Category-specific presentation belongs to the module registry, not the core row renderer.
  const categoryModule = useCategoryModule(category);
  const RecommendationSection = categoryModule.RecommendationSection;
  const ProductCard = categoryModule.ProductCard || DynamicResultCard;
  const rowConfig = categoryModule.config?.row || {};

  if (RecommendationSection) {
    return (
      <RecommendationSection
        title={title}
        description={description}
        products={products}
        onSelectCard={onSelectCard}
      />
    );
  }

  return (
    <section className="w-full min-w-0 space-y-5">
      <div className="mb-5 min-w-0">
        <h3
          className={`break-words font-semibold tracking-tight ${
            rowConfig.titleClass || "text-[22px] font-semibold tracking-[-0.03em] text-[#111827]"
          }`}
        >
          {title}
        </h3>
        {rowConfig.accentClass ? (
          <div className={rowConfig.accentClass} />
        ) : null}
      </div>

      <div className="w-full overflow-x-auto pb-3 scrollbar-none">
        <div className={`flex w-max min-w-full snap-x snap-mandatory pr-1 ${rowConfig.trackClass || "gap-5"}`}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`snap-start ${rowConfig.cardWrapClass || "w-[280px] md:w-[290px]"}`}
            >
              <ProductCard
                category={category}
                product={product}
                index={index}
                onSelect={onSelectCard}
              />
            </div>
          ))}
        </div>
      </div>
      {description ? (
        <p className={`break-words text-[15px] leading-7 text-[#4B5568] ${rowConfig.descriptionClass || "mt-5 max-w-4xl"}`}>
          {description}
        </p>
      ) : null}
    </section>
  );
}
