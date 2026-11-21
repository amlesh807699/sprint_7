# Prompts.md

# Sprint 07 – Registration Wizard
## AI-Assisted Debugging Documentation

### Project Overview

This project is a three-step Registration Wizard developed using React.js, JavaScript, Vite, React Hook Form, Zod, and plain CSS.

The application includes:

1. Personal Information
2. Account Details
3. Review & Submit

All application development and implementation work was carried out manually. AI assistance was used only to investigate errors, understand unexpected behaviour, and troubleshoot development issues.

---

## Debugging Prompts Used

### Prompt 1 – Vite Project Initialization Error

"I am setting up a React project using Vite, but the initialization process was interrupted. Help me understand the error, identify why the setup was unsuccessful, and provide the minimum commands required to resolve it. Do not generate the application code."

### Prompt 2 – Missing Dependencies

"My React project is reporting missing dependencies. Help me identify which packages are missing by examining the error and package.json. Explain how to verify the installed dependencies and resolve the issue using npm commands."

### Prompt 3 – React Import Resolution Error

"Vite is unable to resolve the React import from src/main.jsx. Investigate the possible causes, including missing dependencies, incorrect package installation, and node_modules issues. Provide PowerShell-compatible diagnostic commands. Do not rewrite my application files."

### Prompt 4 – Missing index.html

"My Vite production build reports that it cannot resolve index.html. Explain why Vite requires this file, how to verify the project root, and how to identify the correct entry point. Provide only the necessary correction."

### Prompt 5 – Form Validation Issue

"My registration form is accepting invalid input or displaying validation errors unexpectedly. Help me investigate the React Hook Form and Zod validation behaviour. Explain how to inspect form errors, field values, and validation results without generating a new form."

### Prompt 6 – Next Button Validation Issue

"The Next button is not correctly responding to the validation state of the current registration step. Help me debug the existing step-specific validation logic. Explain how watch(), trigger(), errors, and formState work together."

### Prompt 7 – Password Confirmation Issue

"Confirm Password validation is not updating correctly when the original password changes. Help me identify the cause in my existing React Hook Form and Zod implementation. Suggest the smallest possible correction."

### Prompt 8 – Date of Birth Validation Issue

"My date-of-birth validation is producing unexpected results. Help me investigate invalid dates, future dates, age calculation, and timezone-related issues. Explain the root cause and suggest a minimal fix."

### Prompt 9 – Password Visibility Issue

"The show/hide password button is not working correctly or its icon is incorrectly positioned. Help me debug the existing PasswordField component and CSS. Do not replace the entire component."

### Prompt 10 – Form Data Persistence Issue

"Some registration information appears to be lost when navigating between steps. Help me inspect the existing form state management and identify why values are not being preserved. Suggest a correction without changing the complete application architecture."

### Prompt 11 – Terms Acceptance Issue

"The final Submit button is not correctly responding to the terms acceptance checkbox. Help me investigate the checkbox state, validation rules, and submission conditions."

### Prompt 12 – Component Import Error

"My React application is reporting a missing module or unresolved component import. Help me investigate the file path, filename, export statement, and import statement. Provide diagnostic steps before suggesting code changes."

### Prompt 13 – Responsive CSS Issue

"My registration wizard layout is not displaying correctly on smaller screens. Help me debug the existing CSS grid, media queries, width constraints, and overflow issues. Keep the existing design and suggest only the necessary CSS corrections."

### Prompt 14 – Production Build Failure

"My npm run build command is failing. Analyze the exact terminal error, identify whether it is related to dependencies, configuration, missing files, or application code, and provide a step-by-step troubleshooting process."

### Prompt 15 – Vite Configuration Warning

"Vite is displaying a warning about ESM syntax being loaded as CommonJS in vite.config.js with configLoader native. Explain what this warning means, whether it affects the production build, and how to resolve it correctly."

### Prompt 16 – Final Debugging Review

"Help me review the remaining errors and warnings in my existing registration wizard. Separate actual build failures from non-blocking warnings. Suggest diagnostic steps and explain how I can personally verify each correction."

---

## Debugging Methodology

During development, I followed a problem-solving approach:

1. Reproduced the issue before attempting a correction.
2. Read the complete terminal or browser error message.
3. Identified the component, dependency, or configuration related to the issue.
4. Used AI assistance only to understand the error and investigate possible causes.
5. Applied the required correction manually.
6. Re-ran the relevant command or repeated the affected operation.
7. Verified the result before considering the issue resolved.

## Verified Development Progress

- React and React DOM dependencies were installed successfully.
- The installed dependency tree was checked using `npm ls react react-dom`.
- The missing Vite HTML entry file issue was corrected.
- The React import resolution issue was resolved after reinstalling React dependencies.
- Production build completed successfully.
- Vite generated the production files inside the dist directory.

**Latest Build Result:** Successful.

**Remaining Work:** Complete manual QA, GitHub submission, deployment, and QA video recording.