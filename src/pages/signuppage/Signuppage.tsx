import React from "react";
import { Toaster } from "react-hot-toast";
import { Signup } from "../../components";
const Signuppage = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Signup />
    </>
  );
};

export { Signuppage };
