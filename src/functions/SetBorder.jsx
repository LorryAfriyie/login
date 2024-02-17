export const setErrorBorder = (input, errorMessage) => {
  input.parentElement.className = "form-control error";
  input.placeholder = errorMessage;
};

export const removeErrorBorder = (input, placeholder) => {
  if (input.current.parentElement.className === "form-control error") {
    input.current.addEventListener("input", () => {
      input.current.parentElement.className = "form-control";
      input.current.placeholder = placeholder;
    });
  }
};

export const setSuccessBorder = () => {};
