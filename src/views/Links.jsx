import { OAuthIcons } from "../components/alt_login";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/display-name
export const Links = () => {
  return (
    <>
      {/* Forgot password link */}
      <div className="link forgot-password">
        <Link to={"/forgot_password"}>Forgot password?</Link>
      </div>

      {/* 3rd party login icons component */}
      <OAuthIcons />

      {/* Sign up link */}
      <div className="link">
        <Link to={"/registration"} className="signup-link">
          Don&apos;t have an account? Sign up!
        </Link>
      </div>
    </>
  );
};
