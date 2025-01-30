import React from "react";
import NavBar_Logout from "./NavBar_Logout";

function PatientGrantPermission() {
  // For Testing
  const doctors = [
    { hhNumber: "HH0001" },
    { hhNumber: "HH0002" },
    { hhNumber: "HH0003" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar_Logout />
      <div className="flex flex-col items-center justify-center min-h-screen space-y-6 p-6">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-semibold text-custom-blue">
            Grant Access to These Doctors
          </h1>
          <h4 className="text-lg font-light text-gray-300">
            They will be able to see all your reports
          </h4>
        </div>

        {/* Doctor Access List */}
        <div className="flex flex-col space-y-4 w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-md">
          {/* Input Section */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter the hh number here..."
              className="p-5 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <button className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientGrantPermission;
