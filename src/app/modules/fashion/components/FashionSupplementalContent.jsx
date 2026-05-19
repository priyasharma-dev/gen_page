"use client";

import SourcesRow from "@/app/shared/sections/SourcesRow";

export default function FashionSupplementalContent({ content }) {
  if (!content?.styleTips) {
    return null;
  }

  return (
    <div className="mt-8 space-y-9">
      <div className="border-t border-[#D8DCE4]" />

      <div className="max-w-[980px]">
        <p className="text-[16px] leading-8 text-[#28303E]">
          {content.sections[1]?.description}
        </p>
      </div>

      <div className="border-t border-[#D8DCE4]" />

      <div className="max-w-[980px]">
        <h4 className="text-[20px] font-semibold tracking-[-0.02em] text-[#151922]">
          💡 {content.styleTips.title}
        </h4>
        <ul className="mt-6 space-y-2 text-[16px] leading-8 text-[#202633]">
          {content.styleTips.bullets.map((tip) => (
            <li key={tip} className="break-words">
              • {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-[#D8DCE4]" />

      {content.sourcesRow?.length ? (
        <SourcesRow
          sources={content.sourcesRow}
          ctaLabel="View all sources (12)"
        />
      ) : null}
    </div>
  );
}
