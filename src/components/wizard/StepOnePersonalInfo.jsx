// src/components/wizard/StepOnePersonalInfo.jsx
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import InputField from "../ui/InputField";
import Button from "../ui/Button";

export default function StepOnePersonalInfo({ onNext }) {
  const {
    register,
    formState: { errors },
    trigger,
    watch,
  } = useFormContext();

  // Watch fields of this step
  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const dateOfBirth = watch("dateOfBirth");

  // Determine step validity (all fields non‑empty and no errors for them)
  const stepValid =
    firstName &&
    lastName &&
    dateOfBirth &&
    !errors.firstName &&
    !errors.lastName &&
    !errors.dateOfBirth;

  // Re‑validate when any of the fields change (so errors update in real time)
  useEffect(() => {
    trigger(["firstName", "lastName", "dateOfBirth"]);
  }, [firstName, lastName, dateOfBirth]);

  const handleNext = async () => {
    const ok = await trigger(["firstName", "lastName", "dateOfBirth"]);
    if (ok) onNext();
  };

  return (
    <div>
      <InputField
        label="First Name"
        name="firstName"
        placeholder="John"
        register={register}
        error={errors.firstName}
      />
      <InputField
        label="Last Name"
        name="lastName"
        placeholder="Doe"
        register={register}
        error={errors.lastName}
      />
      <InputField
        label="Date of Birth"
        name="dateOfBirth"
        type="date"
        register={register}
        error={errors.dateOfBirth}
      />
      <div className="flex justify-end mt-4">
        <Button onClick={handleNext} disabled={!stepValid} type="button">
          Next
        </Button>
      </div>
    </div>
  );
}
