import { setErrorBorder } from "./SetBorder";

export const EmailValidation = (email) => {
  if (email.current.value.trim() === "")
    setErrorBorder(email.current, "Email cannot be blank.");
};
