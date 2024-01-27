import { useState } from "react";
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

  const login = () => {
    if (
      loginData.email === people[0].email &&
      loginData.password === people[0].password
    )
      alert(`Hello ${people[0].name}!`);
    else {
      alert("Incorrect login details.");
    }
  };

  return (
    <div className="login" id="login">
      <div className="sec_1">
        <div className="login-control">
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

          <div className="login-button">
            <Button type={"submit"} onClick={login} text={"Sign in"} />
          </div>
        </div>

        <OAuthIcons />
      </div>

      <div className="sec_2" />
    </div>
  );
};
