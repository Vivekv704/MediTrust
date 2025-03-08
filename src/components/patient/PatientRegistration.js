import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar";

const PatientRegister = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [hhNumber, sethhNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [bg, setBloodGroup] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleRegister = async () => {
    setErrors({});
    const newErrors = {};
    if (!name || !dateOfBirth || !homeAddress || !hhNumber || !gender || !bg ||  !password || !confirmPassword) {
      newErrors.general = "All fields are required.";
    }
    if (hhNumber.length !== 6) {
      newErrors.hhNumber = "HH Number must be 6 digits.";
    }
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        dateOfBirth,
        gender,
        bloodGroup: bg,
        homeAddress,
        email,
        hhNumber,
        password,
        phoneNumber,
      });

      alert(response.data.message);
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error.response?.data?.message || error.message);
      setErrors({ general: error.response?.data?.message || "Something went wrong" });
    } finally {
      setIsLoading(false);
    }
  };

  const cancelOperation = () => {
    navigate("/");
  };

  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-black to-gray-800 font-mono">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl text-white mb-6 font-bold text-center">Patient Registration</h2>
          <form className="bg-gray-900 p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div>
              <label className="block font-bold text-white">Full Name</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

            <div>
              <label className="block font-bold text-white">Date of Birth</label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

            <div>
              <label className="block font-bold text-white">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-white">Blood Group</label>
              <select
                value={bg}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              >
                <option value="">Select Blood Group</option>
                {["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"].map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-white">Home Address</label>
              <input
                type="text"
                placeholder="Enter your Permanent Address"
                value={homeAddress}
                onChange={(e) => setHomeAddress(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

            <div>
              <label className="block font-bold text-white">HH Number</label>
              <input
                type="text"
                placeholder="Enter your HH Number"
                value={hhNumber}
                onChange={(e) => sethhNumber(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

            <div>
              <label className="block font-bold text-white">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

        

            <div>
              <label className="block font-bold text-white">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

            <div>
              <label className="block font-bold text-white">Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>
            {errors.general && <p className="text-red-500">{errors.general}</p>}

            <div className="md:col-span-2 flex justify-center mt-6 space-x-4">
              <button onClick={handleRegister} disabled={isLoading} className="py-3 px-4 bg-teal-500 text-white rounded-md font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Register</button>
              <button onClick={cancelOperation} className="py-3 px-4 bg-teal-500 text-white rounded-md font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Close</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
