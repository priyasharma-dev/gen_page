"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductCarousel({
  products = [],
}) {
  if (!products.length) {
    return null;
  }

  return (
    <section className="w-full min-w-0 space-y-4">
      <div className="min-w-0">
        <p className="break-words text-sm font-semibold text-gray-900">
          Ranked recommendations
        </p>
        <p className="break-words text-sm text-gray-500">
          Top matches surfaced from search intent and context.
        </p>
      </div>

      <div className="-mx-4 overflow-x-auto px-4 pb-2">
        <div className="flex min-w-0 gap-4">
          {products.slice(0, 6).map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="w-[260px] shrink-0 overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={product.thumbnail || product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
                {product.badge ? (
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800">
                    {product.badge}
                  </span>
                ) : null}
              </div>

              <div className="space-y-3 p-4">
                <div>
                  <h3 className="break-words text-base font-semibold text-gray-900">
                    {product.title}
                  </h3>
                  <p className="mt-1 break-words text-sm text-gray-500">
                    {product.description || "High match for this query cluster."}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <button className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-2 text-xs font-semibold text-white">
                    Open
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
