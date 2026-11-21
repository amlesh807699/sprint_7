// src/components/wizard/RegistrationWizard.jsx
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "../../schemas/registrationSchema";
import ProgressBar from "./ProgressBar";
import StepIndicator from "./StepIndicator";
import StepOnePersonalInfo from "./StepOnePersonalInfo";
import StepTwoAccountDetails from "./StepTwoAccountDetails";
import StepThreeReview from "./StepThreeReview";
import SuccessScreen from "./SuccessScreen";
import BrandingPanel from "../layout/BrandingPanel";

export default function RegistrationWizard() {
  const methods = useForm({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    shouldUnregister: false,
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
  });

  const [step, setStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log("🗒️ Final registration data:", data);
    setIsSuccess(true);
  };

  const restart = () => {
    methods.reset();
    setStep(0);
    setIsSuccess(false);
  };

  if (isSuccess) {
    return <SuccessScreen onRestart={restart} />;
  }

  return (
    <FormProvider {...methods}>
      <div className="wizard-wrapper max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <BrandingPanel />
        <div className="wizard-card p-6">
          <ProgressBar step={step} />
          <StepIndicator step={step} />
          {step === 0 && <StepOnePersonalInfo onNext={() => setStep(1)} />}
          {step === 1 && (
            <StepTwoAccountDetails
              onBack={() => setStep(0)}
              onNext={() => setStep(2)}
            />
          )}
          {step === 2 && (
            <StepThreeReview
              onBack={() => setStep(1)}
              onEdit={(target) => setStep(target)}
              onSubmit={methods.handleSubmit(onSubmit)}
            />
          )}
        </div>
      </div>
    </FormProvider>
  );
}
