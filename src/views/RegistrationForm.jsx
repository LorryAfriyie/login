import { Link } from "react-router-dom";

export const RegistrationForm = () => {
  return (
    <div className="registration_form">
      <h2>Registration Form</h2>
      <Link to={"/"}>Return to sign-in</Link>
    </div>
  );
};
