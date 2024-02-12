import { showModal } from "./ModalFunctions";

export const EmailValidation = (e, email) => {
  e.preventDefault();
  if (email === "") showModal();
};
