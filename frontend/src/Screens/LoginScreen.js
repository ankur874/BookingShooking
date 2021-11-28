import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
// import LinkButton from "../Components/LinkButton";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;
  console.log("error", error);
  const navigate = useNavigate();
  console.log("fssfg", userLogin);
  const dispatch = useDispatch();

  function loginhandler(e) {
    e.preventDefault();
    dispatch(login(email, password));
  }
  if (userInfo != null) {
    navigate("/");
  }
  return (
    <div className="grid grid-cols-8">
      <div className="col-start-1 col-end-1">
        <SideBar></SideBar>
      </div>

      <div className="col-start-2 col-span-7">
        <div className="flex flex-col h-screen bg-indigo-500 shadow-lg">
          <div className="grid place-items-center mx-2 my-20 sm:my-auto">
            <div
              className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
            >
              <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                Login
              </h2>

              <form className="mt-10" method="POST">
                <label
                  for="email"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                  name="email"
                  placeholder="e-mail address"
                  autocomplete="email"
                  className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />
                <label
                  for="password"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  autocomplete="current-password"
                  className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />

                <button
                  type="submit"
                  onClick={(e) => loginhandler(e)}
                  className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
                >
                  Login
                </button>

                <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                  <Link to="/signup" className="flex-2 underline">
                    Create an Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
