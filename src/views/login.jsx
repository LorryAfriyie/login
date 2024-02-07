import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { RegistrationForm } from "./RegistrationForm";
import { ForgotPassword } from "./ForgotPassword";

const router = createBrowserRouter([
  { path: "/", element: <LoginForm />, errorElement: "Not found" },
  { path: "/registration", element: <RegistrationForm /> },
  { path: "/forgot_password", element: <ForgotPassword /> },
]);

export const Login = () => {
  return (
    <div className="login" id="login">
      {/* First Grid */}
      <div className="sec_1">
        <RouterProvider router={router} />
      </div>

      {/* Second Grid */}
      <div className="sec_2" />
    </div>
  );
};
