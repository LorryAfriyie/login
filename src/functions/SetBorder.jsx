import { validateEmail } from "./ValidateEmail";

export const setErrorBorder = (input, errorMessage) => {
  input.parentElement.className = "form-control error";
  input.placeholder = errorMessage;
};

export const removeErrorBorder = (input, placeholder) => {
  if (
    input.current.parentElement.className === "form-control error" &&
    input.current.name != "email"
  ) {
    input.current.addEventListener("input", () => {
      input.current.parentElement.className = "form-control";
      input.current.placeholder = placeholder;
    });
  }

  if (
    input.current.name === "email" &&
    input.current.parentElement.className === "form-control error"
  )
    input.current.addEventListener("input", () => {
      if (validateEmail(input.current.value)) {
        input.current.parentElement.className = "form-control";
        input.current.placeholder = placeholder;
      }
    });
};

export const setSuccessBorder = () => {};
