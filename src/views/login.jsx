import { useEffect, useState, useRef } from "react";
import { people } from "../data/users";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { OAuthIcons } from "../components/alt_login";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

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
      document.querySelector(".message").innerHTML = "Textboxes are empty";
      document.querySelector(".email").classList.add("error");
      document.querySelector(".password").classList.add("error");
      document.querySelector(".message").classList.add("error-message");
    } else {
      document.querySelector(".message").innerHTML = " ";
      document.querySelector(".email").classList.remove("error");
      document.querySelector(".password").classList.remove("error");
    }

    if (
      loginData.email === people[0].email &&
      loginData.password === people[0].password
    )
      document.querySelector(".message").innerHTML = `Hello ${people[0].name}`;
  };

  return (
    <div className="login" id="login">
      {/* First Grid */}
      <div className="sec_1">
        {/* Input Controls container */}
        <form className="login-control" onSubmit={login}>
          <h2 className="email-signin">Sign in with email</h2>

          <p className="message" />

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
            />
          </div>
          {/* Login Button */}
          <div className="login-button">
            <Button type={"submit"} text={"Sign in"} />
          </div>
          {/* Forgot password link */}
          <div className="link forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          {/* 3rd party login icons component */}
          <OAuthIcons />
          {/* Sign up link */}
          <div className="link">
            <a href="#" className="signup-link">
              Don&apos;t have an account? Sign up!
            </a>
          </div>
        </form>
      </div>

      {/* Second Grid */}
      <div className="sec_2" />
    </div>
  );
};
