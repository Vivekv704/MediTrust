import React from "react";
import { useNavigate } from "react-router-dom";
import '../../src/CSS/AboutUs.css';
import NavBar from "./NavBar";
import hospitalImage from '../../src/images/hospital.png';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />

      {/* Hospital Image Section with Resize */}
      <div className="hospital-image-container mb-12 flex justify-center">
        <img
          src={hospitalImage}
          alt="Hospital"
          className="hospital-image max-w-3xl w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Main Content Section */}
      <div className="flex justify-center items-center py-12 bg-gray-100">
        <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-xl text-white">
          <h1 className="text-3xl font-bold text-center text-teal-400 mb-8">About Us</h1>

          <div className="space-y-8 text-left">
            {/* Who We Are Section */}
            <section className="about-section">
              <h2 className="text-2xl font-semibold text-teal-300">Who We Are</h2>
              <p className="text-lg">
                We are a dedicated team of healthcare professionals and
                technologists committed to revolutionizing the way Electronic
                Health Records (EHR) are managed. Our mission is to provide a
                secure, efficient, and user-friendly platform for managing Health data on blockchain.
              </p>
            </section>

            {/* What We Do Section */}
            <section className="about-section">
              <h2 className="text-2xl font-semibold text-teal-300">What We Do</h2>
              <p className="text-lg">
                Our health data exchange system provides a comprehensive solution for
                Doctors, Patients, and Diagnostic Centers. We leverage the
                power of Ethereum blockchain for secure data storage and smart
                contracts for access control and data management.
              </p>
            </section>

            {/* For Doctors Section */}
            <section className="about-section">
              <h3 className="text-xl font-semibold text-teal-200">For Doctors</h3>
              <p>
                Doctors can access the patient list assigned to them, view
                patient records and medical history, and write comments and
                treatment plans for treating patients.
              </p>
            </section>

            {/* For Patients Section */}
            <section className="about-section">
              <h3 className="text-xl font-semibold text-teal-200">For Patients</h3>
              <p>
                Patients can view their own medical records and history, upload
                new medical records, test reports, and other documents, and
                grant access to doctors.
              </p>
            </section>

            {/* For Diagnostic Centers Section */}
            <section className="about-section">
              <h3 className="text-xl font-semibold text-teal-200">For Diagnostic Centers</h3>
              <p>
                Diagnostic Centers can view comments and treatment plans from
                doctors and upload EHR reports to patient records.
              </p>
            </section>

            {/* Our Commitment Section */}
            <section className="about-section">
              <h2 className="text-2xl font-semibold text-teal-300">Our Commitment</h2>
              <p>
                We are committed to ensuring the integrity and security of
                patient data. Our system ensures that only authorized users
                have access to patient records. Patients have control over who
                can access their medical records and can grant or revoke access
                as needed.
              </p>
            </section>

            {/* Contact Us Section */}
            <section className="about-section">
              <h2 className="text-2xl font-semibold text-teal-300">Contact Us</h2>
              <p>
                We'd love to hear from you! If you have any questions or
                feedback, please feel free to contact us on Phone: +123 456 7890, Email: example@company.com.
              </p>
            </section>
          </div>

          {/* Back to Home Button */}
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-3 text-lg font-bold text-white bg-teal-500 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() => navigate("/")}
            >
              Back to Home Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
