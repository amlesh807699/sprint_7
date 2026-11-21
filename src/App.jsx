// src/App.jsx
import React from "react";
import RegistrationWizard from "./components/wizard/RegistrationWizard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <RegistrationWizard />
    </div>
  );
}
