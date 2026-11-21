// src/components/wizard/StepThreeReview.jsx
import React from "react";
import { useFormContext } from "react-hook-form";
import Button from "../ui/Button";

export default function StepThreeReview({ onBack, onEdit, onSubmit }) {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();

  const data = watch();

  const stepValid = data.termsAccepted && Object.keys(errors).length === 0;

  return (
    <div>
      {/* Personal Info */}
      <section className="review-section mb-4 p-4 bg-gray-100 rounded">
        <h3 className="font-medium mb-2">Personal Information</h3>
        <p>
          <strong>First Name:</strong> {data.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {data.lastName}
        </p>
        <p>
          <strong>Date of Birth:</strong> {data.dateOfBirth}
        </p>
        <Button variant="secondary" onClick={() => onEdit(0)} type="button" className="mt-2">
          Edit
        </Button>
      </section>

      {/* Account Info */}
      <section className="review-section mb-4 p-4 bg-gray-100 rounded">
        <h3 className="font-medium mb-2">Account Information</h3>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Password:</strong> {'••••••••'}
        </p>
        <Button variant="secondary" onClick={() => onEdit(1)} type="button" className="mt-2">
          Edit
        </Button>
      </section>

      {/* Terms */}
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            {...register("termsAccepted")}
            className="form-checkbox h-4 w-4"
          />
          <span>I agree to the Terms and Conditions and Privacy Policy.</span>
        </label>
        {errors.termsAccepted && (
          <p className="text-sm text-red-600 mt-1">{errors.termsAccepted.message}</p>
        )}
      </div>

      <div className="flex justify-between">
        <Button variant="secondary" onClick={onBack} type="button">
          Back
        </Button>
        <Button onClick={onSubmit} disabled={!stepValid} type="button">
          Submit
        </Button>
      </div>
    </div>
  );
}
