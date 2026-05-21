"use client";

import { useState } from "react";

export default function InsurancePreferenceSection({
  title,
  subtitle,
  icon: Icon,
  chips = [],
  selectionMode = "single",
  selected: controlledSelected,
  onChange,
}) {
  const [internalSelected, setInternalSelected] = useState([]);
  const selected = controlledSelected ?? internalSelected;

  const toggleChip = (chip) => {
    let nextValue;

    if (selectionMode === "multiple") {
      nextValue = selected.includes(chip)
        ? selected.filter((item) => item !== chip)
        : [...selected, chip];
    } else {
      nextValue = selected[0] === chip ? [] : [chip];
    }

    if (onChange) {
      onChange(nextValue);
    } else {
      setInternalSelected(nextValue);
    }
  };

  return (
    <section className="rounded-[20px] bg-[#F0F2F8] px-5 py-5">
      {/* Header */}
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="mt-0.5 shrink-0">
            <Icon size={28} className="text-[#3B82F6]" />
          </div>
        )}
        <div>
          <h3 className="text-[15px] font-semibold text-[#111827]">{title}</h3>
          <p className="mt-[2px] text-[13px] text-[#6A7282]">{subtitle}</p>
        </div>
      </div>

      {/* Chips — no icons, text only */}
      <div className="mt-4 flex flex-wrap gap-2">
        {chips.map((chip) => {
          const isSelected = selected.includes(chip);

          return (
            <button
              key={chip}
              type="button"
              aria-pressed={isSelected}
              onClick={() => toggleChip(chip)}
              className={`inline-flex items-center rounded-full border px-[16px] py-[8px] text-[13px] font-medium transition-all duration-150 ${
                isSelected
                  ? "border-[#A8C3FB] bg-[#EAF2FF] text-[#0B57D0]"
                  : "border-[#D9E3F4] bg-white text-[#2563EB] hover:border-[#BCD0F7] hover:bg-[#F9FBFF]"
              }`}
            >
              {chip}
            </button>
          );
        })}
      </div>
    </section>
  );
}