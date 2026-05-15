"use client";

import DynamicResultCard from "./DynamicResultCard";

export default function ScrollableRecommendationRow({
  category = "generic",
  title,
  description,
  products = [],
  onSelectCard,
}) {
  const isFashion = category === "fashion";

  return (
    <section className="w-full min-w-0">
      <div className="mb-5 min-w-0">
        <h3
          className={`break-words font-semibold tracking-tight ${
            isFashion
              ? "text-[28px] text-[#241A2B] sm:text-[32px]"
              : "text-[24px] text-gray-900"
          }`}
        >
          {title}
        </h3>
        {isFashion ? (
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-[#E7B7D1] via-[#D6B9FF] to-transparent" />
        ) : null}
      </div>

      <div className="-mx-2 overflow-x-auto px-2 pb-2 scrollbar-none">
        <div className="flex min-w-0 gap-4 snap-x snap-mandatory">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`snap-start ${
                isFashion ? "w-[306px] md:w-[320px]" : "w-[272px] md:w-[250px]"
              }`}
            >
              <DynamicResultCard
                category={category}
                product={product}
                index={index}
                onSelect={onSelectCard}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 max-w-4xl break-words text-[15px] leading-7 text-[#4B5568]">
        {description}
      </p>
    </section>
  );
}
