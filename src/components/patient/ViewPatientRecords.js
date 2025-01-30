import React from "react";
import NavBar_Logout from "../NavBar_Logout";
import { Link } from "react-router-dom";

function ViewPatientRecords() {
 
  // For Testing
  const report_url = 'https://docs.google.com/spreadsheets/u/0/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/edit?pli=1'
  const reports = [
    { title: "Report 1" },
    { title: "Report 2" },
    { title: "Report 3" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen mt-6">
      <NavBar_Logout />
      <div className="flex flex-col items-center justify-start min-h-screen space-y-4 p-4">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-semibold text-custom-blue py-6">Patient Records</h1>
        </div>

        {/* Report List */}
        <div className="flex flex-col space-y-4 w-full max-w-3xl">
          {reports.map((report, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <h2 className="text-xl font-medium">{index + 1}. {report.title}</h2>
              <Link 
              to={report_url}
              target="_blank" 
              className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300">
                View Report
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewPatientRecords;
