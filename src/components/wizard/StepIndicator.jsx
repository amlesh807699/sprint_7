// src/components/wizard/StepIndicator.jsx
import React from "react";

const titles = [
  "Personal Information",
  "Account Details",
  "Review & Submit",
];

export default function StepIndicator({ step }) {
  return (
    <div className="step-indicator text-gray-700 mb-2">
      Step {step + 1} of 3 — {titles[step]}
    </div>
  );
}
