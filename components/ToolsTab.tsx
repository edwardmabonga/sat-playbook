"use client";

import { books } from "@/lib/data";

const bookBadgeColors: Record<string, string> = {
  purple: "bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300",
  blue: "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300",
  amber: "bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300",
  green: "bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300",
  red: "bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300",
};

export default function ToolsTab() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-1">
          Required tools
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Both are free. Use nothing else for practice simulation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
            <span className="inline-block text-xs font-medium bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full mb-3">
              Free · Required
            </span>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Bluebook</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              The official College Board app. The real testing environment — same interface, Desmos,
              timer, and adaptive logic as test day. Includes 4+ full-length official practice tests.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              bluebook.collegeboard.org · Windows, Mac, iPad, Chromebook
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
            <span className="inline-block text-xs font-medium bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full mb-3">
              Free · Required
            </span>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Desmos</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              Graphing calculator built directly into the digital SAT math section. Turns hard
              algebra into a picture. First instinct for any problem with equations, lines, or
              curves: <em>"can I just graph this?"</em>
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">desmos.com/calculator</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-1">Books</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          Supplements only — never a replacement for Bluebook + Khan Academy.
        </p>
        <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-2 mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Wait for the baseline, then buy <em>one</em> targeted book for the weak section. One
            focused book + Bluebook + Khan beats five books every time.
          </p>
        </div>

        <div className="space-y-3">
          {books.map((book) => (
            <div
              key={book.title}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5 flex gap-4"
            >
              <div className="flex-1">
                <span
                  className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-2 ${bookBadgeColors[book.color]}`}
                >
                  {book.category}
                </span>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {book.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
