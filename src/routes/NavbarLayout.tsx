import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
const NavbarLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export { NavbarLayout };
