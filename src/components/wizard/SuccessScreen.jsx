// src/components/wizard/SuccessScreen.jsx
import React from "react";
import { CheckCircle } from "lucide-react";
import Button from "../ui/Button";

export default function SuccessScreen({ onRestart }) {
  return (
    <div className="success-screen flex flex-col items-center justify-center py-12">
      <CheckCircle size={80} className="text-green-600 mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Registration Successful!</h2>
      <p className="text-gray-600 mb-6">
        Your information has been successfully validated.
      </p>
      <Button onClick={onRestart}>Start New Registration</Button>
    </div>
  );
}
