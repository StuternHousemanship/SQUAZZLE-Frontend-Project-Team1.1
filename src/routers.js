import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes } from "./url";
import { ReactComponent as LoadingIcon } from "./assets/svg/loading-icon.svg";
import LandingPage from "./pages/landingPage";
import SignUp from "./pages/signUp";
import Login from "./pages/login";

function Routers() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center mt-60">
            <LoadingIcon className="suspense-loading-icon" />
            <p className="text-center">Is Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route path={NonAuthRoutes.landingPage} element={<LandingPage />} />
          <Route path={NonAuthRoutes.signUp} element={<SignUp />} />
          <Route path={NonAuthRoutes.login} element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default Routers;