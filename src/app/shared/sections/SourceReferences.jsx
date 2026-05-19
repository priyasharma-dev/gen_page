"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Link2,
} from "lucide-react";

export default function SourceReferences({
  sources = [],
}) {
  return (
    <section className="w-full min-w-0 space-y-4">
      <div className="flex min-w-0 items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="break-words text-sm font-semibold text-gray-900">
            Source references
          </p>
          <p className="break-words text-sm text-gray-500">
            Ranked signals informing the response.
          </p>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {sources.length} indexed
        </span>
      </div>

      <div className="grid w-full min-w-0 grid-cols-1 gap-3 lg:grid-cols-2">
        {sources.map((source, index) => (
          <motion.div
            key={`${source.title}-${source.domain}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="min-w-0 rounded-[24px] border border-gray-100 bg-white/90 p-4 shadow-sm"
          >
            <div className="mb-3 flex min-w-0 items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Globe size={16} />
                </span>
                <div className="min-w-0">
                  <p className="break-words text-sm font-semibold text-gray-800">
                    {source.title}
                  </p>
                  <p className="break-words text-xs text-gray-400">
                    {source.domain}
                  </p>
                </div>
              </div>

              <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-gray-600">
                {source.status}
              </span>
            </div>

            <div className="flex min-w-0 items-center justify-between gap-3 text-xs text-gray-500">
              <p className="break-words">
                Relevance score {92 - index}%
              </p>
              <span className="inline-flex items-center gap-1">
                <Link2 size={12} />
                Connected
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
