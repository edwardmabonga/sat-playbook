"use client";

import { useState } from "react";
import OverviewTab from "./OverviewTab";
import PrioritiesTab from "./PrioritiesTab";
import ProfilesTab from "./ProfilesTab";
import ToolsTab from "./ToolsTab";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "priorities", label: "Priorities" },
  { id: "profiles", label: "Profiles" },
  { id: "tools", label: "Tools & Books" },
];

export default function Playbook() {
  const [active, setActive] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <h1 className="text-xl font-medium text-gray-900 dark:text-gray-100">SAT Playbook</h1>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                Digital SAT · August test + retake strategy
              </p>
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
              11th grade
            </span>
          </div>

          <nav className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  active === tab.id
                    ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {active === "overview" && <OverviewTab />}
        {active === "priorities" && <PrioritiesTab />}
        {active === "profiles" && <ProfilesTab />}
        {active === "tools" && <ToolsTab />}
      </main>
    </div>
  );
}
