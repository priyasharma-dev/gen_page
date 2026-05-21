"use client";

export default function InsuranceComparisonPage({
  comparisonRows,
  query,
  onBack,
}) {
  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-[#111827]">
            Auto Insurance Comparison
          </h2>
          <p className="mt-2 text-[14px] text-[#6A7282]">
            Compare monthly rates, use cases, and highlights for the top providers.
          </p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-[#D1D5DC] px-4 py-2 text-[14px] font-medium text-[#0B57D0]"
        >
          Back to results
        </button>
      </div>

      <div className="overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white">
        <div className="grid grid-cols-[1.2fr_1fr_1fr_2fr] gap-4 border-b border-[#EEF2F6] px-5 py-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#98A2B3]">
          <p>Provider</p>
          <p>Best For</p>
          <p>Est. Monthly Rate</p>
          <p>Highlights</p>
        </div>
        {comparisonRows.map((row, index) => (
          <div
            key={row.provider}
            className={`grid grid-cols-[1.2fr_1fr_1fr_2fr] gap-4 px-5 py-4 text-[13px] ${
              index < comparisonRows.length - 1 ? "border-b border-[#F2F4F7]" : ""
            }`}
          >
            <p className="font-bold text-[#1E40AF]">{row.provider}</p>
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
