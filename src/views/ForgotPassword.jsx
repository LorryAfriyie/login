import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/input";
import { EmailValidation } from "../functions/ForgotPasswordValidation";
import { SuccessModal } from "../components/modal";

export const ForgotPassword = () => {
  // Email useState variable
  const [email, setEmail] = useState("");

  // Email useRef reference to DOM input element
  const userEmail = useRef(null);

  return (
    <div className="forgot_password">
      <h2>Forgot Password</h2>
      <form action="" onSubmit={(e) => EmailValidation(e, email)}>
        <Input
          type={"email"}
          name={"email"}
          id={"email"}
          className={""}
          placeholder={"Enter your email"}
          value={(e) => setEmail(e.target.value)}
          ref={userEmail}
        />

        <button type="submit">Send reset email</button>
      </form>

      <div className="link">
        <Link to={"/"}>Return to sign-in</Link>
      </div>

      <SuccessModal />
    </div>
  );
};
