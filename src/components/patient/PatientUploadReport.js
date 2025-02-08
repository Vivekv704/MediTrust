import React , { useEffect, useState } from 'react';
import NavBar_Logout from '../NavBar_Logout';
import Web3 from 'web3';


function PatientUploadReport() {

  // User Data
  const[reportName , setReportName] = useState('');
  const[reportFile , setReportFile] = useState('');
  const[additionalInformation , setAdditionalInformation] = useState('');

  // Setting up web3
  const[web3  , setWeb3] = useState('')
  const[account , setAccount] = useState('')
  const[network , setNetwork] = useState('')


  // useEffect(() => {
  //    const init = async () => {
  //       if(Web3.etherem) {
  //       const Web3instance = new 
  // }
  //    }

  //    init();
  // } , [])

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
                value={reportName}
                onChange={(e) = setReportName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-300 mb-2" htmlFor="report">Report File *</label>
              <input
                id="report"
                type="file"
                className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={reportFile}
                onChange={setReportFile(e.target.file[0])}
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
                value={additionalInformation}
                onChange={(e) = setAdditionalInformation(e.target.value)}
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
