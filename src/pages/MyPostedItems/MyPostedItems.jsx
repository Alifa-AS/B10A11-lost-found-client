import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdDelete } from "react-icons/md";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";

const MyPostedItems = () => {
  const [items, setItems] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/items?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user.email]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center">
        My Posted Items: {items.length}
      </h2>
      {items.length === 0 ? (
  <p className="text-center text-gray-500 mt-4">No items found.</p>
) : (
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th></th>
              <th>Name</th>
              <th>Status</th>
              <th>Deadline</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => 
            <tr key={index}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-2">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.thumbnail}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.title}</div>
                          <div className="text-sm opacity-50">{item.location}</div>
                        </div>
                      </div>
                    </td>
                    <td>{item.status}</td>
                    <td>
                      {item.date}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {item.status}
                      </span>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-lg"><MdOutlineSecurityUpdateGood /></button>
                      <button className="btn btn-ghost btn-lg"><MdDelete /></button>
                    </th>
                  </tr>
               )}
          </tbody> 
        </table>
      </div>
        )}
    </div>
  );
};

export default MyPostedItems;
