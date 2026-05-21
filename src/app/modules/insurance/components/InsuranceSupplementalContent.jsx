"use client";

import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

import { getInsuranceComparisonUrl } from "../routing/variation.js";

import InsurancePreferenceSection from "./InsurancePreferenceSection";
import WhyAnsiPickedSection from "./WhyAnsiPickedSection";

function QuickComparisonTable({ rows, query }) {
  const router = useRouter();

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-[22px] font-medium text-[#111827]">Quick Comparison</h3>
          <p className="mt-1 text-[14px] text-[#6A7282]">A side-by-side look at our top picks.</p>
        </div>
        <button
          type="button"
          onClick={() => router.push(getInsuranceComparisonUrl(query))}
          aria-label="Open full comparison page"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D1D5DC] bg-white text-[#0B57D0] transition hover:border-[#B8C8E8] hover:bg-[#F8FBFF]"
        >
          <ExternalLink size={16} />
        </button>
      </div>
      <div className="mt-5 overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white">
        <div className="grid grid-cols-[1.2fr_1fr_1fr_2fr] gap-4 border-b border-[#EEF2F6] px-5 py-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#98A2B3]">
          <p>Provider</p>
          <p>Best For</p>
          <p>Est. Monthly Rate</p>
          <p>Highlights</p>
        </div>
        {rows.map((row, index) => (
          <div
            key={row.provider}
            className={`grid grid-cols-[1.2fr_1fr_1fr_2fr] gap-4 px-5 py-4 text-[13px] ${
              index < rows.length - 1 ? "border-b border-[#F2F4F7]" : ""
            }`}
          >
            <p className={`font-bold ${row.logoStyle === "statefarm" ? "text-[#DC2626]" : row.logoStyle === "progressive" ? "text-[#1D4ED8]" : "text-[#1E40AF]"}`}>
              {row.provider}
            </p>
            <p className="text-[#344054]">{row.bestFor}</p>
            <p className="font-semibold text-[#101828]">
              {row.rate}
              <span className="ml-1 text-[11px] font-normal text-[#6A7282]">/mo</span>
            </p>
            <p className="text-[#667085]">{row.highlights}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function RelatedInsuranceGrid({ items }) {
  const toneMap = {
    violet: "bg-[#F3E8FF] text-[#8B5CF6]",
    green: "bg-[#DCFCE7] text-[#16A34A]",
    amber: "bg-[#FEF3C7] text-[#D97706]",
    blue: "bg-[#DBEAFE] text-[#2563EB]",
  };

  return (
    <section className="mt-10">
      <h3 className="text-[22px] font-medium text-[#111827]">Explore Related Insurance</h3>
      <p className="mt-1 text-[14px] text-[#6A7282]">Protect what matters beyond your car.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-[20px] border border-[#E8ECF2] bg-white p-5">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${toneMap[item.tone]}`}>
              <ShieldCheck size={14} />
            </div>
            <h4 className="mt-4 text-[14px] font-semibold text-[#111827]">{item.title}</h4>
            <p className="mt-2 text-[12px] leading-5 text-[#667085]">{item.body}</p>
            <button type="button" className="mt-5 inline-flex items-center gap-1 text-[12px] font-medium text-[#2563EB]">
              {item.cta}
              <ArrowRight size={13} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function InsuranceSupplementalContent({ content, query = "" }) {
  const variation = content.variation || "comparison";

  return (
    <div className="mt-10 max-w-[900px]">
      {variation !== "preference" ? (
        <InsurancePreferenceSection
          title="Which best describes your situation?"
          subtitle="This helps ANSI personalize the best recommendations for you."
          chips={content.situationChips || []}
          selectionMode="single"
        />
      ) : null}

      <QuickComparisonTable rows={content.comparisonRows || []} query={query} />

      <WhyAnsiPickedSection reasons={content.ansiReasons || []} />

      <div className="mt-10">
        <InsurancePreferenceSection
          title="What Matters The Most To You"
          subtitle="This helps ANSI personalize the best recommendations for you."
          chips={content.priorityChips || []}
          selectionMode="multiple"
        />
      </div>

      <RelatedInsuranceGrid items={content.relatedInsurance || []} />
    </div>
  );
}
