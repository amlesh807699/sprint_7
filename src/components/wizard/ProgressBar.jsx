import React from "react";

export default function ProgressBar({ step }) {
  const percent = ((step + 1) / 3) * 100;
  return (
    <div className="progress-wrapper mb-4" aria-label="registration progress">
      <div className="progress-bg h-2 rounded-full bg-gray-200">
        <div
          className="progress-fg h-2 rounded-full bg-blue-600"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
