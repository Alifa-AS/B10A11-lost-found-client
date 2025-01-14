import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestItemsCard = ({ item }) => {
  const {_id, title, category, name, email, date, location, thumbnail, description, contact, status } =
    item;

  return (
    <div className="card card-compact bg-base-100 shadow-xl lg:mx-2 md:mx-5 mx-8">
        <figure className="px-5 pt-5">
          <img className="w-72 h-40 object-cover rounded-xl" 
          src={thumbnail} 
          alt="items" />
        </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
          <p>{category}</p>
          <p>Date: {date}</p>
          <p className="flex gap-1 items-center">
            {" "}
            <FaMapMarkerAlt /> {location}
          </p>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
            <p className="border rounded-md text-center px-2 hover:text-purple-700 hover:bg-blue-200">
              {contact.name}</p>
            <p className="border rounded-md text-center px-2 hover:text-purple-700 hover:bg-blue-200">
              {contact.email}</p>
         
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="flex items-center font-bold gap-2"><span className="text-green-600">Status:</span> {status}</p>
        </div>
         <Link to={`/items/${_id}`}>
         <button className="btn bg-[#031e40] text-white">View Details</button>
         </Link>
      </div>
    </div>
  );
};

export default LatestItemsCard;
