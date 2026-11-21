// src/schemas/registrationSchema.js
import { z } from "zod";

// Helper dates for DOB validation (must be at least 18 years old and not in future)
const today = new Date();
const minDOB = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDate()
);

export const registrationSchema = z.object({
  // Step 1 – Personal Information
  firstName: z
    .string()
    .nonempty({ message: "First name is required" })
    .min(2, "First name must contain at least 2 characters")
    .regex(/^[A-Za-zÀ-ÿ'-]+$/, "First name may only contain letters"),
  lastName: z
    .string()
    .nonempty({ message: "Last name is required" })
    .min(2, "Last name must contain at least 2 characters")
    .regex(/^[A-Za-zÀ-ÿ'-]+$/, "Last name may only contain letters"),
  dateOfBirth: z
    .string()
    .nonempty({ message: "Date of birth is required" })
    .refine(
      (val) => {
        const d = new Date(val);
        return !isNaN(d) && d <= today && d <= minDOB;
      },
      {
        message:
          "Enter a valid date. You must be at least 18 years old and cannot select a future date.",
      }
    ),
  // Step 2 – Account Details
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/, 
      "Password must be at least 8 characters, include upper‑case, lower‑case, number and special character"
    ),
  confirmPassword: z.string().nonempty({ message: "Confirm password is required" }),
  // Step 3 – Terms
  termsAccepted: z.boolean().refine((v) => v === true, {
    message: "You must accept the Terms and Conditions",
  }),
})
  // Cross‑field validation: passwords must match
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
