import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/input";
import { EmailValidation } from "../functions/ForgotPasswordValidation";
import { removeErrorBorder } from "../functions/SetBorder";

export const ForgotPassword = () => {
  // Email useState variable
  const [email, setEmail] = useState("");

  // Email useRef reference to DOM input element
  const userEmail = useRef(null);

  const sendNewPasswordRequest = (e) => {
    e.preventDefault();
    EmailValidation(userEmail);
  };

  useEffect(() => {
    removeErrorBorder(userEmail, "Please enter your email...");
  });

  return (
    <div className="forgot_password">
      <h2>Forgot Password</h2>
      <form action="" onSubmit={sendNewPasswordRequest}>
        <div className="form-control">
          <Input
            type={"email"}
            name={"email"}
            id={"email"}
            className={""}
            placeholder={"Enter your email"}
            onChange={(e) => setEmail(e.target.value)}
            ref={userEmail}
          />
        </div>

        <button type="submit">Send reset email</button>
      </form>

      <div className="link">
        <Link to={"/"}>Return to sign-in</Link>
        <i className="bi bi-arrow-right" />
      </div>
    </div>
  );
};
