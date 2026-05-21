"use client";

import { ShieldCheck } from "lucide-react";

export default function InsuranceProviderDetailPage({
  provider,
  onBack,
}) {
  if (!provider) {
    return null;
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-[#111827]">
            {provider.providerName} Auto Insurance
          </h2>
          <p className="mt-2 text-[14px] text-[#6A7282]">{provider.subtitle}</p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-[#D1D5DC] px-4 py-2 text-[14px] font-medium text-[#0B57D0]"
        >
          Back to results
        </button>
      </div>

      <div className="rounded-[28px] border border-[#E6ECF5] bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="inline-flex rounded-full bg-[#E8F0FE] px-3 py-1 text-[11px] font-medium text-[#0B57D0]">
              {provider.label}
            </p>
            <div className="mt-4 flex items-end gap-2">
              <p className="text-[40px] font-bold tracking-[-0.05em] text-[#101828]">
                {provider.priceValue}
              </p>
              <p className="pb-[8px] text-[17px] text-[#6A7282]">{provider.priceSuffix}</p>
            </div>
            <p className="mt-2 max-w-[680px] text-[15px] leading-[1.7] text-[#475467]">
              {provider.detailSummary}
            </p>
          </div>
          <a
            href={provider.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#2563EB] px-5 py-3 text-[14px] font-semibold text-white"
          >
            Visit provider website
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-[20px] bg-[#F7F9FD] p-5">
            <h3 className="text-[16px] font-semibold text-[#111827]">Why Choose</h3>
            <div className="mt-4 space-y-3">
              {provider.whyChoose.map((item) => (
                <div key={item} className="flex items-start gap-2 text-[14px] text-[#4A5565]">
                  <span className="mt-[3px] flex h-4 w-4 items-center justify-center rounded-[4px] bg-[#DCFCE7] text-[#00A63E]">
                    <ShieldCheck size={11} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[20px] bg-[#F7F9FD] p-5">
            <h3 className="text-[16px] font-semibold text-[#111827]">Top Discounts</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {provider.discounts.map((discount) => (
                <span
                  key={discount}
                  className="rounded-full border border-[#D7E3F8] bg-white px-3 py-2 text-[12px] font-medium text-[#2563EB]"
                >
                  {discount}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
