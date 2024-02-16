import { useRef, useState } from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Links } from "./Links";
import { CheckLoginInputs } from "../functions/LoginValidation";
import { SuccessModal } from "../components/modal";

export const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // useRef hooks
  const message = useRef(null),
    email = useRef(null),
    password = useRef(null),
    loginForm = useRef(null);

    
  // Check for input values in inputs and store them into the loginData state hook
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const login = (e) => {
    e.preventDefault();
    CheckLoginInputs(message, email, password);
  };

  let test = document.getElementById('email');

  return (
    <>
      {/* Input Controls container */}
      <form className="login-control" ref={loginForm} onSubmit={login}>
        <h2 className="email-signin">Sign in with email</h2>

        {/* Error message */}
        <p className="message" ref={message} />

        {/* Email */}
        <div className="form-control">
          <Input
            type={"email"}
            name={"email"}
            id={"email"}
            className={"email"}
            placeholder={"Enter your email"}
            value={loginData.email}
            onChange={handleInputChange}
            ref={email}
          />
        </div>

        {/* Password */}
        <div className="form-control">
          <Input
            type={"password"}
            name={"password"}
            id={"password"}
            className={"password"}
            placeholder={"Enter your password"}
            value={loginData.password}
            onChange={handleInputChange}
            ref={password}
          />
        </div>

        {/* Login Button */}
        <div className="login-button">
          <Button type={"submit"} text={"Sign in"} />
        </div>

        <Links />
      </form>

      <SuccessModal />
    </>
  );
};
