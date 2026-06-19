"use client";

import { useState } from "react";
import { profiles } from "@/lib/data";

export default function ProfilesTab() {
  const [active, setActive] = useState(profiles[0].id);
  const profile = profiles.find((p) => p.id === active)!;

  return (
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        The principle is the same in all three: bank the best section in August, save deep work for
        the retake. Select the profile that matches your baseline scores.
      </p>

      <div className="flex gap-2 mb-6 flex-wrap">
        {profiles.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              active === p.id
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100"
                : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
          <span className="inline-block text-xs font-medium bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full mb-3">
            August target: {profile.augustTarget}
          </span>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            {profile.tagline}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {profile.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
              August focus
            </h3>
            <ul className="space-y-2">
              {profile.augustFocus.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="text-blue-400 mt-0.5">›</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full inline-block"></span>
              Retake project: {profile.retakeProject}
            </h3>
            <ul className="space-y-2">
              {profile.retakeFocus.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="text-purple-400 mt-0.5">›</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-950/50 pl-4 py-3 rounded-r-lg">
          <p className="text-xs font-medium text-amber-700 dark:text-amber-400 mb-1">Watch for</p>
          <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
            {profile.watchFor}
          </p>
        </div>
      </div>
    </div>
  );
}
