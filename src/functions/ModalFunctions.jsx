export const showModal = (headerMsg, bodyMsg) => {
  let modal = document.getElementById("success_modal"),
    closeBtn = document.querySelector(".close_button"),
    msgHeader = document.querySelector(".message_header"),
    msgBody = document.querySelector(".message_body");

  modal.style.display = "block";

  msgHeader.innerText = headerMsg;
  msgBody.innerText = bodyMsg;

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target === modal) modal.style.display = "none";
  };
};
