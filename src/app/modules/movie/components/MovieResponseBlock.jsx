"use client";

function SourceChip({ chip }) {
  const baseClass =
    "inline-flex items-center gap-2 rounded-full border border-[rgba(17,24,39,0.08)] bg-white px-3 py-2 text-[13px] font-medium text-[#344054] shadow-[0_6px_14px_rgba(15,23,42,0.04)]";

  if (chip.tone === "imdb") {
    return (
      <span className={baseClass}>
        <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-[#F5C518] text-[9px] font-black text-black">
          IMDb
        </span>
        {chip.label}
      </span>
    );
  }

  if (chip.tone === "rt") {
    return (
      <span className={baseClass}>
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FA4B2A] text-[10px] font-black text-white">
          RT
        </span>
        {chip.label}
      </span>
    );
  }

  if (chip.tone === "reddit") {
    return (
      <span className={baseClass}>
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FF5700] text-[10px] font-black text-white">
          r
        </span>
        {chip.label}
      </span>
    );
  }

  return <span className={`${baseClass} text-[#4B5563]`}>{chip.label}</span>;
}

export default function MovieResponseBlock({ text, currentTime, content }) {
  return (
    <>
      <p className="text-[16px] text-[rgba(74,85,101,0.72)]">Thought for 6 seconds</p>

      <div className="mt-4 min-w-0 max-w-[700px]">
        <p className="text-[18px] leading-[1.7] text-[#1F2937]">{text}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {(content?.sourceChips || []).map((chip) => (
          <SourceChip key={chip.label} chip={chip} />
        ))}
      </div>

      <p className="mt-3 text-[13px] text-[#94A3B8]">{currentTime}</p>
    </>
  );
}
