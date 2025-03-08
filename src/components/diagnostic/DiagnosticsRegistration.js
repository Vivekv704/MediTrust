import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/DoctorRegistration.css";
import NavBar from "../NavBar";

const DiagnosticRegister = () => {
  
 
  const [name, setName] = useState("");
  const [diagnosticLocation, setDiagnosticLocation] = useState("");
  const [hhNumber, sethhNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [hhNumberError, sethhNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (
      !diagnosticLocation ||
      !name ||
      !hhNumber ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    alert("Diagnostic registered successfully!");
    navigate("/");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlehhNumberChange = (e) => {
    const inputhhNumber = e.target.value;
    sethhNumber(inputhhNumber);
    sethhNumberError(inputhhNumber.length === 6 ? "" : "HH Number must be 6 digits.");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  const cancelOperation = () => {
    navigate("/");
  };

  return (
    <div>
      <NavBar />
      <div className="createehr min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-black to-gray-800 font-mono">
        <div className="w-full max-w-2xl">
          <h2 className="text-3xl text-white mb-6 font-bold text-center">
            Diagnostic Registration
          </h2>
          <form className="bg-gray-900 p-6 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-4">
         

            {/* Diagnostic Name */}
            <div className="mb-4">
              <label className="block font-bold text-white">Diagnostic Center Name</label>
              <input
                type="text"
                placeholder="Enter Diagnostic's Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

      

            {/* Diagnostic Location */}
            <div className="mb-4">
              <label className="block font-bold text-white">Address</label>
              <input
                type="text"
                placeholder="Enter Diagnostic Center Location"
                value={diagnosticLocation}
                onChange={(e) => setDiagnosticLocation(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

        

            {/* HH Number */}
            <div className="mb-4">
              <label className="block font-bold text-white">HH Number</label>
              <input
                type="text"
                placeholder="HH Number"
                value={hhNumber}
                onChange={handlehhNumberChange}
                className={`mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200 ${
                  hhNumberError && "border-red-500"
                }`}
              />
              {hhNumberError && <p className="text-red-500 text-sm mt-1">{hhNumberError}</p>}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block font-bold text-white">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={handlePasswordChange}
                className={`mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200 ${
                  passwordError && "border-red-500"
                }`}
              />
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block font-bold text-white">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
              {confirmPasswordError && (
                <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
              )}
            </div>
          </form>

          <div className="text-center mt-6 space-x-4">
            <button onClick={handleRegister} className="py-3 px-4 bg-teal-500 text-white rounded-md font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Register</button>
            <button onClick={cancelOperation} className="py-3 px-4 bg-teal-500 text-white rounded-md font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticRegister;
