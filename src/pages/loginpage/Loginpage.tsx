import React from "react";
import { Login } from "../../components";
import { Toaster } from "react-hot-toast";

const Loginpage = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Login />
    </>
  );
};

export { Loginpage };
