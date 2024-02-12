export const SuccessModal = () => {
  return (
    <div id="success_modal" className="modal">
      <div className="modal-content">
        <span className="close_button">&times;</span>
        <h2 className="message_heading">Success!</h2>
        <p className="message_body">Your form has been submitted successfully!</p>
      </div>
    </div>
  );
};
