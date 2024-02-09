import { people } from "../data/users";

export let CheckLoginInputs = (message, email, password, data) => {
  // Check if the login and pasword state variables are empty
  if ((data.email && data.password) === "") {
    message.current.innerHTML = "Textboxes are empty";
    email.current.classList.add("error");
    password.current.classList.add("error");
    message.current.classList.add("error-message");
  } else {
    message.current.innerHTML = " ";
    email.current.classList.remove("error");
    password.current.classList.remove("error");
  }

  // Check if the state variable values match the record of stored email and password
  if (
    data.email === people[0].email &&
    data.password === people[0].password
  )
    message.current.innerHTML = `Hello ${people[0].name}`;
}