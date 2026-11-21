// src/components/ui/InputField.jsx
import React from "react";
import FormError from "./FormError";

export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  ...rest
}) {
  return (
    <div className="input-field mb-4">
      <label htmlFor={name} className="input-label block mb-1 font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={`input-base block w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...register(name)}
        {...rest}
      />
      {error && <FormError message={error.message} />}
    </div>
  );
}
