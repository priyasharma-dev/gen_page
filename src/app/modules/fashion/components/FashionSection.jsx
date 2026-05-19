"use client";

import { motion } from "framer-motion";

import FashionProductCard from "./FashionProductCard";

export default function FashionSection({
  title,
  description,
  products = [],
  onSelectCard,
}) {
  return (
    <section className="w-full min-w-0">
      <div className="mb-5 flex min-w-0 items-end justify-between gap-4">
        <h3 className="break-words text-[24px] font-semibold tracking-[-0.03em] text-[#151922] sm:text-[28px]">
          {title}
        </h3>
      </div>

      <div className="w-full overflow-x-auto pb-5 pt-1 scrollbar-none">
        <div className="flex w-max min-w-full gap-4 pr-2">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="w-[300px] min-w-[300px] max-w-[300px] sm:w-[332px] sm:min-w-[332px] sm:max-w-[332px] lg:w-[360px] lg:min-w-[360px] lg:max-w-[360px]"
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

      <p className="mt-6 max-w-5xl break-words text-[16px] leading-8 text-[#303745]">
        {description}
      </p>
    </section>
  );
}
