import LandingFooter from "component/landing-footer";
import React from "react";
import { loginKey } from "utils/constants";
import storage from "utils/storage";

const Landing = () => {
  const handleLogin = () => {
    storage.set(loginKey, "access_token");
    window.location.reload();
  };

  return (
    <div>
      <p onClick={handleLogin}>Landing works</p>
      <LandingFooter />
    </div>
  );
};

export default Landing;
