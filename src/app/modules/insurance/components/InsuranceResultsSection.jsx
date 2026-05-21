"use client";

import { Sparkles } from "lucide-react";

import InsuranceProviderCard from "./InsuranceProviderCard";

export default function InsuranceResultsSection({
  title,
  description,
  products = [],
  onSelectCard,
}) {
  return (
    <section className="w-full min-w-0">
      <div className="space-y-2">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <h3 className="text-[22px] font-medium leading-[33px] text-[#09090B]">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-[14px] font-semibold text-[#2563EB]">
            <Sparkles size={16} />
            <span>Recommended by ANSI</span>
          </div>
        </div>
        <p className="text-[14px] leading-[21px] text-[#6A7282]">{description}</p>
      </div>

      <div className="mt-5 grid min-w-0 grid-cols-1 gap-[14px] md:grid-cols-2 xl:grid-cols-4">
        {products.map((product, index) => (
          <InsuranceProviderCard
            key={product.id}
            product={product}
            index={index}
            onSelect={onSelectCard}
          />
        ))}
      </div>
    </section>
  );
}
