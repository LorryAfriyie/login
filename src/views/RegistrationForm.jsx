import { Link } from "react-router-dom";
import { Input } from "../components/input";

export const RegistrationForm = () => {
  const register = (e) => {
    e.preventDefault();

    alert("Welcome");
  };
  return (
    <div className="register_section">
      <h2>Registration</h2>
      <form className="registration-form" onSubmit={register}>
        <div className="firstname">
          <Input
            type={"text"}
            name={"firstname"}
            id={"firstname"}
            className={""}
            placeholder={"Enter your first name"}
          />
        </div>

        <div className="surname">
          <Input
            type={"text"}
            name={"surname"}
            id={"surname"}
            className={""}
            placeholder={"Enter your surname"}
          />
        </div>

        <div className="user_email">
          <Input
            type={"email"}
            name={"email"}
            id={"email"}
            className={""}
            placeholder={"Enter your email address"}
          />
        </div>

        <div className="user_password">
          <Input
            type={"password"}
            name={"password"}
            id={"password"}
            className={""}
            placeholder={"Enter your password"}
          />
        </div>

        <div className="user_confirm_password">
          <Input
            type={"password"}
            name={"confirm_password"}
            id={"confirm_password"}
            className={""}
            placeholder={"Confirm your password"}
          />
        </div>

        <div className="submit_btn">
          <button type="submit">Register</button>
        </div>
      </form>

      <div className="link">
        <Link to={"/"}>Return to sign-in</Link>
      </div>
    </div>
  );
};
