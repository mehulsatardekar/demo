import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {

  Loginpage,
  Signuppage,
} from "../pages/";
import { Footer, Navbar, Loader } from "../components";
import { ThemeSwitcher } from "../contexts";
import { NavbarLayout } from "./NavbarLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import Mockman from "mockman-js";
import { lazy, Suspense } from "react";

/*Route based  code splitting */
const HomePage = lazy(() => import('../pages/homepage/Homepage'));
const ExplorePage = lazy(() => import('../pages/explorepage/Explorepage'));
const ProfilePage = lazy(() => import('../pages/profilepage/Profilepage'));

const Routing = () => {
  return (
    <Router>
      <ThemeSwitcher>
        <Navbar />
        <Suspense fallback={<Loader />}>

          <Routes>
            <Route path="/login" element={<Loginpage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile/:username" element={<ProfilePage />} />
            </Route>

            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/signup" element={<Signuppage />} />
            <Route path="/mockman" element={<Mockman />} />
          </Routes>
        </Suspense>
        <Footer />
      </ThemeSwitcher>
    </Router>
  );
};

export { Routing };
