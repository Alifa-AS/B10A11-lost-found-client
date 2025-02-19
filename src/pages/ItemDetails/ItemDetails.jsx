import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";

const ItemDetails = () => {
  const {
    title,
    category,
    date,
    location,
    thumbnail,
    description,
    contact,
    status,
  } = useLoaderData();
  console.log("Status:", status);
  console.log("Status value:", status);

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="max-w-3xl w-full bg-blue-100 backdrop-blur-xl shadow-lg border border-gray-200 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.1)]">
        {/* Image Section */}
        <div className="relative w-full h-64">
          <img
            src={thumbnail}
            alt="item"
            className="w-full h-full object-cover rounded-t-xl"
          />
          <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs uppercase tracking-wide shadow-md">
            {status}
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 text-gray-800 space-y-3">
          <h2 className="text-2xl font-bold text-blue-950">{title}</h2>
          <p className="text-sm leading-relaxed text-gray-700">{description}</p>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Category:</span>{" "}
              {category}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Date:</span> {date}
            </p>
            <p className="flex items-center gap-1 text-gray-700">
              <FaMapMarkerAlt className="text-red-500" />
              <span className="font-semibold text-gray-900">
                Location:
              </span>{" "}
              {location}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Status: </span>{" "}
              {status}
            </p>
            {contact ? (
              <>
                <p className="text-gray-700 hover:text-blue-600 transition-all">
                  <span className="font-semibold text-gray-900">
                    Posted By:
                  </span>{" "}
                  {contact.name}
                </p>
                <p className="text-gray-700 hover:text-blue-600 transition-all">
                  <span className="font-semibold text-gray-900">Email:</span>{" "}
                  {contact.email}
                </p>
              </>
            ) : (
              <p className="text-gray-500">Contact not available</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex justify-end">
            {status?.toLowerCase() === "lost" ? (
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md text-sm font-medium hover:scale-105 transition-all duration-300 hover:bg-blue-700"
              >
                This is Mine!
              </button>
            ) : status?.toLowerCase() === "found" ? (
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="bg-yellow-500 text-white px-5 py-2 rounded-lg shadow-md text-sm font-medium hover:scale-105 transition-all duration-300 hover:bg-yellow-600"
              >
                Found this!
              </button>
            ) : status?.toLowerCase() === "recovered" ? (
              <button
                disabled
                className="bg-green-500 text-white px-5 py-2 rounded-lg shadow-md text-sm font-medium cursor-not-allowed"
              >
                Recovered
              </button>
            ) : null}
          </div>

          {/* Modal */}
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
