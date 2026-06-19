"use client";

export default function OverviewTab() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 rounded-xl p-6">
        <span className="inline-block text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full mb-3">
          Core strategy
        </span>
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          Superscore = two peaks, not one perfect test
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Almost every selective college superscores the SAT — they take your best Math score and
          best Reading &amp; Writing score across all test dates. The goal is to{" "}
          <strong className="text-gray-800 dark:text-gray-200">peak each section once</strong>, not
          ace both on the same day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
          <span className="inline-block text-xs font-medium bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full mb-3">
            August test
          </span>
          <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
            Bank the stronger section
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Convert "good" into "locked in forever." Still prepare both — a good day on the weak
            section is pure upside. Extra effort goes to the strong side.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
          <span className="inline-block text-xs font-medium bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full mb-3">
            Retake
          </span>
          <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
            Deep work on the weak section
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Reading volume and real math foundations take months to build. Start now so the retake
            has something to cash in.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/50 pl-4 py-3 rounded-r-lg">
        <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
          <strong>Step zero:</strong> Take a full official practice test in Bluebook in one sitting
          under real timing. Every other decision depends on knowing your Math vs. Reading &amp;
          Writing split.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
        <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-4">How the superscore works</h3>
        <div className="grid grid-cols-3 gap-3 text-center text-sm">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">August test</p>
            <p className="font-medium text-gray-900 dark:text-gray-100">Best Math</p>
            <p className="text-gray-600 dark:text-gray-400">+ OK Verbal</p>
          </div>
          <div className="flex items-center justify-center text-2xl text-gray-400">+</div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Retake</p>
            <p className="text-gray-600 dark:text-gray-400">OK Math</p>
            <p className="font-medium text-gray-900 dark:text-gray-100">+ Best Verbal</p>
          </div>
        </div>
        <div className="mt-4 bg-green-50 dark:bg-green-950 rounded-lg p-3 text-center">
          <p className="text-xs text-green-700 dark:text-green-300 mb-1">College sees</p>
          <p className="font-medium text-green-900 dark:text-green-100">
            Best Math + Best Verbal = Your Superscore
          </p>
        </div>
      </div>
    </div>
  );
}
