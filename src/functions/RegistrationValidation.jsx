export let CheckRegisterInputs = (data) => {
  if ((data.name && data.surname && data.email && data.password) === "")
    alert("Please fill in all the textboxes.");
};
