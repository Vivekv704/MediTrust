import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="p-6 text-white bg-gray-800">
      <div className="container mx-auto">
        <div className="flex items-start justify-between mb-6 mt-12">
          {/* Contact Information */}
          <div className="w-1/4">
            <h3 className="mb-2 text-xl font-bold">Contact Information</h3>
            <p>
              <span className="font-bold">Address:</span> 123 Street, City
            </p>
            <p>
              <span className="font-bold">Phone:</span> +123 456 7890
            </p>
            <p>
              <span className="font-bold">Email:</span> DHD@company.com
            </p>
          </div>

          {/* Useful Links */}
          <div className="w-1/4">
            <h3 className="mb-2 text-xl font-bold">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div className="w-1/4">
            <h3 className="mb-2 text-xl font-bold">Other Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Security Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Medical Donors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Board Members Information
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center justify-center w-1/4">
            <a
              href="https://instagram.com/"
              className="flex items-center mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" className="mr-2" />
              <span className="text-lg font-semibold text-gray-200">Instagram</span>
            </a>
            <a
              href="https://facebook.com/"
              className="flex items-center mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} size="2x" className="mr-2" />
              <span className="text-lg font-semibold text-gray-200">Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-gupta4577"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="mr-2" />
              <span className="text-lg font-semibold text-gray-200">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
