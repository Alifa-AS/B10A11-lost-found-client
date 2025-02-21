import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdDelete } from "react-icons/md";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyPostedItems = () => {
  const [items, setItems] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      // Check if user exists before fetching

      axiosSecure
        .get(`/items?email=${user.email}`)
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        })
        .catch((error) => console.error("Error fetching items:", error));
    }
  }, [user?.email]);
  console.log(items);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/items/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your items has been deleted.",
                icon: "success",
              });
              setItems(items.filter((item) => item._id !== id));
            }
          });
      }
    });
  };

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
                <th>Items</th>
                <th>Status</th>
                <th>Deadline</th>
                <th>Location</th>
                <th>Contact</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
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
                            alt="image"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.title}</div>
                        <div className="text-sm opacity-50">
                          {item.category}
                        </div>
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
                  <td>{item.location}</td>
                  <td>
                    {item.contact.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {item.contact.email}
                    </span>
                  </td>
                  <th>
                    <Link to={`/updateItems/${item._id}`}>
                      <button className="btn btn-ghost btn-lg">
                        <MdOutlineSecurityUpdateGood />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-lg"
                    >
                      <MdDelete />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyPostedItems;
