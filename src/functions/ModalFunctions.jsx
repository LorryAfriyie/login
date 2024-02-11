export const showModal = () => {
  const modal = document.getElementById("success_modal");
  modal.style.display = "block";

  const closeBtn = document.querySelector(".close_button");
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target === modal) modal.style.display = "none";
  };
};
