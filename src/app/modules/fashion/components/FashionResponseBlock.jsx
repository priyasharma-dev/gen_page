"use client";

import StreamingResponse from "@/app/core/engine/StreamingResponse";

export default function FashionResponseBlock({
  text,
  currentTime,
}) {
  return (
    <>
      <div className="mt-2 min-w-0 max-w-[680px]">
        <StreamingResponse
          text={text}
          className="max-w-[680px] text-[15px] leading-7 text-[#475569] sm:text-[16px]"
          collapsedLinesClass="line-clamp-3"
          buttonClassName="mt-2"
        />
      </div>

      <p className="mt-3 text-[13px] text-[#94A3B8]">
        {currentTime}
      </p>
    </>
  );
}
