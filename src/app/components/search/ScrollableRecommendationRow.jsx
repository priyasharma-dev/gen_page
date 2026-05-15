"use client";

import DynamicResultCard from "./DynamicResultCard";

export default function ScrollableRecommendationRow({
  title,
  description,
  products = [],
}) {
  return (
    <section className="w-full min-w-0">
      <div className="mb-5 min-w-0">
        <h3 className="break-words text-[24px] font-semibold tracking-tight text-gray-900">
          {title}
        </h3>
      </div>

      <div className="-mx-2 overflow-x-auto px-2 pb-2 scrollbar-none">
        <div className="flex min-w-0 gap-4 snap-x snap-mandatory">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="w-[272px] snap-start md:w-[250px]"
            >
              <DynamicResultCard
                product={product}
                index={index}
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
