import React, { useState } from "react";
import axios from "axios";

const NearbyShops = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  // Function to fetch nearby hospitals using OpenStreetMap (within 5km radius)
  const fetchShops = async (latitude, longitude) => {
    setLoading(true);
    setError(null);
    setUserLocation({ latitude, longitude }); // Save user's location

    const url = `https://nominatim.openstreetmap.org/search`;

    // Define a bounding box (5 km radius)
    const bbox = {
      minLat: latitude - 0.02,
      maxLat: latitude + 0.02,
      minLon: longitude - 0.02,
      maxLon: longitude + 0.02,
    };

    try {
      const response = await axios.get(url, {
        params: {
          q: "clinic",
          format: "json",
          addressdetails: 1,
          limit: 10,
          viewbox: `${bbox.minLon},${bbox.minLat},${bbox.maxLon},${bbox.maxLat}`,
          bounded: 1, // Limit results within the bounding box
        },
      });

      if (response.data.length === 0) {
        setError("No nearby hospitals found.");
      } else {
        setShops(response.data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("Failed to fetch nearby hospitals.");
    } finally {
      setLoading(false);
    }
  };

  // Get user's current location
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchShops(latitude, longitude);
        },
        () => {
          setError("Unable to retrieve location.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  // Open Google Maps with directions from user's location to hospital
  const openGoogleMaps = (hospital) => {
    if (!userLocation) return;

    const { latitude, longitude } = userLocation;
    const destinationLat = hospital.lat;
    const destinationLon = hospital.lon;

    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destinationLat},${destinationLon}`;

    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Nearby Clinic</h1>

        <div className="text-center mb-6">
          <button
            onClick={handleGetLocation}
            className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-teal-600"
          >
           Nearby Clinic
          </button>
        </div>

        {error && (
          <div className="text-center text-red-400 mb-4">
            <p>{error}</p>
          </div>
        )}

        {loading ? (
          <div className="text-center text-xl">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shops.length === 0 ? (
              <div className="col-span-full text-center text-xl">
                No hospitals found nearby.
              </div>
            ) : (
              shops.map((shop) => (
                <div
                  key={shop.place_id}
                  className="bg-teal-800 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-teal-700"
                  onClick={() => openGoogleMaps(shop)} // Navigate to Google Maps
                >
                  <h2 className="text-xl font-semibold">{shop.display_name}</h2>
                  <p className="mt-2">
                    {shop.address.road || "Address not available"}
                  </p>
                  <p className="text-sm text-teal-100 mt-1">
                    Type: {shop.type || "N/A"}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NearbyShops;




// import React, { useState } from 'react';
// import axios from 'axios'; // Import axios

// const NearbyShops = () => {
//   const [shops, setShops] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Foursquare API credentials

//   const client_id = 'HSH1LZUWZMKTD2EEVTBVA1CLQYULCLURFL4T1RNMV2M0BT53'; 
//   const client_secret = 'BAMBSQRVM4RR0F53ZTPZBYOGK0SU1YDZOVFAJAFTOXISUO1J'; 
//   const categoryId = '4bf58dd8d48988d196941735';

//   // Function to fetch shops based on user location
//   const fetchShops = async (latitude, longitude) => {
//     setLoading(true);
//     setError(null); // Reset previous errors

//     const version = '20250308'; 
//     const url = `https://api.foursquare.com/v2/venues/search?ll=${latitude},${longitude}&radius=500&categoryId=${categoryId}&client_id=${client_id}&client_secret=${client_secret}&v=${version}`;


//     try {
//       // Replace fetch with axios for making the API call
//       const response = await axios.get(url);
//       setShops(response.data.response.venues); // Access the data through the response object
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//       setError("Failed to fetch nearby shops.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to handle button click
//   const handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           fetchShops(latitude, longitude); // Fetch shops based on user's location
//         },
//         (error) => {
//           setError("Unable to retrieve location.");
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by this browser.");
//     }
//   };

//   return (
//     <div className="bg-black min-h-screen text-white-500">
//       <div className="container mx-auto p-6">
//         <h1 className="text-4xl font-bold text-center mb-8">Nearby Shops</h1>

//         {/* Button to trigger location and shop fetch */}
//         <div className="text-center mb-6">
//           <button
//             onClick={handleGetLocation}
//             className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-teal-600"
//           >
//             Find Nearby Shops
//           </button>
//         </div>

//         {/* Error message */}
//         {error && (
//           <div className="text-center text-red-400 mb-4">
//             <p>{error}</p>
//           </div>
//         )}

//         {/* Loading state */}
//         {loading ? (
//           <div className="text-center text-xl">Loading...</div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {shops.length === 0 ? (
//               <div className="col-span-full text-center text-xl">No shops found nearby.</div>
//             ) : (
//               shops.map((shop) => (
//                 <div key={shop.id} className="bg-teal-800 p-4 rounded-lg shadow-lg">
//                   <h2 className="text-xl font-semibold">{shop.name}</h2>
//                   <p className="mt-2">{shop.location.address || 'No address available'}</p>
//                   <p className="text-sm text-teal-100 mt-1">Rating: {shop.rating || 'N/A'}</p>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NearbyShops;
