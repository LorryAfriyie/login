import { Link } from "react-router-dom";
import { Input } from "../components/input";

export const ForgotPassword = () => {
  return (
    <div>
      <h2>Forgot Password</h2>
      <form action="">
        <Input
          type={"email"}
          name={"email"}
          id={"email"}
          className={""}
          placeholder={"Enter your email"}
        />
      </form>
      <Link to={"/"}>Return to sign-in</Link>
    </div>
  );
};
