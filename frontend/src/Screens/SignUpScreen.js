import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { register } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  console.log("fssfg", userLogin);
  const dispatch = useDispatch();

  function signUphandler(e) {
    e.preventDefault();
    dispatch(register(name, email, firstPassword));
  }
  if (userLogin.userInfo != null) {
    navigate("/");
  }

  return (
    <div className="grid grid-cols-8">
      <div className="col-start-1 col-end-1">
        <Sidebar></Sidebar>
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
                Create Account
              </h2>

              <form className="mt-10" method="POST">
                <label
                  for="name"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Name
                </label>
                <input
                  id="text"
                  type="text"
                  name="text"
                  value={name}
                  onInput={(e) => setName(e.target.value)}
                  placeholder="name"
                  autocomplete="text"
                  className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />

                <label
                  for="email"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
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
                  placeholder="password"
                  value={firstPassword}
                  onInput={(e) => setFirstPassword(e.target.value)}
                  autocomplete="current-password"
                  className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />

                <label
                  for="password"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Confirm Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={secondPassword}
                  onInput={(e) => setSecondPassword(e.target.value)}
                  placeholder="confirm password"
                  autocomplete="current-password"
                  className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />

                <button
                  type="submit"
                  onClick={(e) => signUphandler(e)}
                  className="w-full py-3 mt-5 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
                >
                  Sign-Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
