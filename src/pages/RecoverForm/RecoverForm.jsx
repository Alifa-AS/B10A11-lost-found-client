import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const RecoverForm = ({ item }) => {
  if (!item) {
    return <div>Loading...</div>;
  }
  const { thumbnail } = item;
  console.log(item);
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  // console.log(id, user);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const location = form.location.value;
    console.log(location);

    try {
      const itemResponse = await fetch(`http://localhost:5000/items/${id}`);
      const itemData = await itemResponse.json();

      if (itemData.status === "recovered") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This item has already been recovered!",
        });
        return;
      }

      const recoverData = {
        location,
        // date: selectedDate ? selectedDate.toISOString() : null,
        date: selectedDate
          ? `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1)
              .toString()
              .padStart(2, "0")}-${selectedDate
              .getDate()
              .toString()
              .padStart(2, "0")}`
          : null,
        item_id: id,
        contact: {
          name: user?.displayName || "Unknown",
          email: user?.email || "No Email",
        },
        // photo: user?.photoURL || "",
        photo: thumbnail,
      };

      const response = await fetch("http://localhost:5000/recover", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recoverData),
      });

      const result = await response.json();

      if (result.insertedId) {
        await fetch(`http://localhost:5000/items/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "recovered" }),
        });

        Swal.fire({
          icon: "success",
          title: "Item has been recovered!",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/allRecover");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: "Please try again later.",
      });
    }
  };

  return (
    <div>
      <h3 className="label-text text-center font-bold text-3xl">
        Recovered Form
      </h3>
      <form onSubmit={handleFormSubmit} className="card-body">
        {/* location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recovered Location</span>
          </label>
          <input
            type="text"
            placeholder="location"
            name="location"
            className="input input-bordered"
            required
          />
        </div>
        {/* date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Pick Date</span>
          </label>

          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select a date"
            className="input input-bordered w-full"
            required
          />
        </div>
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered label-text"
            defaultValue={user?.displayName || "Default Name"}
            readOnly
          />
        </div>
        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered label-text "
            defaultValue={user?.email || ""}
            readOnly
          />
        </div>
        {/* photo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">photo URL</span>
          </label>
          <input
            type="text"
            placeholder="photo"
            name="photo"
            className="input input-bordered label-text "
            // defaultValue={user?.photoURL || ""}
            defaultValue={thumbnail}
            readOnly
          />
        </div>

        <div className="form-control mt-5">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecoverForm;
