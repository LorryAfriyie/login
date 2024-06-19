import { setErrorBorder } from "./SetBorder";
import { validateEmail } from "./ValidateEmail";

export let CheckLoginInputs = (message, email, password) => {
  if (email.current.value.trim() === "") {
    setErrorBorder(email.current, "Email cannot be blank.");
  }

  if (password.current.value.trim() === "")
    setErrorBorder(password.current, "Password cannot be blank.");

  if (!validateEmail(email.current.value.trim()))
    setErrorBorder(email.current, "Email is not valid.");
};
