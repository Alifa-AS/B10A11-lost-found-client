import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";


const RecoverForm = () => {
  const { id } = useParams();
  const { user } = useAuth();
  console.log(id, user);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const location = form.location.value;
    // const date = form.date.value;
    // const name = form.name.value;
    // const email = form.email.value;
    // const photo = form.photo.value;

    // const formData = { location, date, name, email, photo };
    // console.log(formData);

    const recoverData = {
      location,
      date: selectedDate,
      item_id: id,
      name: user?.name,
      email: user?.email,
      photo: user?.photoURL,
    };
     console.log("Recover Data:", recoverData);

     Swal.fire({
      title: "Success!",
      text: "Your recovery form has been submitted successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div>
      <h3 className="text-center font-bold text-3xl">Recovered Form</h3>
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
          {/* <input
                  type="date"
                  placeholder="date"
                  name="date"
                  className="input input-bordered"
                  required
                /> */}
          <DatePicker 
            type="date"
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
            className="input input-bordered"
            defaultValue={user?.name || ""} 
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
            className="input input-bordered"
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
            className="input input-bordered"
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
