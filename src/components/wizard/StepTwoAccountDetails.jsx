
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import InputField from "../ui/InputField";
import PasswordField from "../ui/PasswordField";
import Button from "../ui/Button";

export default function StepTwoAccountDetails({ onNext, onBack }) {
  const {
    register,
    formState: { errors },
    watch,
    trigger,
  } = useFormContext();

  const email = watch("email") || "";
  const password = watch("password") || "";
  const confirmPassword = watch("confirmPassword") || "";

  // Calculate password strength
  const getStrength = (pwd = "") => {
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const hasSpecial = /[^A-Za-z0-9\s]/.test(pwd);
    const lengthOK = pwd.length >= 8;

    const score = [
      hasUpper,
      hasLower,
      hasNumber,
      hasSpecial,
      lengthOK,
    ].filter(Boolean).length;

    return [
      "Very Weak",
      "Weak",
      "Medium",
      "Strong",
      "Very Strong",
      "Excellent",
    ][score];
  };

  const strength = getStrength(password);

  // Check whether all fields are valid
  const stepValid =
    email.trim() !== "" &&
    password !== "" &&
    confirmPassword !== "" &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword;

  // Revalidate password fields when password changes
  useEffect(() => {
    if (password) {
      trigger(["password", "confirmPassword"]);
    }
  }, [password, trigger]);

  // Validate fields before moving forward
  const handleNext = async () => {
    const isValid = await trigger([
      "email",
      "password",
      "confirmPassword",
    ]);

    if (isValid) {
      onNext();
    }
  };

  return (
    <div>
      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="you@example.com"
        register={register}
        error={errors.email}
      />

      <PasswordField
        label="Password"
        name="password"
        placeholder="••••••••"
        register={register}
        error={errors.password}
      />

      {password && (
        <p className="text-sm mt-1">
          Password strength:{" "}
          <span
            className={`font-medium ${
              strength === "Excellent" || strength === "Very Strong"
                ? "text-green-600"
                : strength === "Strong"
                ? "text-blue-600"
                : "text-red-600"
            }`}
          >
            {strength}
          </span>
        </p>
      )}

      <PasswordField
        label="Confirm Password"
        name="confirmPassword"
        placeholder="••••••••"
        register={register}
        error={errors.confirmPassword}
      />

      <div className="flex justify-between mt-4">
        <Button
          variant="secondary"
          onClick={onBack}
          type="button"
        >
          Back
        </Button>

        <Button
          onClick={handleNext}
          disabled={!stepValid}
          type="button"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
