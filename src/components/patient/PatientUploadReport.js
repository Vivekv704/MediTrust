import { useState } from "react";
import axios from "axios";
import NavBar from "../NavBar";

const PatientFileUpload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const [title, setTitle] = useState(""); // Added state for title
  const account = true; // Ensure you have account logic if needed

  // Function to handle file selection
  const retrieveFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file && title) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        // Upload to Pinata
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: "c1c8e0ad3d3057fe5599",
            pinata_secret_api_key: "e79fd72794580cb99f49a04922c3997438f95d0476f948deddde12e1429736b2", // Use environment variables
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;

        // Send hash to your server
        try {
          const response = await axios.post("http://localhost:5000/api/patient/upload-report", {
            title: title,
            imgHash: ImgHash,
          });
          alert("Successfully Image Uploaded");

          // Reset states after submission
          setFileName("No image selected");
          setFile(null);
          setTitle(""); // Reset title
        } catch (error) {
          alert("File could not be added. Please Try Again");
        }
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    } else {
      alert("Please enter a title and select a file.");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="bg-gray-900 text-white min-h-screen mt-12">
        <div className="flex flex-col items-center justify-start min-h-screen space-y-8 p-6">
          {/* Form Section */}
          <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-teal-500 text-center mb-6">Upload Patient Report</h1>

            {/* Form Fields */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-lg font-medium text-gray-300 mb-4">Title</label>
                <input
                  type="text"
                  placeholder="Enter the Title of the File"
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <label className="block text-lg font-medium text-gray-300 mb-4 mt-4" htmlFor="file-upload">
                  Choose Report
                </label>
                <input
                  disabled={!account}
                  type="file"
                  id="file-upload"
                  name="data"
                  onChange={retrieveFile}
                  className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {/* <span className="text-white mt-2">Image: {fileName}</span> */}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 mt-4"
                  disabled={!file || !title} // Disable if no file or title is provided
                >
                  Upload File
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientFileUpload;
