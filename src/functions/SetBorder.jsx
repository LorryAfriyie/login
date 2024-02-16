export const setErrorBorder = (input, errorMessage) => {
  input.parentElement.className = "form-control error";
  input.placeholder = errorMessage;
};

export const setSuccessBorder = () => {};
