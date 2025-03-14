import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import axios from "axios";

const AllRecover = () => {
  const { user } = useAuth();
  const [recoverItems, setRecoverItems] = useState([]);
  const [isTableLayout, setIsTableLayout] = useState(true);
  // console.log(recoverItems);

  useEffect(() => {
    if (!user.email) return;

    axios.get(`https://lost-and-found-server-swart.vercel.app/recover?email=${user.email}`)
    .then(res =>{
        // console.log("API Response:", res.data);
        if (Array.isArray(res.data)) {
          setRecoverItems(res.data);
        } else {
          setRecoverItems([]);
        }
      
    })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("API Response:", data);
    //     if (Array.isArray(data)) {
    //       setRecoverItems(data);
    //     } else {
    //       setRecoverItems([]);
    //     }
    //   })
    
      .catch((error) => console.error("Error fetching recover items:", error));
  }, [user.email]);

  // Toggle layout function
  const toggleLayout = () => {
    setIsTableLayout((prevLayout) => !prevLayout);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-center py-10 text-3xl font-extrabold text-blue-400 drop-shadow-lg">
        All Recover Items
      </h2>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-medium">Recovered: {recoverItems.length}</p>
        <button onClick={toggleLayout} className="btn flex items-center">
          <span className="mr-2">Change Layout</span>
          <RiLayoutGrid2Fill />
        </button>
      </div>
      {recoverItems.length === 0 ? (
        <p className="text-center text-red-600 font-bold text-lg">
          ❌ No recovered items found!
        </p>
      ) : isTableLayout ? (
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="p-3"></th>
                <th className="p-3">Recovered</th>
                <th className="p-3">Pic Date</th>
                <th className="p-3">Pick Location</th>
                <th className="p-3">Status</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {recoverItems.map((item, index) => (
                <tr key={item._id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.photo || "default-thumbnail.jpg"}
                            alt={item.title || "No image"}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {item.contact.name || "N/A"}
                        </div>
                        <div className="text-sm opacity-50">
                          {item.contact.email || "N/A"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">{item.date || "N/A"}</td>
                  <td className="p-3">{item.location || "N/A"}</td>

                  {/* <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        item.status ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {item.status ? "Recovered" : "Not Found"}
                    </span>
                  </td> */}
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full text-white bg-green-500">
                      Recovered
                    </span>
                  </td>

                  <td className="p-3"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Card layout
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recoverItems.map((item) => (
            <div
              key={item._id}
              className="border p-4 rounded-lg shadow-lg relative"
            >
              <img
                src={item.photo || "default-thumbnail.jpg"}
                alt="Recovered Item"
                className="w-full h-40 object-cover rounded-md"
              />
              {/* Status Label */}
              <span className="absolute top-2 left-2 bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded">
                Recovered
              </span>
              <h3 className="text-lg font-semibold mt-2">{item.location}</h3>
              <p className="mt-1">
                <span className="font-semibold">Date:</span>{" "}
                {new Date(item.date).toLocaleDateString()}
              </p>
              <p className="mt-1">
                <span className="font-semibold text-green-600">
                  Recovered By :
                </span>{" "}
                <div>
                  <span className="font-semibold">Name:</span>{" "}
                  {item.contact.name || "N/A"}
                </div>
                <div>
                  <span className="font-semibold">Gmail:</span>{" "}
                  {item.contact.email || "N/A"}
                </div>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRecover;
