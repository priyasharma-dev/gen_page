"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Heart,
  Star,
  TrendingUp,
} from "lucide-react";

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
      className="group relative w-full cursor-pointer overflow-hidden rounded-[26px] border border-[#E7E2E8] bg-white p-3 shadow-[0_6px_22px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B9FF] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
    >
      <div className="relative overflow-hidden rounded-[22px] border border-[#EDE7EE] bg-[#F6F6F8]">
        <motion.img
          src={product.image}
          alt={product.title}
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="h-[248px] w-full object-cover object-center sm:h-[258px] lg:h-[270px]"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#55606E]/70 via-[#8D98A4]/18 to-transparent" />

        {product.badge ? (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[#3567E9] px-3 py-1.5 text-[10px] font-semibold text-white shadow-[0_8px_18px_rgba(53,103,233,0.22)]">
            <TrendingUp size={12} />
            {product.badge}
          </div>
        ) : null}

        <button
          type="button"
          onClick={(event) => event.stopPropagation()}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/85 bg-white/82 text-[#7E8797] shadow-[0_6px_14px_rgba(15,23,42,0.08)] backdrop-blur-md"
        >
          <Heart size={15} />
        </button>

        <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-[rgba(111,95,84,0.72)] px-3 py-1.5 text-[11px] font-semibold tracking-[0.01em] text-white backdrop-blur-md">
          {product.brand}
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onSelect?.(product);
            }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-medium text-[#111827] shadow-lg"
          >
            View details
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>

      <div className="px-2 pb-1 pt-4">
        <h4 className="line-clamp-1 text-[18px] font-semibold tracking-[-0.03em] text-[#161B25]">
          {product.title}
        </h4>

        <p className="mt-0.5 line-clamp-1 text-[14px] text-[#6F7786]">
          {product.subtitle}
        </p>

        <div className="mt-3 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[18px] font-semibold tracking-[-0.03em] text-[#111827]">
              {product.price}
            </p>

            <div className="mt-2 flex items-center gap-2">
              <Star
                size={13}
                className="fill-[#FFC623] text-[#FFC623]"
              />

              <span className="text-[14px] text-[#465063]">
                {product.rating}
              </span>

              <span className="text-[14px] text-[#9AA3B2]">
                ({product.reviews})
              </span>
            </div>
          </div>

          <div className="flex shrink-0 items-center">
            {socialProof.map((item, socialIndex) => (
              <span
                key={`${product.id}-${item}-${socialIndex}`}
                className={`relative -ml-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-white text-[12px] font-medium first:ml-0 ${
                  SOCIAL_COLORS[socialIndex] ||
                  SOCIAL_COLORS[2]
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
