import React from "react";
import NavBar from "./NavBar";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Heading */}
      <NavBar/>
      <h1 className="text-4xl md:text-5xl font-semibold text-center text-blue-500 mb-6">
        The Page You Are Looking For Is Not Found
      </h1>
      
      {/* Not Found Image */}
      <img
        src="https://img.freepik.com/free-vector/404-error-poster-with-page-found-use-website_1284-49339.jpg?size=626&ext=jpg"
        alt="Not Found"
        className="w-2/3 max-w-lg mb-8 rounded-lg shadow-xl"
      />
      
      {/* Additional Information */}
      <div className="text-center">
        <p className="text-lg text-zinc-300">
          It seems like the page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
        </p>
      </div>

      {/* Button to go back */}
      <div className="mt-6">
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}

export default NotFound;
