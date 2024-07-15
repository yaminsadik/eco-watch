// components/SignupButton.js
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignup = async () => {
    await loginWithRedirect({
      screen_hint: "signup",
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
    <button className="button__signup" onClick={handleSignup}>
      Sign Up
    </button>
  );
};
