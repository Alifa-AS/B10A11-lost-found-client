import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";

const AllRecover = () => {
  const { user } = useAuth();
  const [recoverItems, setRecoverItems] = useState([]);
  console.log(recoverItems);

  useEffect(() => {
    if (!user.email) return; 
  
    fetch(`http://localhost:5000/recover?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        if (Array.isArray(data)) {
          setRecoverItems(data);
        } else {
          setRecoverItems([]); 
        }
      })
      .catch((error) => console.error("Error fetching recover items:", error));
  }, [user.email]);
  

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-center text-3xl font-bold py-10">
        All Recovered Items : {recoverItems.length}
      </h2>
      {recoverItems.length === 0 ? (
        <p className="text-center text-red-600 font-bold text-lg">
          ❌ No recovered items found!
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="p-3"></th>
                <th className="p-3">Item</th>
                <th className="p-3">Pic Date</th>
                <th className="p-3">Pick Location</th>
                <th className="p-3">Status</th>
                <th className="p-3">Details</th>
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
                            src={item.thumbnail || "default-thumbnail.jpg"}
                            alt={item.title || "No image"}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.title || "N/A"}</div>
                        <div className="text-sm opacity-50">
                          {item.category || "N/A"}
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

                  <td className="p-3">
                    <button className="btn border-indigo-800 btn-xs">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllRecover;
