// src/components/ui/PasswordField.jsx
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import InputField from "./InputField";

export default function PasswordField({ label, name, placeholder, register, error }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="password-field mb-4 relative">
      <InputField
        label={label}
        name={name}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        register={register}
        error={error}
        style={{ paddingRight: "2.5rem" }}
      />
      <button
        type="button"
        className="visibility-toggle absolute right-2 top-1/2 transform -translate-y-1/2"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Hide password" : "Show password"}
      >
        {visible ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}
