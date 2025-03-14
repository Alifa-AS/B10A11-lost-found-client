import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const AddPost = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  // console.log(id, user);

  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const handleAddItems = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData);
    const newPost = {
      ...initialData, 
      contact: {
        name: user?.displayName || "Anonymous",
        email: user?.email || "No Email",

      },
    }; 
    // console.log(newPost);

    fetch('https://lost-and-found-server-swart.vercel.app/items', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      
      body: JSON.stringify(newPost)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Items has been added",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/myPostedItems')
      }
    })

  }


    
  return (
    <div className="bg-blue-50 p-20">
      <h2 className="text-center pb-6 text-3xl font-extrabold text-blue-400 drop-shadow-lg">
        Add Lost & Found Items
      </h2>
      <form onSubmit={handleAddItems}>
        {/* items row1*/}
        <div className="md:flex mb-8">
          <div className="md:w-1/2 ml-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                type="text"
                name="title"
                placeholder="Item Title"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="md:w-1/2 ml-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select defaultValue="Items Category" name="category" className="select select-bordered w-full">
                <option disabled>
                  Items Category
                </option>
                <option>Pets</option>
                <option>Documents</option>
                <option>Gadgets</option>
                <option>Accessories</option>
                <option>Vehicles</option>
              </select>
            </label>
          </div>
        </div>
        {/* form row 2*/}
        <div className="md:flex mb-8">
          <div className="md:w-1/2 ml-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Date Lost or Found</span>
              </div>
              <DatePicker
                type="date"
                
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MM/dd/yyyy"
                placeholderText="Select a date"
                className="input input-bordered w-full"
                required
              />
              {/* hidden input */}
              <input
              type="hidden"
              name="date"
              value={selectedDate.toISOString().split("T")[0]}
              />
            </label>
          </div>
          <div className="md:w-1/2 ml-4">
          <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Image URL</span>
                </div>
                <input
                  type="text"
                  name="thumbnail"
                  placeholder="Image URL"
                  className="input input-bordered w-full"
                />
              </label>
          </div>
        </div>
        {/* form row 3*/}
        <div className="md:flex mb-8">
          <div className="md:w-1/2 ml-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Location</span>
              </div>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="md:w-1/2 ml-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">status</span>
              </div>
              <select defaultValue="Item Status" name="status" className="select select-bordered w-full">
                <option disabled>
                  Item Status
                </option>
                <option>Lost</option>
                <option>Found</option>
              </select>
            </label>
          </div>
        </div>
        {/* form row 3*/}
        <div className="md:flex mb-8">
          <div className="md:w-1/2 ml-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                defaultValue={user?.displayName || "Anonymous"}
                // name="name"
                // placeholder="name"
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>
          <div className="md:w-1/2 ml-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                defaultValue={user?.email || "No email"}
                // name="email"
                // placeholder="Email"
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>
        </div>
        {/* description row 4*/}
        <div className="ml-4 mb-8">
          <div className="w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                type="text"
                name="description"
                placeholder="Description"
                className="textarea textarea-bordered textarea-md w-full"
                required
              ></textarea>
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Items"
          className="btn btn-block bg-[#031e40] text-white"
          required
        />
      </form>
    </div>
  );
};

export default AddPost;
