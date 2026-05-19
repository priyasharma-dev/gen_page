"use client";

import { useSearchUI } from "@/app/core/state/SearchUIContext";

export default function SearchAxisContainer({
  children,
  className = "",
}) {
  const { isRightPanelOpen } = useSearchUI();

  return (
    <div
      className={`mx-auto w-full min-w-0 px-5 pb-0 pt-0 lg:px-10 ${
        isRightPanelOpen ? "max-w-[920px]" : "max-w-[1180px]"
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
}
