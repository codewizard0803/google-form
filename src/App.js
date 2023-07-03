/** @format */
import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import GoogleForm from "./component/GoogleForm";
import GlobalContextProvider from "./context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthAdmin from "./component/admin/auth";
import DashBoard from "./component/admin/dashboard";
import UnauthorizedPage from "./component/UnauthorizedPage";
import { HashRouter } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <HashRouter>
      <GlobalContextProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<GoogleForm />} />

          <Route
            path="/admin"
            element={
              <AuthAdmin
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          {isLoggedIn ? (
            <Route path="/dashboard" element={<DashBoard />} />
          ) : (
            <Route
              path="/dashboard"
              element={<Navigate to="/unauthorized" />}
            />
          )}
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
        </Routes>
      </GlobalContextProvider>
    </HashRouter>
  );
}

export default App;
