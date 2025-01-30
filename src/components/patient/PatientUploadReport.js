import React from 'react';
import NavBar_Logout from '../NavBar_Logout';

function PatientUploadReport() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar_Logout />
      <div className="flex flex-col items-center justify-start min-h-screen space-y-8 p-6">
        {/* Form Section */}
        <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-custom-blue text-center mb-6">Upload Report</h1>

          {/* Form Fields */}
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-2" htmlFor="name">Report Name *</label>
              <input
                id="name"
                type="text"
                placeholder="Enter Title Here..."
                className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-300 mb-2" htmlFor="report">Report File *</label>
              <input
                id="report"
                type="file"
                className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-300 mb-2" htmlFor="additional-info">Additional Information</label>
              <input
                id="additional-info"
                type="text"
                placeholder="Details..."
                className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PatientUploadReport;
