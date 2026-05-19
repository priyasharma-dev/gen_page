"use client";

import { ExternalLink, X } from "lucide-react";

import QueryHistoryWidget from "@/app/shared/sections/QueryHistoryWidget";
import TopProductsWidget from "@/app/shared/sections/TopProductsWidget";
import UpgradeCard from "@/app/shared/sections/UpgradeCard";
import WebsitesWidget from "@/app/shared/sections/WebsitesWidget";

export default function RightSidebar({
  isOpen = false,
  onClose,
  onOpenExplorer,
  selectedProduct,
  topRatedProducts = [],
  topWebsites = [],
  recentQueries = [],
}) {
  return (
    <div className="flex h-full w-full min-w-0 flex-col overflow-hidden bg-white/95 backdrop-blur-xl">
      <div className="sticky top-0 z-10 border-b border-[#EEF2F7] bg-white/90 px-5 py-4 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[15px] font-semibold text-[#111827]">Details</p>
            <p className="mt-1 text-[12px] text-[#7C8798]">
              Focused context for the selected result
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details panel"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5EAF2] bg-white text-gray-500 transition-all duration-300 hover:border-[#D6B9FF] hover:text-[#111827]"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden px-5 py-6">
        <div className="flex min-w-0 flex-col gap-8">
          {isOpen && selectedProduct ? (
            <div className="rounded-[28px] border border-[#E7ECF4] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,255,0.94))] p-5 shadow-[0_18px_34px_rgba(15,23,42,0.05)]">
              <div className="flex min-w-0 items-start gap-4">
                {selectedProduct.image ? (
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="h-[98px] w-[82px] shrink-0 rounded-[20px] object-cover"
                  />
                ) : null}
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7B8798]">
                    Selected item
                  </p>
                  <h2 className="mt-2 break-words text-[19px] font-semibold tracking-[-0.02em] text-[#1D2330]">
                    {selectedProduct.title}
                  </h2>
                  <p className="mt-1 break-words text-[14px] text-[#667085]">
                    {selectedProduct.subtitle || selectedProduct.brand}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="text-[18px] font-semibold text-[#111827]">
                      {selectedProduct.price}
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-4 py-2 text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#1f2937]"
                    >
                      Open
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {selectedProduct.description ? (
                <p className="mt-4 break-words text-[14px] leading-7 text-[#667085]">
                  {selectedProduct.description}
                </p>
              ) : null}
            </div>
          ) : null}

          <TopProductsWidget
            products={topRatedProducts}
            onViewAll={() =>
              onOpenExplorer?.("top-rated-products", {
                title: "Top Rated Products",
                products: topRatedProducts,
              })
            }
          />
          <WebsitesWidget websites={topWebsites} />
          <QueryHistoryWidget items={recentQueries} />
          <UpgradeCard />
        </div>
      </div>
    </div>
  );
}
