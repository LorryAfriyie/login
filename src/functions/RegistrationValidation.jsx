import { setErrorBorder } from "./SetBorder";

export let CheckRegisterInputs = (name, surname, email, password) => {
  if (name.current.value.trim() === "")
    setErrorBorder(name.current, "First name input cannot blank.");

  if (surname.current.value.trim() === "")
    setErrorBorder(surname.current, "Surname input cannot blank.");

  if (email.current.value.trim() === "")
    setErrorBorder(email.current, "Email input cannot blank.");

  if (password.current.value.trim() === "")
    setErrorBorder(password.current, "Password input cannot blank.");
};
