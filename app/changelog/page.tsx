// app/changelog/page.tsx
import React from "react";

export const metadata = {
  title: "Changelog - Godfrey Code",
  description: "See the latest updates and improvements to Godfrey Code services.",
};

export default function ChangelogPage() {
  const updates = [
    {
      version: "v1.0.3",
      date: "July 28, 2025",
      changes: [
        "Added responsive video support for modal sections",
        "Updated footer to include all social media links",
      ],
    },
    {
      version: "v1.0.2",
      date: "July 25, 2025",
      changes: [
        "Improved homepage layout for mobile devices",
        "Enhanced SEO structure across landing pages",
      ],
    },
    {
      version: "v1.0.1",
      date: "July 21, 2025",
      changes: ["Launched initial website with homepage, about, and contact pages"],
    },
  ];

  return (
    <div className="max-w-3xl px-4 py-12 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Changelog</h1>
      <p className="mb-8 text-gray-600">
        Here you’ll find all important updates and changes made to the Godfrey Code platform.
      </p>
      <div className="space-y-8">
        {updates.map((update, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold text-gray-800">
              {update.version} – <span className="text-sm text-gray-500">{update.date}</span>
            </h2>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              {update.changes.map((change, i) => (
                <li key={i}>{change}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
