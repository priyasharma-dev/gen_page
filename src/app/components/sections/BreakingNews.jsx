"use client";

import { AlertTriangle } from "lucide-react";
import { breakingItems } from "@/lib/data/mockContent";

export default function BreakingNews() {
  return (
    <div className="w-full min-w-0 rounded-[28px] border border-red-100 bg-red-50/50 p-5 backdrop-blur sm:p-6">
      <div className="mb-4 flex min-w-0 items-center justify-center gap-2 text-center">
        <AlertTriangle className="h-4 w-4 text-red-500" />
        <h2 className="text-sm font-semibold text-red-600">Breaking News</h2>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-2">
        {breakingItems.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-red-100/80 bg-white/70 p-4 text-left shadow-sm"
          >
            <p className="break-words text-sm font-medium leading-6 text-red-700">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
