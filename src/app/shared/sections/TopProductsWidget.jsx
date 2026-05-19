"use client";

import { ArrowRight, Star } from "lucide-react";

export default function TopProductsWidget({
  products = [],
  onViewAll,
}) {
  return (
    <section className="w-full min-w-0">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-[19px] font-semibold tracking-[-0.02em] text-[#1C2433]">
          Top Rated Products
        </p>
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            onViewAll?.({
              type: "top-rated-products",
              title: "Top Rated Products",
              products,
            });
          }}
          className="inline-flex items-center gap-1 text-[13px] font-medium text-[#3267EB]"
        >
          View all
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="rounded-[28px] border border-[#D7E6FF] bg-white px-4 py-5 shadow-[0_10px_30px_rgba(80,124,210,0.05)]">
        <div className="space-y-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="flex min-w-0 items-start gap-4 rounded-[18px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[92px] w-[92px] shrink-0 rounded-[20px] object-cover"
              />
              <div className="min-w-0 pt-1">
                <p className="break-words text-[18px] font-semibold tracking-[-0.02em] text-[#515C6E]">
                  {item.title}
                </p>
                <p className="mt-2 text-[18px] font-semibold text-[#4A5568]">
                  {item.price}
                </p>
                <div className="mt-2 flex items-center gap-2 text-[13px] text-[#9AA3B2]">
                  <Star size={14} className="fill-[#FFC623] text-[#FFC623]" />
                  <span className="text-[#495466]">{item.rating}</span>
                  <span>({item.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
