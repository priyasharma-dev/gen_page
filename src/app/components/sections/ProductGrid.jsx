"use client";

import { Sparkles, ArrowRight } from "lucide-react";

export default function ProductGrid({ data = [] }) {
  return (
    <section className="w-full overflow-x-hidden">
      {/* header */}
      <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700">
            <Sparkles size={14} />
            AI Powered Discovery
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            AI Curated Products
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
            Personalized results powered by intent analysis, popularity signals,
            semantic matching, and adaptive ranking systems.
          </p>
        </div>

        <div className="flex items-center">
          <div className="rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
            <span className="text-sm font-semibold text-gray-700">
              {data.length} Results
            </span>
          </div>
        </div>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
        {data.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-[30px] border border-white/70 bg-white/90 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src={product.thumbnail || product.image}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* badge */}
              {product.badge ? (
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur-md">
                    {product.badge}
                  </span>
                </div>
              ) : null}

              {/* floating ai tag */}
              <div className="absolute bottom-4 left-4">
                <div className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  <Sparkles size={12} />
                  AI Recommended
                </div>
              </div>
            </div>

            {/* content */}
            <div className="flex flex-col p-6">
              {/* title */}
              <div>
                <h3 className="line-clamp-2 text-xl font-semibold tracking-tight text-gray-900">
                  {product.title}
                </h3>

                {product.description ? (
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
                    {product.description}
                  </p>
                ) : null}
              </div>

              {/* price + label */}
              <div className="mt-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-2xl font-bold tracking-tight text-gray-900">
                    ${product.price}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-400">
                    Inclusive of all taxes
                  </p>
                </div>

                <div className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  AI Pick
                </div>
              </div>

              {/* actions */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800">
                  View Product
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </button>

                <button className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-blue-200 hover:text-blue-700">
                  Save
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}