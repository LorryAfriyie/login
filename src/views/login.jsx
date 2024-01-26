import { useState } from "react";
import { people } from "../data/users";

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
            <input
              type="text"
              name="email"
              id="email"
              className="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="password-input">
            <input
              type="password"
              name="password"
              id="password"
              className="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="login-button">
            <button type="submit" onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="sec_2" />
    </div>
  );
};
