"use client";

import FashionProductCard from "./FashionProductCard";

export default function FashionSection({
  title,
  description,
  products = [],
  onSelectCard,
}) {
  return (
    <section className="w-full min-w-0">
      <div className="mb-6 flex min-w-0 items-end justify-between gap-4">
        <h3 className="break-words text-[24px] font-bold tracking-[-0.04em] text-[#151922] sm:text-[28px]">
          {title}
        </h3>
      </div>

      <div className="w-full overflow-x-auto pb-4 scrollbar-none">
        <div className="flex w-max min-w-full gap-3 sm:gap-4 lg:gap-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="w-[228px] min-w-[228px] max-w-[228px] sm:w-[238px] sm:min-w-[238px] sm:max-w-[238px] lg:w-[220px] lg:min-w-[220px] lg:max-w-[220px] xl:w-[228px] xl:min-w-[228px] xl:max-w-[228px]"
            >
              <FashionProductCard
                product={product}
                index={index}
                onSelect={onSelectCard}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-7 max-w-[960px] break-words text-[16px] leading-[1.75] text-[#475569]">
        {description}
      </p>
    </section>
  );
}
