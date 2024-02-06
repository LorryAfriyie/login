import { OAuthIcons } from "../components/alt_login";

export const Links = ({}) => {
  return (
    <>
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
    </>
  );
};
