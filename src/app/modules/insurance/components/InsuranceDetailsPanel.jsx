"use client";

import {
  BadgeCheck,
  Clock3,
  ExternalLink,
  Phone,
  ShieldCheck,
  Star,
  Tag,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

import AutoInsuranceWebsitesPanel from "./AutoInsuranceWebsitesPanel";
import { getInsuranceDetailUrl } from "../routing/variation.js";

function ProviderLogo({ provider }) {
  if (provider.logoStyle === "geico") {
    return <div className="text-[24px] font-black tracking-[-1.1px] text-[#1E40AF]">GEICO</div>;
  }

  if (provider.logoStyle === "statefarm") {
    return <div className="text-[20px] font-bold tracking-[-0.45px] text-[#DC2626]">StateFarm</div>;
  }

  if (provider.logoStyle === "progressive") {
    return <div className="text-[16px] font-bold text-[#1D4ED8]">PROGRESSIVE</div>;
  }

  return <div className="text-[26px] font-bold text-[#1E3A8A]">USAA</div>;
}

function QuickFactIcon({ icon }) {
  if (icon === "star") return <Star size={14} className="fill-[#F59E0B] text-[#F59E0B]" />;
  if (icon === "timer") return <Clock3 size={14} className="text-[#2563EB]" />;
  if (icon === "tag") return <Tag size={14} className="text-[#2563EB]" />;
  return <ShieldCheck size={14} className="text-[#2563EB]" />;
}

function DetailPanel({ selectedProduct, onClose, onViewFullDetails }) {
  return (
    <div className="rounded-[32px] border border-[rgba(0,0,0,0.10)] bg-white p-[24px] shadow-[0_4px_10px_rgba(0,0,0,0.03)]">
      <div className="flex items-start justify-between gap-4">
        <ProviderLogo provider={selectedProduct} />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details panel"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E2E8F0] text-[#64748B]"
        >
          <X size={16} />
        </button>
      </div>

      <div className="mt-3 inline-flex rounded-full bg-[#E8F0FE] px-3 py-1 text-[11px] font-medium text-[#0B57D0]">
        {selectedProduct.label}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px] text-[#475467]">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={13}
              className={index < 4 ? "fill-[#F59E0B] text-[#F59E0B]" : "text-[#D0D5DD]"}
            />
          ))}
        </div>
        <span className="font-semibold text-[#111827]">{selectedProduct.rating}</span>
        <span>{selectedProduct.reviews}</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#ECFDF3] px-2 py-0.5 text-[12px] font-medium text-[#027A48]">
          <BadgeCheck size={12} />
          {selectedProduct.status}
        </span>
      </div>

      <div className="mt-5 flex items-end gap-2">
        <p className="text-[34px] font-bold tracking-[-0.8px] text-[#101828]">
          {selectedProduct.priceValue}
        </p>
        <p className="pb-[6px] text-[16px] text-[#6A7282]">{selectedProduct.priceSuffix}</p>
      </div>
      <p className="mt-1 text-[14px] text-[#4A5565]">{selectedProduct.subtitle}</p>

      <button
        type="button"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[24px] bg-[#2563EB] px-4 py-[12px] text-[14px] font-semibold text-white"
      >
        <Phone size={15} />
        {selectedProduct.callToAction}
      </button>

      <p className="mt-3 text-[12px] text-[#667085]">{selectedProduct.availability}</p>

      <div className="mt-6">
        <h3 className="text-[15px] font-semibold text-[#101828]">Why Choose</h3>
        <div className="mt-3 space-y-2">
          {selectedProduct.whyChoose.map((item) => (
            <div key={item} className="flex items-start gap-2 text-[13px] text-[#4A5565]">
              <span className="mt-[2px] flex h-4 w-4 items-center justify-center rounded-[4px] bg-[#DCFCE7] text-[#00A63E]">
                <ShieldCheck size={11} />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-[15px] font-semibold text-[#101828]">Quick Facts</h3>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {selectedProduct.quickFacts.map((fact) => (
            <div
              key={`${selectedProduct.id}-${fact.label}`}
              className="rounded-[20px] border border-[#E8EEF6] bg-[#FAFCFF] p-3"
            >
              <div className="flex items-center gap-2 text-[#2563EB]">
                <QuickFactIcon icon={fact.icon} />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
                  {fact.label}
                </p>
              </div>
              <p className="mt-2 text-[13px] font-medium text-[#101828]">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-[15px] font-semibold text-[#101828]">Top Discounts</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {selectedProduct.discounts.map((discount) => (
            <span
              key={`${selectedProduct.id}-${discount}`}
              className="rounded-full border border-[#D7E3F8] bg-[#F8FBFF] px-3 py-[7px] text-[12px] font-medium text-[#2563EB]"
            >
              {discount}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onViewFullDetails}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[24px] border border-[#D1D5DC] px-4 py-[11px] text-[14px] font-medium text-[#0B57D0]"
      >
        View Full Details
        <ExternalLink size={15} />
      </button>
    </div>
  );
}

export default function InsuranceDetailsPanel({
  isOpen = false,
  onClose,
  selectedProduct,
  topWebsites = [],
  websitePanelTitle = "Top Websites to Buy Auto Insurance",
  query = "",
}) {
  const router = useRouter();

  return (
    <div className="flex h-full w-full min-w-0 flex-col overflow-hidden bg-transparent px-3 py-4 lg:px-6 lg:py-5">
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {isOpen && selectedProduct ? (
          <DetailPanel
            selectedProduct={selectedProduct}
            onClose={onClose}
            onViewFullDetails={() =>
              router.push(getInsuranceDetailUrl(query, selectedProduct.id))
            }
          />
        ) : (
          <AutoInsuranceWebsitesPanel
            title={websitePanelTitle}
            websites={topWebsites}
          />
        )}
      </div>
    </div>
  );
}
