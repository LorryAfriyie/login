import { setErrorBorder } from "./SetBorder";

export let CheckRegisterInputs = (name, surname, email, password) => {
  if (name.current.value.trim() === "")
    setErrorBorder(name.current, "First name input cannot empty.");

  if (surname.current.value.trim() === "")
    setErrorBorder(surname.current, "First name input cannot empty.");

  if (email.current.value.trim() === "")
    setErrorBorder(email.current, "First name input cannot empty.");

  if (password.current.value.trim() === "")
    setErrorBorder(password.current, "First name input cannot empty.");
};
