export const Button = ({ type, onClick, text }) => {
  return (
    <button type={type} onClick={onClick}>
      <span></span>
      {text}
      <span></span>
    </button>
  );
};
