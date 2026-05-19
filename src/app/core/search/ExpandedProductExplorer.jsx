"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownUp,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { fadeUpVariants } from "@/app/shared/motion/fadeUp";

const FILTERS = [
  "All",
  "Trending",
  "Budget",
  "Premium",
  "Highly Rated",
  "Similar Vibes",
];

const SORT_OPTIONS = [
  "Recommended",
  "Price: Low to High",
  "Rating",
  "Reviews",
];

function parsePrice(price = "") {
  const numeric = Number(String(price).replace(/[^\d.]/g, ""));
  return Number.isFinite(numeric) ? numeric : Number.MAX_SAFE_INTEGER;
}

function parseReviews(reviews = "") {
  const numeric = Number(String(reviews).replace(/[^\d.]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function parseRating(rating = "") {
  const numeric = Number(String(rating).replace(/[^\d.]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function buildReason(product, activeFilter) {
  if (activeFilter === "Budget") {
    return "Balanced pricing with strong value for this search.";
  }

  if (activeFilter === "Premium") {
    return "Elevated pick with polished details and stronger brand pull.";
  }

  if (activeFilter === "Highly Rated") {
    return "Consistently strong ratings and review confidence.";
  }

  if (activeFilter === "Similar Vibes") {
    return `Matches the ${product.subtitle || product.brand || "overall"} vibe in your results.`;
  }

  if (activeFilter === "Trending" || product.badge) {
    return product.badge
      ? `${product.badge} signal plus strong click appeal.`
      : "Trending pick based on momentum around this query.";
  }

  if (product.tags?.length) {
    return `Aligned with ${product.tags.slice(0, 2).join(" and ").toLowerCase()} intent.`;
  }

  return "Recommended from ratings, reviews, price fit, and search intent.";
}

export default function ExpandedProductExplorer({
  explorer,
  onSelectProduct,
  onClose,
  FiltersComponent,
}) {
  const rootRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Recommended");

  useEffect(() => {
    if (!explorer) {
      return;
    }

    rootRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [explorer]);

  const title = explorer?.payload?.title || "Top Rated Products";

  const filteredProducts = useMemo(() => {
    const products = explorer?.payload?.products || [];
    const baseProducts = [...products];

    const byFilter = baseProducts.filter((product) => {
      const price = parsePrice(product.price);
      const rating = parseRating(product.rating);

      switch (activeFilter) {
        case "Trending":
          return Boolean(product.badge) || rating >= 4.5;
        case "Budget":
          return price <= 2500 || price <= 100;
        case "Premium":
          return price > 2500 || price > 100;
        case "Highly Rated":
          return rating >= 4.6;
        case "Similar Vibes":
          return Boolean(product.subtitle || product.tags?.length);
        default:
          return true;
      }
    });

    const sorted = [...byFilter].sort((left, right) => {
      if (sortBy === "Price: Low to High") {
        return parsePrice(left.price) - parsePrice(right.price);
      }

      if (sortBy === "Rating") {
        return parseRating(right.rating) - parseRating(left.rating);
      }

      if (sortBy === "Reviews") {
        return parseReviews(right.reviews) - parseReviews(left.reviews);
      }

      return (
        parseRating(right.rating) * 10 +
        parseReviews(right.reviews) -
        (parseRating(left.rating) * 10 + parseReviews(left.reviews))
      );
    });

    return sorted;
  }, [activeFilter, explorer, sortBy]);

  if (!explorer) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.section
        ref={rootRef}
        variants={fadeUpVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full min-w-0 overflow-hidden rounded-[32px] border border-[#E6ECF5] bg-white/90 shadow-[0_20px_70px_rgba(15,23,42,0.06)]"
      >
        <div className="flex min-w-0 flex-col gap-6 px-5 py-6 sm:px-6 lg:px-7">
          <div className="flex min-w-0 items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="break-words text-[30px] font-bold tracking-[-0.04em] text-[#151922]">
                {title}
              </h2>
              <p className="mt-2 text-[15px] text-[#667085]">
                Showing curated products based on your search intent
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E5EAF2] bg-white text-[#667085] transition-all duration-300 hover:border-[#D6B9FF] hover:text-[#111827]"
            >
              <X size={17} />
            </button>
          </div>

          <div className="rounded-[24px] border border-[#E9D8FD] bg-[#F7F3FF] px-5 py-4">
            <div className="flex min-w-0 items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#7C3AED] shadow-sm">
                <Sparkles size={16} />
              </span>
              <div className="min-w-0">
                <p className="text-[15px] font-semibold text-[#24143D]">
                  ANSI expanded this list using ratings, reviews, price relevance, and your search intent.
                </p>
                <p className="mt-1.5 text-[14px] leading-6 text-[#6B5A85]">
                  Use filters to pivot the shortlist without losing the conversational search flow.
                </p>
              </div>
            </div>
          </div>

          {FiltersComponent ? <FiltersComponent /> : null}

          <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 flex-wrap gap-2.5">
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full border px-4 py-2 text-[14px] transition-all duration-300 ${
                      isActive
                        ? "border-[#151922] bg-[#151922] text-white"
                        : "border-[#E6ECF5] bg-white text-[#546071] hover:border-[#D6B9FF] hover:text-[#151922]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            <label className="inline-flex items-center gap-3 self-start rounded-full border border-[#E6ECF5] bg-white px-4 py-2 text-[14px] text-[#445064] shadow-sm">
              <ArrowDownUp size={15} />
              <span>Sort</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="bg-transparent text-[14px] text-[#151922] outline-none"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <button
                key={`${explorer.type}-${product.id}`}
                type="button"
                onClick={() => onSelectProduct?.(product)}
                className="group flex min-w-0 flex-col overflow-hidden rounded-[26px] border border-[#EDF0F5] bg-white p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B9FF] hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="aspect-[3/4] w-full rounded-[22px] object-cover"
                />

                <div className="min-w-0 px-1 pb-1 pt-4">
                  <div className="flex min-w-0 items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#94A3B8]">
                        {product.brand || "ANSI pick"}
                      </p>
                      <h3 className="mt-1 line-clamp-2 text-[18px] font-semibold tracking-[-0.03em] text-[#151922]">
                        {product.title}
                      </h3>
                    </div>
                    {product.badge ? (
                      <span className="shrink-0 rounded-full bg-[#F4F0FF] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7C3AED]">
                        {product.badge}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-2 text-[20px] font-bold tracking-[-0.03em] text-[#0F172A]">
                    {product.price}
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-[13px] text-[#667085]">
                    <Star size={13} className="fill-[#FFC623] text-[#FFC623]" />
                    <span className="font-medium text-[#243041]">{product.rating}</span>
                    <span>({product.reviews} reviews)</span>
                  </div>

                  <p className="mt-3 line-clamp-2 text-[14px] leading-6 text-[#667085]">
                    {buildReason(product, activeFilter)}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
