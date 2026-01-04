import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const[isSignIn,setIsSignIn]=useState(true);
    const toggleSignIn=()=>{
        setIsSignIn(!isSignIn);
    }

  return (
    <div className="relative h-screen w-screen">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg"
          alt="background"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Login Form */}
      <div className="relative flex justify-center items-center h-full">
        <form className="w-3/12 bg-black bg-opacity-80 p-12 rounded-md">
          <h1 className="text-white text-3xl font-bold mb-6">{isSignIn ? "Sign In":"Sign Up"}</h1>

          {
            !isSignIn && (
                <input type="text"
                placeholder="Name"
                className="w-full p-3 mb-4 bg-gray-700 text-white rounded-sm outline-none"
          />
            )
          }

          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-sm outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-gray-700 text-white rounded-sm outline-none"
          />

          <button className="w-full bg-red-600 text-white p-3 rounded-sm font-semibold hover:bg-red-700">
            {isSignIn ? "Sign In":"Sign Up"}
          </button>

          {/* Extra info */}
          <div className="flex justify-between items-center text-gray-400 text-sm mt-4">
            <label>
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <span className="cursor-pointer hover:underline">Need help?</span>
          </div>

          {/* New user info */}
          <p className="text-gray-400 mt-6">
            {isSignIn ? "New to Netflix":"Already have an account"}
            <span className="text-white cursor-pointer hover:underline" onClick={toggleSignIn}>
              {isSignIn ? "Sign In":"Sign Up"}
            </span>
          </p>

          <p className="text-gray-500 text-xs mt-3">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
