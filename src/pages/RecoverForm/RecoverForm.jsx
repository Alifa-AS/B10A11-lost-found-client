import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const RecoverForm = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  // console.log(id, user);


  const [selectedDate, setSelectedDate] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const location = form.location.value;
    console.log(location);

    const recoverData = {
      location,
      date: selectedDate,
      // date: selectedDate ? selectedDate.toISOString() : null,
      item_id: id,
      contact: {
        name: user?.displayName || "Unknown",
        email: user?.email || "No Email",
      },
      photo: user?.photoURL,
    };
    console.log("Recover Data:", recoverData);
    console.log(user?.name);
console.log(user?.email);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });

    fetch("http://localhost:5000/recover", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(recoverData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Items has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/allRecover')
        }
      });
    console.log("Data before sending to the backend:", recoverData);
  };

  return (
    <div>
      <h3 className="label-text text-center font-bold text-3xl">Recovered Form</h3>
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
            defaultValue={user?.photoURL || ""}
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
