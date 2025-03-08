import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/DoctorRegistration.css";
import NavBar from "../NavBar";
import axios from "axios";

const DoctorRegister = () => {
  const [doctorName, setDoctorName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalLocation, setHospitalLocation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [hhNumber, sethhNumber] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    // Input Validation
    if (
      !doctorName ||
      !hospitalName ||
      !hospitalLocation ||
      !dateOfBirth ||
      !gender ||
      !hhNumber ||
      !specialization ||
      !department ||
      !designation ||
      !workExperience ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (hhNumber.length !== 6) {
      alert("Please enter a 6-digit HH Number.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Submit Data to Backend
    try {
      await axios.post("http://localhost:5000/api/doctors/register", {
        doctorName,
        hospitalName,
        hospitalLocation,
        dateOfBirth,
        gender,
        hhNumber,
        specialization,
        department,
        designation,
        workExperience,
        password,
      });

      alert("Doctor registered successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error registering doctor:", error);
      alert("An error occurred while registering the doctor.");
    }
  };

  const cancelOperation = () => {
    navigate("/register");
  };

  return (
    <div>
      <NavBar />
      <div className="createehr min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-black to-gray-800 font-mono">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl text-white mt-4 mb-6 font-bold text-center">
            Doctor Registration
          </h2>
          <form className="bg-gray-900 p-6 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Doctor Name */}
            <div>
              <label className="block font-bold text-white">Full Name</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

            {/* Hospital Name */}
            <div>
              <label className="block font-bold text-white">Hospital Name</label>
              <input
                type="text"
                placeholder="Enter Hospital Name"
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

            {/* Hospital Location */}
            <div>
              <label className="block font-bold text-white">
                Hospital Location
              </label>
              <input
                type="text"
                placeholder="Enter Hospital Location"
                value={hospitalLocation}
                onChange={(e) => setHospitalLocation(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block font-bold text-white">Date of Birth</label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

            {/* Gender */}
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

            {/* HH Number */}
            <div>
              <label className="block font-bold text-white">HH Number</label>
              <input
                type="text"
                placeholder="Enter HH Number"
                value={hhNumber}
                onChange={(e) => sethhNumber(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

            {/* Specialization */}
            <div>
              <label className="block font-bold text-white">Specialization</label>
              <input
                type="text"
                placeholder="Enter Specialization"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block font-bold text-white">Department</label>
              <input
                type="text"
                placeholder="Enter Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

            {/* Designation */}
            <div>
              <label className="block font-bold text-white">Designation</label>
              <input
                type="text"
                placeholder="Enter Designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

            {/* Work Experience */}
            <div>
              <label className="block font-bold text-white">
                Work Experience (Years)
              </label>
              <input
                type="number"
                placeholder="Enter Work Experience"
                value={workExperience}
                onChange={(e) => setWorkExperience(e.target.value)}
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
              />
            </div>

            {/* Register and Cancel Buttons */}
            <div className="col-span-2 flex justify-center items-center  mt-6">
              <button
                type="button"
                onClick={handleRegister}
                className="py-3 px-4 bg-teal-500 text-white rounded-md font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mr-10"
              >
                Register
              </button>

              <button
                type="button"
                onClick={cancelOperation}
                className="py-3 px-4 bg-teal-500 text-white rounded-md font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegister;
