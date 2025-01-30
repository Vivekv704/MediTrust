import React from 'react';
import NavBar_Logout from '../NavBar_Logout';
import { Link } from 'react-router-dom';

function DoctorViewReport() {
 
  // For Testing
  const patients = [
    { hhNumber: '000002' },
    { hhNumber: '000003' },
    { hhNumber: '000004' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar_Logout />
      <div className="flex flex-col items-center justify-start min-h-screen space-y-6 p-4"> {/* Reduced padding */}
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-semibold text-custom-blue py-4">Your Patient List</h1> {/* Reduced padding here too */}
          <h4 className="text-lg font-light text-gray-300">Select a patient to view their reports</h4>
        </div>

        {/* Patient Access List */}
        <div className="flex flex-col space-y-4 w-full max-w-3xl">
          {patients.map((patient) => (
            <div key={patient.hhNumber} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-medium">Patient HH Number: {patient.hhNumber}</h2>
              <div className="space-x-4">
                <Link
                  to={`/patient/${patient.hhNumber}/viewrecords`}
                 className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300">View Reports</Link>
              </div>
              

              <div className="space-x-4">
                <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300">Remove Patient</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorViewReport;
