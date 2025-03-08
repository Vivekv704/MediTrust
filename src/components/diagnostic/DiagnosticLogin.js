import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../CSS/DoctorLoginPage.css";
import NavBar from "../NavBar";

const DiagnosticLogin = () => {
  const navigate = useNavigate();
  const [hhNumberError, sethhNumberError] = useState("");
  const [hhNumber, sethhNumber] = useState("");
  const [password, setPassword] = useState("");

  // Handle HH Number Change
  const handlehhNumberChange = (e) => {
    const inputhhNumber = e.target.value;
    const hhRegex = /^\d{6}$/;
    if (hhRegex.test(inputhhNumber)) {
      sethhNumber(inputhhNumber);
      sethhNumberError("");
    } else {
      sethhNumber(inputhhNumber);
      sethhNumberError("Please enter a 6-digit HH Number.");
    }
  };

  // Handle Login Submission
  const handleLogin = async () => {
    if (!hhNumber || !password) {
      alert("Please fill in all fields.");
      return;
    }
    let role = 'hospital'
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        hhNumber,
        password,
        role
      });

      if (response.status === 200) {
        alert("Login successful!");
        navigate(`/diagnostic/${hhNumber}`);
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Login failed. Please try again.");
      } else {
        alert("An error occurred. Please try again later.");
      }
      console.error("Error during login:", error);
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Diagnostic Login</h2>

          {/* HH Number Input */}
          <div className="mb-4">
            <label className="block font-bold text-white" htmlFor="hhNumber">
              HH Number
            </label>
            <input
              id="hhNumber"
              name="hhNumber"
              type="text"
              required
              placeholder="HH Number"
              value={hhNumber}
              onChange={handlehhNumberChange}
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

export default DiagnosticLogin;
