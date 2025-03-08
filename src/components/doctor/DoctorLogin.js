import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/DoctorLoginPage.css";
import NavBar from "../NavBar";
import axios from "axios";

const DoctorLogin = () => {
  const navigate = useNavigate();
  const [hhNumber, sethhNumber] = useState("");
  const [password, setPassword] = useState("");
  const [hhNumberError, sethhNumberError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle HH Number Input
  const handlehhNumberChange = (e) => {
    const inputhhNumber = e.target.value;
    const phoneRegex = /^\d{6}$/;
    if (phoneRegex.test(inputhhNumber)) {
      sethhNumber(inputhhNumber);
      sethhNumberError("");
    } else {
      sethhNumber(inputhhNumber);
      sethhNumberError("Please enter a valid 6-digit HH Number.");
    }
  };

  // Handle Login Request
  const handleLogin = async () => {
    if (!hhNumber || !password) {
      alert("Please fill in all fields.");
      return;
    }
    let role = 'doctor'
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        hhNumber,
        password,
        role,
      });

      // Save token to localStorage and navigate to dashboard
      localStorage.setItem("doctorToken", response.data.token);
      alert("Login successful!");
      navigate(`/doctor/${hhNumber}`);
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  // Cancel Operation
  const cancelOperation = () => {
    navigate("/login");
  };

  return (
    <div>
      <NavBar />
      <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen flex flex-col justify-center items-center p-4 font-mono text-white">
        <div className="w-full max-w-4xl bg-gray-900 p-20 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Doctor Login</h2>

          {/* HH Number Input */}
          <div className="mb-4">
            <label htmlFor="hhNumber" className="block font-bold text-white">
              HH Number
            </label>
            <input
              id="hhNumber"
              name="hhNumber"
              type="text"
              placeholder="HH Number"
              value={hhNumber}
              onChange={handlehhNumberChange}
              required
              className={`mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200 ${
                hhNumberError && "border-red-500"
              }`}
            />
            {hhNumberError && (
              <p className="text-red-500 text-sm mt-1">{hhNumberError}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="flex flex-col w-full mb-4">
            <label className="mb-2 font-bold">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-center mt-2">{errorMessage}</p>
          )}

          {/* Action Buttons */}
          <div className="space-x-4 text-center mt-6">
            <button
              onClick={handleLogin}
              className="px-6 py-3 bg-teal-500 text-white font-bold text-lg rounded-lg cursor-pointer transition-transform transition-colors duration-300 ease-in hover:bg-teal-600 active:bg-teal-700"
            >
              Login
            </button>
            <button
              onClick={cancelOperation}
              className="px-6 py-3 bg-teal-500 text-white font-bold text-lg rounded-lg cursor-pointer transition-transform transition-colors duration-300 ease-in hover:bg-teal-600 active:bg-teal-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
