import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { useParams, useNavigate } from "react-router-dom";
import "../../CSS/PatientDashBoard.css";
import NavBar_Logout from "../NavBar_Logout";
import PatientRegistration from "../../build/contracts/PatientRegistration.json";

const PatientDashBoard = () => {
  const { hhNumber } = useParams(); // Retrieve the hhNumber from the URL parameter

  const navigate = useNavigate();
  
  const viewRecord = () => {
    navigate("/patient/" + hhNumber + "/viewrecords");
  };

  const viewprofile = () => {
    navigate("/patient/" + hhNumber + "/viewprofile");
  };
  
  const uploadReport = () => {
    navigate("/patient/" + hhNumber + "/uploadreport");
  };

  const grantPermission = () => {
    navigate("/patient/" + hhNumber + "/grantpermission");
  };
  const nearByHospital = () => {
    navigate("/patient/" + hhNumber + "/near-by-hospital");
  };
  const nearByClinic = () => {
    navigate("/patient/" + hhNumber + "/near-by-clinic");
  };


  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [patientPhoneNo, setPatientPhoneNo] = useState(null);
  const [patientDetails, setPatientDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        const networkId = await web3Instance.eth.net.getId();
        const deployedNetwork = PatientRegistration.networks[networkId];
        const contractInstance = new web3Instance.eth.Contract(
          PatientRegistration.abi,
          deployedNetwork && deployedNetwork.address,
        );
        setContract(contractInstance);
        setPatientPhoneNo(hhNumber);
        try {
          const result = await contractInstance.methods.getPatientDetails(patientPhoneNo).call();
          setPatientDetails(result);
        } catch (error) {
          console.error('Error retrieving patient details:', error);
          setError('Error retrieving patient details');
        }
      } else {
        console.log('Please install MetaMask extension');
        setError('Please install MetaMask extension');
      }
    };

    init();
  }, [patientPhoneNo]);

  return (
    <div>
      <NavBar_Logout />
      <div className="bg-gradient-to-b from-black to-gray-800 p-4 sm:p-10 font-mono text-white h-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Patient Dashboard</h2>
        {patientDetails && (
          <p className="text-xl sm:text-2xl mb-24">
            Welcome{" "}
            <span className="font-bold text-yellow-500">{patientDetails.name}!</span>
          </p>
        )}

    {/* Button Section */}
<div className="w-full px-4 sm:px-0">
  {/* First Row */}
  <div className="flex flex-col sm:flex-row justify-center gap-5 mb-5">
    <button
      onClick={viewprofile}
      className="my-2 px-4 sm:px-8 py-4 sm:py-5 w-full sm:w-1/4 rounded-lg bg-teal-500 hover:bg-gray-600 transition-colors duration-300"
    >
      View Profile
    </button>
    <button
      onClick={viewRecord}
      className="my-2 px-4 sm:px-8 py-4 sm:py-5 w-full sm:w-1/4 rounded-lg bg-teal-500 hover:bg-gray-600 transition-colors duration-300"
    >
      View Record
    </button>
    <button
      onClick={uploadReport}
      className="my-2 px-4 sm:px-8 py-4 sm:py-5 w-full sm:w-1/4 rounded-lg bg-teal-500 hover:bg-gray-600 transition-colors duration-300"
    >
      Upload Reports
    </button>
  </div>

  {/* Second Row */}
  <div className="flex flex-col sm:flex-row justify-center gap-5">
    <button
      onClick={grantPermission}
      className="my-2 px-4 sm:px-8 py-4 sm:py-5 w-full sm:w-1/4 rounded-lg bg-teal-500 hover:bg-gray-600 transition-colors duration-300"
    >
      Grant Permission
    </button>
    <button
      onClick={nearByHospital}
      className="my-2 px-4 sm:px-8 py-4 sm:py-5 w-full sm:w-1/4 rounded-lg bg-teal-500 hover:bg-gray-600 transition-colors duration-300"
    >
      Find Nearby Hospitals
    </button>
    <button
      onClick={nearByClinic}
      className="my-2 px-4 sm:px-8 py-4 sm:py-5 w-full sm:w-1/4 rounded-lg bg-teal-500 hover:bg-gray-600 transition-colors duration-300"
    >
      Find Nearby Clinic
    </button>
  </div>
</div>
{/* Button Section Ends*/}

      </div>
    </div>
  );
};

export default PatientDashBoard;
