"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Star,
  ArrowUpRight,
} from "lucide-react";
import { fadeUpTransition, fadeUpVariants } from "@/app/shared/motion/fadeUp";
import ExpandableDescription from "@/app/shared/cards/ExpandableDescription";

export default function DynamicResultCard({
  product,
  index = 0,
  onSelect,
}) {
  return (
    <motion.article
      variants={fadeUpVariants}
      initial="initial"
      animate="animate"
      whileHover={{ y: -4 }}
      transition={fadeUpTransition(index * 0.04, 0.35)}
      onClick={() => onSelect?.(product)}
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-[28px]
        border
        p-2.5
        shadow-[0_4px_20px_rgba(15,23,42,0.04)]
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-[1.01]
        hover:border-[#D6B9FF]
        hover:shadow-[0_18px_40px_rgba(37,99,235,0.08)]
      "
      style={{
        background: "#ffffff",
        borderColor: "#ECEFF4",
      }}
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#F5F7FA]">
        <motion.img
          src={product.image}
          alt={product.title}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="h-full w-full object-cover"
        />

        {/* hover overlay */}
        <div
          className="
            absolute inset-0
            flex items-center justify-center
            bg-black/45
            opacity-0
            backdrop-blur-[2px]
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onSelect?.(product);
            }}
            className="
              flex items-center gap-2
              rounded-full
              bg-white
              px-4 py-2
              text-[13px]
              font-medium
              text-[#111827]
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Open Product
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* badge */}
        {product.badge ? (
          <span
            className="
              absolute left-2.5 top-2.5
              rounded-full
              bg-white/90
              px-2 py-1
              text-[10px]
              font-semibold
              text-[#2563EB]
              shadow-sm
              backdrop-blur-md
            "
          >
            {product.badge}
          </span>
        ) : null}

        {/* wishlist */}
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="
            absolute right-2.5 top-2.5
            flex h-8 w-8 items-center justify-center
            rounded-full
            bg-white/90
            text-[#4B5563]
            shadow-sm
            backdrop-blur-md
            transition-all
            duration-300
            hover:text-red-500
          "
        >
          <Heart size={15} />
        </button>
      </div>

      {/* content */}
      <div className="px-1 pb-1 pt-3">
        {/* brand */}
        <p className="text-[11px] font-medium uppercase tracking-wide text-[#94A3B8]">
          {product.brand}
        </p>

        {product.tags?.length ? (
          <div className="mt-2 flex min-w-0 flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#F8FAFC] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748B]"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {/* title */}
        <h4
          className="
            mt-1
            line-clamp-1
            text-[16px]
            font-semibold
            tracking-[-0.02em]
            text-[#111827]
          "
        >
          {product.title}
        </h4>

        {/* subtitle */}
        <p className="mt-1 line-clamp-1 text-[13px] text-[#6B7280]">
          {product.subtitle}
        </p>

        {/* rating */}
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex items-center gap-1 rounded-full bg-[#FFF8E6] px-2 py-[3px]">
            <Star
              size={11}
              className="fill-[#FBBF24] text-[#FBBF24]"
            />
            <span className="text-[11px] font-semibold text-[#8A5A00]">
              {product.rating}
            </span>
          </div>

          <span className="text-[11px] text-[#9CA3AF]">
            {product.reviews}
          </span>
        </div>

        {/* price */}
        <div className="mt-3 flex items-center justify-between">
          <p
            className="
              text-[20px]
              font-bold
              tracking-[-0.03em]
              text-[#0F172A]
            "
          >
            {product.price}
          </p>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onSelect?.(product);
            }}
            className="
              rounded-xl
              border border-[#E5E7EB]
              bg-[#F8FAFC]
              px-3 py-1.5
              text-[12px]
              font-medium
              text-[#111827]
              transition-all
              duration-300
              hover:border-[#2563EB]
              hover:bg-[#2563EB]
              hover:text-white
            "
          >
            View details
          </button>
        </div>

        {/* description */}
        {product.description ? (
          <div className="mt-3 border-t border-[#F1F5F9] pt-3">
            <ExpandableDescription text={product.description} />
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
