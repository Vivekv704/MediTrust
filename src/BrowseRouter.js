import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Web3 from "web3";
import PatientRegistry from "./components/patient/PatientRegistration";
import LoginPage from "./components/LoginPage";
import PatientDashBoard from "./components/patient/PatientDashBoard";
import DoctorDashBoard from "./components/doctor/DoctorDashBoard";
import DiagnosticDashBoard from "./components/diagnostic/DiagnosticDashBoard";
import RegisterPage from "./components/RegisterPage";
import DoctorLogin from "./components/doctor/DoctorLogin";
import DiagnosticLogin from "./components/diagnostic/DiagnosticLogin";
import PatientLogin from "./components/patient/PatientLogin";
import DiagnosticForm from "./components/diagnostic/DiagnosticForm";
import DoctorRegistry from "./components/doctor/DoctorRegistration";
import DiagnosticRegistry from "./components/diagnostic/DiagnosticsRegistration";
import Footer from "./components/Footer";
import LandingPage_1 from "./components/LandingPage_1";
import ViewPatientRecords from "./components/patient/ViewPatientRecords";
import ViewPatientList from "./components/patient/ViewPatientList";
import ViewProfile from "./components/patient/ViewProfile";
import ViewDoctorProfile from "./components/doctor/ViewDoctorProfile";
import ViewDiagnosticProfile from "./components/diagnostic/ViewDiagnosticProfile";
import AboutUs from "./components/AboutPage"; 
import NotFound from "./components/NotFound";
import PatientUploadReport from './components/patient/PatientUploadReport'
import PatientGrantPermission from './components/patient/PatientGrantPermission'
import DoctorViewRecord from './components/doctor/DoctorViewReport'
import DoctorAddPrescription from './components/doctor/DoctorAddPrescription'
import DiagnosticShareReport from './components/diagnostic/DiagnosticShareReport'
import DiagnosticViewReport from "./components/diagnostic/DiagnosticViewReport";

import Layout from "./Layer.js";

const BrowseRouter = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [loggedInPatient, setLoggedInPatient] = useState(false);

  // useEffect(() => {
  //   const init = async () => {
  //     if (window.ethereum) {
  //       const web3Instance = new Web3(window.ethereum);
  //       try {
  //         await window.ethereum.enable();
  //         setWeb3(web3Instance);

  //         const fetchedAccounts = await web3Instance.eth.getAccounts();
  //         setAccounts(fetchedAccounts);
  //       } catch (error) {
  //         console.error("User denied access to accounts.");
  //       }
  //     } else {
  //       console.log("Please install MetaMask extension");
  //     }
  //   };

  //   init();
  // }, []);
 
  return (
 
    <BrowserRouter>
        <Layout>
      <Routes>
      
        {/* Route Pages */}
      <Route path="/" element={<LandingPage_1></LandingPage_1>}></Route>
      <Route path="/AboutPage" element={<AboutUs></AboutUs>}></Route>
      <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        

        {/* Registration */}
        <Route path="/patient_registration"element={<PatientRegistry></PatientRegistry>}></Route>
        <Route path="/doctor_registration"element={<DoctorRegistry></DoctorRegistry>}></Route>
        <Route path="/diagnostic_registration"element={<DiagnosticRegistry></DiagnosticRegistry>}></Route>
        
        

         {/* Login */}
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/patient_login" element={<PatientLogin></PatientLogin>}></Route>
        <Route path="/doctor_login" element={<DoctorLogin></DoctorLogin>}></Route>
        <Route path="/diagnostic_login" element={<DiagnosticLogin></DiagnosticLogin>}></Route>
       



         {/* These three  - DASHBOARDS  */}
        <Route path="/patient/:hhNumber" element={<PatientDashBoard />}></Route> 
        <Route path="/doctor/:hhNumber" element={<DoctorDashBoard />}></Route>
        <Route path="/diagnostic/:hhNumber" element={<DiagnosticDashBoard />}></Route>
       

          {/* Profiles */}
        <Route  path="/patient/:hhNumber/viewprofile" element={<ViewProfile />}></Route>
        <Route path="/doctor/:hhNumber/viewdoctorprofile" element={<ViewDoctorProfile />}></Route>
        <Route path="/diagnostic/:hhNumber/viewdiagnosticprofile"element={<ViewDiagnosticProfile />}></Route>
        

         {/* View & Share Report Section */}
        <Route path="/patient/:hhNumber/viewrecords" element={<ViewPatientRecords />}></Route>
        <Route path="/diagnostic/:hhNumber/diagnosticform" element={<DiagnosticForm></DiagnosticForm>}></Route>
        <Route path="/doctor/:hhNumber/patientlist"element={<ViewPatientList />}></Route>
       

          {/* Upload / View  Reports */}
        <Route path="/patient/:hhNumber/uploadreport" element={<PatientUploadReport />}></Route>
        <Route path="/doctor/:hhNumber/viewreport"element={<DoctorViewRecord />}></Route>
        <Route path="/diagnostic/:hhNumber/viewreport" element={<DiagnosticViewReport/>}></Route>



        {/* Doctor Add Prescription */}
        <Route path="/doctor/:hhNumber/addprescription"element={<DoctorAddPrescription />}></Route>

        {/* Grant Permission by Patient */}
        <Route path="/patient/:hhNumber/grantpermission" element={<PatientGrantPermission />}></Route>
         
         {/* Share Report by Diagnostic */}
         <Route path="/diagnostic/:hhNumber/sharereport" element={<DiagnosticShareReport/>}></Route>


         {/* For any invalid path */}
       <Route path="*" element={<NotFound />}></Route>
     
      </Routes>
      </Layout>
        {/* This is Footer */}
      <Footer></Footer>

    </BrowserRouter>
    
  );
};

export default BrowseRouter;
