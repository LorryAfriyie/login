import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/input";
import { CheckRegisterInputs } from "../functions/RegistrationValidation";
import { SuccessModal } from "../components/modal";

export const RegistrationForm = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  // useRef hooks
  const firstname = useRef(null),
    surname = useRef(null),
    email = useRef(null),
    password = useRef(null),
    message = useRef(null);

  // Check for input values in inputs and store them into the loginData state hook
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRegisterData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  // Register function
  const register = (e) => {
    e.preventDefault();

    CheckRegisterInputs(registerData);
  };
  return (
    <div className="register_section">
      <h2>Registration</h2>

      <form onSubmit={register}>
        <Input
          type={"text"}
          name={"name"}
          id={"name"}
          className={""}
          placeholder={"Enter your first name"}
          value={registerData.name}
          onChange={handleInputChange}
          ref={firstname}
        />

        <Input
          type={"text"}
          name={"surname"}
          id={"surname"}
          className={""}
          placeholder={"Enter your surname"}
          value={registerData.surname}
          onChange={handleInputChange}
          ref={surname}
        />

        <Input
          type={"email"}
          name={"email"}
          id={"email"}
          className={""}
          placeholder={"Enter your email address"}
          value={registerData.email}
          onChange={handleInputChange}
          ref={email}
        />

        <Input
          type={"password"}
          name={"password"}
          id={"password"}
          className={""}
          placeholder={"Enter your password"}
          value={registerData.password}
          onChange={handleInputChange}
          ref={password}
        />

        <button type="submit">Register</button>
      </form>

      <div className="link">
        <Link to={"/"}>Return to sign-in</Link>
      </div>

      <SuccessModal />
    </div>
  );
};
