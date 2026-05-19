"use client";

import {
  Star,
  MapPin,
  Clock3,
} from "lucide-react";

export default function FoodCard({
  item,
}) {
  return (
    <div className="group w-full min-w-0 overflow-hidden rounded-[28px] border border-white/60 bg-white/90 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="break-words rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-orange-600 shadow-sm backdrop-blur-xl">
            {item.category}
          </span>
        </div>

        <div className="absolute right-4 top-4 flex shrink-0 items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-xl">
          <Star size={13} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-semibold text-gray-800">
            {item.rating}
          </span>
        </div>
      </div>

      <div className="min-w-0 space-y-5 p-5">
        <div className="min-w-0 space-y-2">
          <h3 className="break-words text-lg font-semibold tracking-tight text-gray-900">
            {item.title}
          </h3>

          <div className="flex min-w-0 items-center gap-2 text-sm text-gray-500">
            <MapPin size={14} />
            <span className="break-words">{item.location}</span>
          </div>
        </div>

        <div className="flex min-w-0 items-center justify-between gap-3 border-t border-gray-100 pt-4">
          <div className="flex min-w-0 items-center gap-2 text-sm text-gray-500">
            <Clock3 size={14} />
            <span className="break-words">25-30 mins</span>
          </div>

          <button className="shrink-0 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
