import { useRef, useState } from "react";
import { people } from "../data/users";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Links } from "./Links";

export const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const message = useRef(null),
    email = useRef(null),
    password = useRef(null),
    loginForm = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const login = (e) => {
    e.preventDefault();

    if ((loginData.email && loginData.password) === "") {
      message.current.innerHTML = "Textboxes are empty";
      email.current.classList.add("error");
      password.current.classList.add("error");
      message.current.classList.add("error-message");
    } else {
      message.current.innerHTML = " ";
      email.current.classList.remove("error");
      password.current.classList.remove("error");
    }

    if (
      loginData.email === people[0].email &&
      loginData.password === people[0].password
    )
      message.current.innerHTML = `Hello ${people[0].name}`;
  };

  return (
    <>
      {/* Input Controls container */}
      <form className="login-control" onSubmit={login} ref={loginForm}>
        <h2 className="email-signin">Sign in with email</h2>

        {/* Error message */}
        <p className="message" ref={message} />

        {/* Email */}
        <div className="email-input">
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
        <div className="password-input">
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
    </>
  );
};
