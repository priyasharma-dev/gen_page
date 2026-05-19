"use client";

import InsightBanner from "@/app/shared/sections/InsightBanner";

export default function FashionInsights({ content }) {
  if (!content?.insight) {
    return null;
  }

  return (
    <div className="mb-6 max-w-[980px]">
      <InsightBanner
        title={content.insight.title}
        body={content.insight.body}
      />
    </div>
  );
}
