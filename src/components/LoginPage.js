import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div>
    <NavBar></NavBar>
    <div className="flex items-center justify-center min-h-screen font-mono bg-gradient-to-b from-black to-gray-800">
      <div className="space-y-6 mt-[-50px] w-full max-w-xs mx-auto">
        <button
          className="w-full px-4 py-2 font-bold text-white transition duration-300 ease-in-out transform bg-teal-500 rounded hover:scale-110 hover:bg-gray-600"
          onClick={() => {
            navigate("/doctor_login");
          }}
        >
          Doctor Login
        </button>
        <button
          className="w-full px-4 py-2 font-bold text-white transition duration-300 ease-in-out transform bg-teal-500 rounded hover:scale-110 hover:bg-gray-600"
          onClick={() => {
            navigate("/patient_login");
          }}
        >
          Patient Login
          </button>
        <button
          className="w-full px-4 py-2 font-bold text-white transition duration-300 ease-in-out transform bg-teal-500 rounded hover:scale-110 hover:bg-gray-600"
          onClick={() => {
            navigate("/diagnostic_login");
          }}
        >
          Diagnostic/Hospital Login
        </button>
      </div>
      </div>
      </div>
  );
};

export default LoginPage;
