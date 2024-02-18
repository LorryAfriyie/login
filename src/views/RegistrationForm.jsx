import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/input";
import { CheckRegisterInputs } from "../functions/RegistrationValidation";
import { removeErrorBorder } from "../functions/SetBorder";

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
    password = useRef(null);

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

    CheckRegisterInputs(firstname, surname, email, password);
  };

  useEffect(() => {
    const inputs = [
      { item: firstname, message: "Please enter your firstname..." },
      { item: surname, message: "Please enter your surname..." },
      { item: email, message: "Please enter your email..." },
      { item: password, message: "Please enter your password..." },
    ];

    inputs.map((x) => removeErrorBorder(x.item, x.message));
  });
  return (
    <div className="register_section">
      <h2>Registration</h2>

      <form onSubmit={register}>
        <div className="form-control">
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
        </div>
        <div className="form-control">
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
        </div>

        <div className="form-control">
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
        </div>

        <div className="form-control">
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
        </div>

        <button type="submit">Register</button>
      </form>

      <div className="link">
        <Link to={"/"}>Return to sign-in</Link>
        <i className="bi bi-arrow-right" />
      </div>
    </div>
  );
};
