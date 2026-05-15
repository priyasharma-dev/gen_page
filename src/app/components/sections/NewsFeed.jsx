"use client";

import { Clock } from "lucide-react";
import { newsFeedItems } from "@/lib/data/mockContent";

export default function NewsFeed() {
  return (
    <div className="grid w-full min-w-0 grid-cols-1 gap-4 xl:grid-cols-2">
      {newsFeedItems.map((item) => (
        <div
          key={item.id}
          className="min-w-0 rounded-2xl border border-white/10 bg-white/70 p-5 backdrop-blur transition hover:shadow-md"
        >
          <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {item.source}
            </span>
            <div className="flex min-w-0 items-center gap-2 text-xs text-gray-500">
              <Clock className="h-3 w-3" />
              <span>{item.time}</span>
            </div>
          </div>

          <h3 className="mt-4 break-words text-base font-semibold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-2 break-words text-sm leading-6 text-gray-600">
            {item.summary}
          </p>
        </div>
      ))}
    </div>
  );
}
