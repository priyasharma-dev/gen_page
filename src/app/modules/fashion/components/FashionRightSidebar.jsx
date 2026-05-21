"use client";

import { ArrowRight, ExternalLink, Maximize2, Minimize2, Star, X } from "lucide-react";

const MARKETPLACE_URLS = {
  myntra: "https://www.myntra.com/women-dresses",
  amazon: "https://www.amazon.in/s?k=women+dresses",
  flipkart: "https://www.flipkart.com/search?q=women+dresses",
  ajio: "https://www.ajio.com/c/830316008",
  zara: "https://www.zara.com/in/en/woman-dresses-l1066.html",
  mango: "https://shop.mango.com/in/women/dresses-and-jumpsuits_dresses",
  "h&m": "https://www2.hm.com/en_in/women/products/dresses.html",
  hm: "https://www2.hm.com/en_in/women/products/dresses.html",
  nykaa: "https://www.nykaafashion.com/women/westernwear/dresses/c/6557",
};

function getMarketplaceUrl(value = "") {
  const normalized = value.toLowerCase();

  const match = Object.entries(MARKETPLACE_URLS).find(([key]) =>
    normalized.includes(key)
  );

  return match?.[1] || null;
}

function getViewAllUrl(products = [], websites = []) {
  for (const site of websites) {
    const direct = getMarketplaceUrl(site.name || site.domain || "");
    if (direct) {
      return direct;
    }
  }

  for (const item of products) {
    const direct = getMarketplaceUrl(item.brand || item.title || "");
    if (direct) {
      return direct;
    }
  }

  return "https://www.amazon.in/s?k=women+fashion";
}

function openMarketplace(url) {
  if (typeof window !== "undefined" && url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

function FashionTopProductsPanel({
  products,
  websites,
  onViewAll,
}) {
  return (
    <section className="w-full min-w-0 pt-10">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="text-[20px] font-bold tracking-[-0.04em] text-[#111827]">
          Top Rated Products
        </h3>
        <button
          type="button"
          onClick={() => onViewAll(getViewAllUrl(products, websites))}
          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#2563EB] transition hover:gap-2"
        >
          View all
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="rounded-[24px] border border-[#D7E7FF] bg-white px-5 py-5 shadow-[0_12px_34px_rgba(37,99,235,0.06)]">
        <div className="space-y-5">
          {products.map((item) => (
            <div key={item.id} className="flex min-w-0 items-start gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 shrink-0 rounded-[16px] object-cover"
              />
              <div className="min-w-0 pt-1">
                <p className="break-words text-[14px] font-bold tracking-[-0.03em] text-[#1F2937]">
                  {item.title}
                </p>
                <p className="mt-1 text-[14px] font-bold text-[#111827]">
                  {item.price}
                </p>
                <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-[#8A94A6]">
                  <Star size={12} className="fill-[#FACC15] text-[#FACC15]" />
                  <span className="font-medium text-[#475467]">{item.rating}</span>
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

function FashionWebsitesPanel({ websites }) {
  return (
    <section className="w-full min-w-0 pt-10">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="text-[20px] font-bold tracking-[-0.04em] text-[#111827]">
          Top Websites
        </h3>
      </div>

      <div className="rounded-[24px] border border-[#D7E7FF] bg-white px-5 py-5 shadow-[0_12px_34px_rgba(37,99,235,0.06)]">
        {websites.map((site, index) => (
          <div
            key={site.rank}
            className={`flex min-w-0 items-center gap-3 py-3.5 ${
              index < websites.length - 1 ? "border-b border-[#E8EEF6]" : ""
            }`}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF4FF] text-[13px] font-semibold text-[#6A7FA8]">
              {site.rank}
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#E7EDF5] bg-white">
              <span className="text-[15px] font-bold text-[#F044B0]">
                {site.logoText || site.name[0]}
              </span>
            </div>
            <div className="min-w-0 flex-1 overflow-hidden">
              <p className="truncate text-[14px] font-semibold text-[#202633]">
                {site.name}
              </p>
              <p className="truncate text-[11px] text-[#8C95A5]">{site.domain}</p>
            </div>
            <div className="ml-auto flex shrink-0 items-center gap-1.5 pl-2 text-[12px] text-[#445064]">
              <Star size={12} className="fill-[#FACC15] text-[#FACC15]" />
              <span className="tabular-nums">{site.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function FashionRightSidebar({
  isOpen = false,
  isExpanded = false,
  onClose,
  onToggleExpand,
  selectedProduct,
  topRatedProducts = [],
  topWebsites = [],
}) {
  const selectedProductUrl = getMarketplaceUrl(
    selectedProduct?.brand || selectedProduct?.title || ""
  );

  return (
    <div className="flex h-full w-full min-w-0 flex-col overflow-hidden bg-white">
      <div className="sticky top-0 z-10 border-b border-[#E6ECF5] bg-white px-5 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.04em] text-[#111827]">
              Details
            </h2>
            <p className="mt-1.5 text-[13px] text-[#7A8497]">
              Focused context for the selected result
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={onToggleExpand}
              aria-label={isExpanded ? "Collapse details panel" : "Expand details panel"}
              className="hidden h-[48px] w-[48px] items-center justify-center rounded-full border border-[#E1E7F0] bg-white text-[#556070] transition hover:bg-[#F7F9FC] lg:flex"
            >
              {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close details panel"
              className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border border-[#E1E7F0] bg-white text-[#556070] transition hover:bg-[#F7F9FC]"
            >
              <X size={22} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden px-5 py-5 pb-24">
        {isOpen && selectedProduct ? (
          <div className="mt-4 rounded-[24px] border border-[#DCE8FA] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,251,255,0.96))] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
            <div className="flex min-w-0 items-start gap-4">
              {selectedProduct.image ? (
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="h-16 w-16 shrink-0 rounded-[16px] object-cover"
                />
              ) : null}
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8792A6]">
                  Selected Item
                </p>
                <h3 className="mt-2 break-words text-[16px] font-bold tracking-[-0.04em] text-[#111827]">
                  {selectedProduct.title}
                </h3>
                <p className="mt-1 break-words text-[12px] text-[#717B91]">
                  {selectedProduct.subtitle || selectedProduct.brand}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[16px] font-bold tracking-[-0.04em] text-[#111827]">
                    {selectedProduct.price}
                  </p>
                  <button
                    type="button"
                    onClick={() => openMarketplace(selectedProductUrl || getViewAllUrl(topRatedProducts, topWebsites))}
                    className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-4 py-2 text-[12px] font-semibold text-white transition hover:bg-[#1F2937]"
                  >
                    Open
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>

            {selectedProduct.description ? (
              <p className="mt-3 break-words text-[11px] leading-5 text-[#667085]">
                {selectedProduct.description}
              </p>
            ) : null}
          </div>
        ) : null}

        <FashionTopProductsPanel
          products={topRatedProducts}
          websites={topWebsites}
          onViewAll={openMarketplace}
        />
        <FashionWebsitesPanel websites={topWebsites} />
      </div>
    </div>
  );
}
