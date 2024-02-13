import { showModal } from "./ModalFunctions";

export const EmailValidation = (e, email) => {
  e.preventDefault();
  if (email === "")
    showModal(
      "Email Error",
      "The textbox is empty, please provide your email.",
    );
};
