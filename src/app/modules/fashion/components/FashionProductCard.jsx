"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Star, TrendingUp } from "lucide-react";

const SOCIAL_COLORS = [
  "bg-[#FFE6F4] text-[#D9468F]",
  "bg-[#FFF6CF] text-[#9A7B00]",
  "bg-[#F3F5F8] text-[#667085]",
];

export default function FashionProductCard({
  product,
  index = 0,
  onSelect,
}) {
  const socialProof = product.socialProof || ["M", "a", "+2"];

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      onClick={() => onSelect?.(product)}
      className="
        group relative w-full max-w-none shrink-0 cursor-pointer overflow-hidden
        rounded-[22px] border border-[#E7E2E8] bg-white p-2.5
        shadow-[0_8px_22px_rgba(15,23,42,0.04)]
        transition-shadow duration-300
      "
    >
      <div className="relative overflow-hidden rounded-[18px] bg-[#F6F6F8]">
        <img
          src={product.image}
          alt={product.title}
          className="
            h-[196px] w-full object-cover object-center
            transition-transform duration-500 ease-out
            group-hover:scale-[1.08]
            sm:h-[206px] lg:h-[190px] xl:h-[198px]
          "
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0F172A]/55 via-[#0F172A]/10 to-transparent" />

        {product.badge ? (
          <div className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-[#3567E9] px-2.5 py-1 text-[10px] font-semibold text-white shadow-md">
            <TrendingUp size={12} />
            {product.badge}
          </div>
        ) : null}

        <button
          type="button"
          onClick={(event) => event.stopPropagation()}
          className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/90 bg-white/82 text-[#7E8797] shadow-sm backdrop-blur-md"
        >
          <Heart size={14} />
        </button>

        <div className="absolute bottom-2.5 left-2.5 rounded-full bg-[#6F6258]/78 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
          {product.brand}
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onSelect?.(product);
            }}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-[#111827] shadow-lg"
          >
            View details
            <ArrowUpRight size={12} />
          </button>
        </div>
      </div>

      <div className="px-1 pb-1 pt-3">
        <h4 className="line-clamp-1 text-[15px] font-bold tracking-[-0.03em] text-[#111827]">
          {product.title}
        </h4>

        <p className="mt-1 line-clamp-1 text-[12px] text-[#6F7786]">
          {product.subtitle}
        </p>

        <p className="mt-2 text-[17px] font-bold tracking-[-0.04em] text-[#111827]">
          {product.price}
        </p>

        <div className="mt-2 flex items-end justify-between gap-2">
          <div className="min-w-0 flex items-center gap-1.5">
            <Star size={13} className="fill-[#FFC623] text-[#FFC623]" />
            <span className="text-[12px] text-[#465063]">
              {product.rating}
            </span>
            <span className="truncate text-[12px] text-[#9AA3B2]">
              ({product.reviews})
            </span>
          </div>

          <div className="flex shrink-0 items-center">
            {socialProof.map((item, socialIndex) => (
              <span
                key={`${product.id}-${item}-${socialIndex}`}
                className={`relative -ml-1 flex h-6 w-6 items-center justify-center rounded-full border border-white text-[10px] font-medium first:ml-0 ${
                  SOCIAL_COLORS[socialIndex] || SOCIAL_COLORS[2]
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
