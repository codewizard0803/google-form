/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import { toast } from "react-toastify";

const AuthAdmin = ({ isLoggedIn, setIsLoggedIn }) => {
  const APP_URL = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();
  const [error, setError] = useState();

  const [adminInfo, setAdminInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${APP_URL}/api/adminAuth`, adminInfo).then((res) => {
      if (res.data === "success") {
        setIsLoggedIn(true);
        navigate("/dashboard");
      } else {
        setError("userName or password is not correct.");
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-green-400 underline">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className={classnames(
                "block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40",
                { "border-red-500": error }
              )}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className={classnames(
                "block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40",
                { "border-red-500": error }
              )}
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthAdmin;
