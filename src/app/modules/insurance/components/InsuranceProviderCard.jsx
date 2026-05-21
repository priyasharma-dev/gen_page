"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { fadeUpTransition, fadeUpVariants } from "@/app/shared/motion/fadeUp";

function LogoMark({ provider }) {
  if (provider.logoStyle === "geico") {
    return (
      <div className="text-[22px] font-extrabold tracking-[-0.5px] text-[#1E40AF]">
        GEICO
      </div>
    );
  }
  if (provider.logoStyle === "statefarm") {
    return (
      <div className="text-[20px] font-bold text-[#DC2626]">StateFarm</div>
    );
  }
  if (provider.logoStyle === "progressive") {
    return (
      <div className="text-[15px] font-extrabold italic tracking-wide text-[#1D4ED8]">
        PROGRESSIVE
      </div>
    );
  }
  return (
    <div className="text-[22px] font-extrabold tracking-[-0.5px] text-[#1E3A8A]">
      USAA
    </div>
  );
}

export default function InsuranceProviderCard({
  product,
  index = 0,
  onSelect,
  isSelected = false,
}) {

  return (
    <motion.article
      variants={fadeUpVariants}
      initial="initial"
      animate="animate"
      whileHover={{ y: -2 }}
      transition={fadeUpTransition(index * 0.04, 0.28)}
      onClick={() => onSelect?.(product)}
      data-selected={isSelected ? "true" : "false"}
      className={`group relative flex h-full min-h-[316px] min-w-0 cursor-pointer flex-col justify-between rounded-[16px] border bg-white px-[20px] pb-[18px] pt-[20px] transition-all duration-200 ${
        isSelected
          ? "border-[2px] border-[#2563EB] shadow-[0_4px_16px_rgba(37,99,235,0.15)]"
          : "border border-[#e5e7eb] hover:border-[#93B3F8] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
      }`}
    >
    {/* Rank + Logo */}
<div className="flex min-h-[44px] w-full items-center gap-[32px]">
  <div
    className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full text-[12px] font-semibold ${
      isSelected
        ? "bg-[#2563EB] text-white"
        : "bg-[#DBEAFE] text-[#1D4ED8]"
    }`}
  >
    {product.rank}
  </div>

  <div className="flex min-w-0 items-center">
    <LogoMark provider={product} />
  </div>
</div>

      <div className="mt-[10px] flex min-w-0 flex-1 flex-col items-start text-left">
       

        {/* Label pill */}
        <div className="mt-[10px] inline-flex items-center rounded-full bg-[#EFF6FF] px-[12px] py-[3px] text-[11px] font-medium text-[#1D4ED8]">
          {product.label}
        </div>

        {/* Price */}
        <div className="mt-[14px]">
          <div className="flex items-end gap-[3px]">
            <p className="text-[28px] font-bold leading-none tracking-[-0.5px] text-[#111827]">
              {product.priceValue}
            </p>
            <p className="pb-[3px] text-[14px] text-[#6B7280]">
              {product.priceSuffix}
            </p>
          </div>
          <p className="mt-[3px] text-[11px] text-[#9CA3AF]">Est. monthly rate</p>
        </div>

        {/* Highlights — left-aligned */}
        <div className="mt-[14px] flex flex-col gap-[8px]">
          {product.highlights.map((highlight) => (
            <div
              key={`${product.id}-${highlight}`}
              className="flex items-center gap-[7px] text-[12px] text-[#374151]"
            >
              <Check size={13} className="shrink-0 text-[#16A34A]" strokeWidth={2.5} />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA button — full-width, rectangular rounded */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSelect?.(product);
        }}
        className={`mt-[18px] inline-flex w-full items-center justify-center gap-[6px] rounded-[8px] border px-[16px] py-[10px] text-[13px] font-medium text-[#2563EB] transition hover:bg-[#EFF6FF] ${
          isSelected ? "border-[#2563EB]" : "border-[#D1D5DB] hover:border-[#93B3F8]"
        }`}
      >
        View Details
        <ArrowRight size={14} />
      </button>
    </motion.article>
  );
}
