"use client";

import { comparisonData } from "@/lib/data/mockContent";

export default function ComparisonTable() {
  return (
    <section className="w-full min-w-0 space-y-6 overflow-hidden">
      <div className="min-w-0 text-center">
        <h2 className="break-words text-2xl font-bold text-gray-900">
          Product Comparison
        </h2>

        <p className="mt-1 break-words text-sm text-gray-600">
          AI-assisted side-by-side feature analysis with richer buying context.
        </p>
      </div>

      <div className="w-full min-w-0 overflow-x-auto rounded-2xl border border-white/10 bg-white/80 shadow-xl backdrop-blur-xl">
        <table className="min-w-full table-fixed">
          <thead className="bg-gray-100/80 backdrop-blur">
            <tr>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 sm:px-6">
                Feature
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 sm:px-6">
                Product A
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 sm:px-6">
                Product B
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200/60">
            {comparisonData.map((row, index) => (
              <tr key={index} className="transition hover:bg-white/60">
                <td className="break-words px-4 py-4 font-medium text-gray-900 sm:px-6">
                  {row.feature}
                </td>
                <td className="break-words px-4 py-4 text-gray-700 sm:px-6">
                  <span className="inline-flex items-center rounded-lg bg-blue-50 px-2 py-1 text-sm text-blue-700">
                    {row.productA}
                  </span>
                </td>
                <td className="break-words px-4 py-4 text-gray-700 sm:px-6">
                  <span className="inline-flex items-center rounded-lg bg-rose-50 px-2 py-1 text-sm text-rose-700">
                    {row.productB}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
