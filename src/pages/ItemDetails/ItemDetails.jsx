import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";

const ItemDetails = () => {
  const {
    _id,
    title,
    category,
    name,
    email,
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
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/3">
          <img
            src={thumbnail}
            alt="items"
            className="w-full h-auto object-cover"
          />
        </figure>

        <div className="card-body lg:w-2/3">
          <h2 className="card-title text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-sm text-gray-500">
            <span className="text-gray-800 font-medium pr-2">Category:</span>
            {category}
          </p>
          <p className="text-sm text-gray-500">
            <span className="text-gray-800 font-medium pr-2">Date:</span>
            {date}
          </p>
          <p className="flex gap-1 items-center">
            <FaMapMarkerAlt />
            <span className="text-gray-800 font-medium pr-2">Location:</span>
            {location}
          </p>
          <div>
            <span className="text-gray-800 font-medium pr-2">Posted By:</span>
            {contact ? (
              <>
                <p className="hover:text-purple-700 hover:bg-blue-200">
                  {contact.name}
                </p>
                <p className="hover:text-purple-700 hover:bg-blue-200">
                  {contact.email}
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-500">
                Contact information is not available.
              </p>
            )}
          </div>
          <p className="text-gray-800 font-medium">
            Status:
            <span className=" text-red-500 text-sm pl-2">
              {status}
            </span>
          </p>

          <div className="card-actions justify-end">
              {status?.toLowerCase() === "lost" ? (
                <button onClick={() => document.getElementById("my_modal_5").showModal()}
                className="btn bg-sky-500 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                  This is Mine!
                </button>
              ) : status?.toLowerCase() === "found" ? (
                <button onClick={() => document.getElementById("my_modal_5").showModal()}
                className="btn bg-yellow-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105">
                  Found this!
                </button>
              ) : null}
          </div>
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
