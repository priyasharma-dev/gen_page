"use client";

import { ExternalLink, Globe } from "lucide-react";
import SourcePreviewTooltip from "./SourcePreviewTooltip";

function WebsiteLogo({ website }) {
  if (website.logoStyle === "nerdwallet") {
    return (
      <div className="flex items-center gap-2">
        <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-[#00C853] text-[10px] font-bold text-white">
          N
        </span>
        <span className="text-[14px] font-semibold tracking-[-0.2px] text-[#111827]">
          NerdWallet
        </span>
      </div>
    );
  }

  if (website.logoStyle === "zebra") {
    return (
      <div className="flex items-center gap-2">
        <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-black text-[10px] font-bold italic text-white">
          Z
        </span>
        <span className="text-[14px] font-semibold tracking-[-0.2px] text-[#111827]">
          The Zebra
        </span>
      </div>
    );
  }

  if (website.logoStyle === "liberty") {
    return (
      <div className="flex items-center gap-1">
        <div className="flex h-4 w-4 items-end justify-center rounded-full bg-[#FBBC04]">
          <div className="h-[10px] w-2 rounded-t-full bg-white" />
        </div>
        <span className="font-serif text-[14px] font-bold tracking-[-0.35px] text-[#1E2939]">
          Liberty Mutual
        </span>
      </div>
    );
  }

  if (website.logoStyle === "farmers") {
    return (
      <div className="flex items-center gap-1.5">
        <div className="h-[14px] w-[14px] rounded-[2px] border border-[#0033A0] bg-white" />
        <span className="text-[14px] font-bold tracking-[-0.35px] text-[#0033A0]">
          FARMERS
        </span>
      </div>
    );
  }

  if (website.logoStyle === "nationwide") {
    return (
      <div className="flex items-center gap-1.5">
        <div className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-[#00529B] text-[10px] font-bold text-white">
          N
        </div>
        <span className="text-[14px] font-bold tracking-[-0.35px] text-[#00529B]">
          Nationwide
        </span>
      </div>
    );
  }

  if (website.logoStyle === "travelers") {
    return (
      <div className="flex items-center gap-1.5">
        <div className="h-[14px] w-[14px] rounded-[2px] border border-[#111827] bg-white" />
        <span className="text-[14px] font-bold tracking-[0.7px] text-[#101828]">
          TRAVELERS
        </span>
      </div>
    );
  }

  return (
    <span className="text-[15px] font-bold tracking-[-0.38px] text-[#E31C79]">
      esurance
    </span>
  );
}

export default function AutoInsuranceWebsitesPanel({
  title = "Top Websites to Buy Auto Insurance",
  websites = [],
}) {
  return (
    <div className="rounded-[32px] border border-[rgba(0,0,0,0.10)] bg-white p-[25px] shadow-[0_4px_10px_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F0FE] text-[#0B57D0]">
          <Globe size={18} />
        </div>
        <div className="text-[15px] font-semibold leading-[18.75px] text-[#101828]">
          {title.split("Auto ").length > 1 ? (
            <>
              <p>{title.split("Auto ")[0]}Auto</p>
              <p>{title.split("Auto ")[1]}</p>
            </>
          ) : (
            <p>{title}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        {websites.map((website, index) => (
          <a
            key={`${website.rank}-${website.name}`}
            href={website.url}
            target="_blank"
            rel="noreferrer"
            className={`group relative flex items-start justify-between gap-3 py-3 ${
              index < websites.length - 1 ? "border-b border-[#F3F4F6]" : ""
            }`}
          >
            <div className="flex min-w-0 items-start gap-4">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8F0FE] text-[12px] font-medium text-[#0B57D0]">
                {website.rank}
              </div>
              <div className="min-w-0">
                <WebsiteLogo website={website} />
                <p className="mt-1 text-[12px] leading-5 text-[#667085]">
                  {website.description}
                </p>
              </div>
            </div>
            <ExternalLink size={16} className="mt-1 shrink-0 text-[#2563EB]" />
            <SourcePreviewTooltip
              label={website.name}
              url={website.url}
              description={website.description}
              logo={<WebsiteLogo website={website} />}
            />
          </a>
        ))}
      </div>

      <a
        href="https://www.nerdwallet.com/insurance/auto/car-insurance"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center rounded-[24px] border border-[#D1D5DC] px-4 py-[11px] text-[14px] font-medium text-[#0B57D0]"
      >
        View All Websites
      </a>
    </div>
  );
}
