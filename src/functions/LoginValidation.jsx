export let CheckLoginInputs = (message, email, password) => {
  validateField(
    email.current,
    email.current.value.trim() === "",
    "Email cannot be empty.",
  );

  /*   if (email.current.value.trim() === "") {
  } */

  /* // Check if the login and pasword state variables are empty
  if ((data.email && data.password) === "") {
    email.current.classList.add("error");
    password.current.classList.add("error");
    showModal("Login Error", "Textboxes are empty");
  } else {
    message.current.innerHTML = " ";
    email.current.classList.remove("error");
    password.current.classList.remove("error");
  }

  // Check if the state variable values match the record of stored email and password
  if (data.email === people[0].email && data.password === people[0].password)
    message.current.innerHTML = `Hello ${people[0].name}`; */
};

const validateField = (input, condition, errMessage) => {
  if (condition) setErrorBorder(input, errMessage);
};

const setErrorBorder = (input, errMessage) => {
  input.parentElement.className = "form-control error";
  input.placeholder = errMessage;
};
