import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan email dan password yang diinput
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-3 text-center text-white">
          <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
            Login
          </span>
        </h2>
        <p className="text-slate-400 font-semibold text-sm">
          Sign in to your account
        </p>
        <form onSubmit={handleSubmit} className="mt-5 block">
          <div className="mb-6 mt-2">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
            >
              Email
            </label>
            <div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
            >
              Password
            </label>
            <div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className=" rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2.5 px-3 focus:outline-none focus:shadow-outline w-full"
            >
              LogIn
            </button>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-gray-600 hover:underline">
              Forgot password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
