import { setErrorBorder } from "./SetBorder";

export let CheckLoginInputs = (message, email, password) => {
  if (email.current.value.trim() === "") {
    setErrorBorder(email.current, "Email cannot be blank.");
  }

  if (password.current.value.trim() === "")
    setErrorBorder(password.current, "Password cannot be blank.");

  if (!validateEmail(email.current.value.trim()))
    setErrorBorder(email.current, "Email is not valid.");
};

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}
