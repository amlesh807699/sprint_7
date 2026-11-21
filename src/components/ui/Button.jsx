// src/components/ui/Button.jsx
import React from "react";

export default function Button({ children, variant = "primary", type = "button", disabled = false, onClick, ...rest }) {
  const base = "font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:opacity-50"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400";
  return (
    <button type={type} className={`${base} ${styles}`} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
