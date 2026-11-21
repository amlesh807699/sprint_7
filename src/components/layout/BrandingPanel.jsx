// src/components/layout/BrandingPanel.jsx
import React from "react";

export default function BrandingPanel() {
  return (
    <aside className="branding-panel">
      <h1>Welcome to ProDesk IT</h1>
      <p>Create your account to access our premium SaaS platform.</p>
      <div className="branding-steps mt-6">
        <div className="branding-step mb-3 flex items-start">
          <div className="branding-step-number mr-2">1</div>
          <div>
            <strong>Personal Info</strong> – Your basic details.
          </div>
        </div>
        <div className="branding-step mb-3 flex items-start">
          <div className="branding-step-number mr-2">2</div>
          <div>
            <strong>Account Details</strong> – Secure login credentials.
          </div>
        </div>
        <div className="branding-step flex items-start">
          <div className="branding-step-number mr-2">3</div>
          <div>
            <strong>Review & Submit</strong> – Verify and finish.
          </div>
        </div>
      </div>
    </aside>
  );
}
