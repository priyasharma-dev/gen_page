"use client";

import { BadgeCheck, CircleDollarSign, Handshake, ShieldCheck } from "lucide-react";

const ICONS = {
  "Affordable Rates": CircleDollarSign,
  "High Satisfaction": BadgeCheck,
  "Great Discounts": ShieldCheck,
  "Trusted Support": Handshake,
};

export default function WhyAnsiPickedSection({ reasons = [] }) {
  return (
    <section className="mt-10">
      <h3 className="text-[22px] font-medium text-[#111827]">Why ANSI picked these providers</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason) => {
          const Icon = ICONS[reason.title] || ShieldCheck;

          return (
            <div key={reason.title} className="rounded-[20px] bg-[#F7F9FD] p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#7C8AA3]">
                <Icon size={16} />
              </div>
              <h4 className="mt-3 text-[14px] font-semibold text-[#111827]">{reason.title}</h4>
              <p className="mt-1 text-[12px] leading-5 text-[#667085]">{reason.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
