import { showModal } from "./ModalFunctions";

export let CheckRegisterInputs = (data) => {
  if ((data.name && data.surname && data.email && data.password) === "")
    showModal();
};
