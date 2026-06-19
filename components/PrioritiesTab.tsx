"use client";

import { priorities } from "@/lib/data";

const rankColors: Record<number, string> = {
  1: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
  2: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
  3: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
  4: "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
  5: "bg-lime-100 dark:bg-lime-900 text-lime-700 dark:text-lime-300",
};

function rankColor(n: number) {
  return rankColors[n] ?? "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400";
}

export default function PrioritiesTab() {
  return (
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Ranked by impact. Start at the top — every item below it depends on doing the one above it
        well.
      </p>
      <div className="divide-y divide-gray-100 dark:divide-gray-800 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
        {priorities.map((p) => (
          <div
            key={p.rank}
            className="flex gap-4 items-start p-4 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span
              className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${rankColor(p.rank)}`}
            >
              {p.rank}
            </span>
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">{p.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                {p.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
