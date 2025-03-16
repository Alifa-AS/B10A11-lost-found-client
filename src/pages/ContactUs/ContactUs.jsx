import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Swal from "sweetalert2";
import contactImg from "../../assets/Sponsor/contact.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Success!",
      text: "Your message has been sent successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-20">
      {/* Contact Form + Image Card */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={contactImg}
            alt="Contact Us"
            className="w-full transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="lg:w-1/2 px-4">
          <h2 className="text-4xl mb-6 font-extrabold text-blue-400 drop-shadow-lg">
            Contact Us
          </h2>
          <p className="text-md mb-12 text-blue-400">
            We are here to help you with your lost and found items. Reach out to
            us for assistance.
          </p>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-2xl max-w-lg mx-auto transform transition-all duration-300 hover:shadow-xl"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-800 font-medium text-lg"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-800 font-medium text-lg"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-800 font-medium text-lg"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-md shadow-md hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-500 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Info + Social Media Card */}
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-xl my-10 transform transition-all duration-300 hover:shadow-2xl">
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-extrabold text-blue-400 drop-shadow-lg py-4">
            Get In Touch
          </h2>
          <p>
            Email:{" "}
            <a
              href="mailto:support@example.com"
              className="text-blue-400 hover:text-blue-800 transition duration-200"
            >
              support@example.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-blue-400 hover:text-blue-800 transition duration-200"
            >
              +1 234 567 890
            </a>
          </p>

          <div className="pt-5">
            <p className="font-medium mb-4">Follow Us On:</p>
          </div>
          <div className="mt-4 flex justify-center space-x-8">
            <a href="https://www.facebook.com/login/">
              <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800 transition duration-200" />
            </a>
            <a href="https://www.youtube.com/">
              <FaYoutube className="text-red-600 text-2xl hover:text-red-800 transition duration-200" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="text-purple-500 text-2xl hover:text-purple-700 transition duration-200" />
            </a>
            <a href="https://www.twitter.com/">
              <FaXTwitter className="text-black text-2xl hover:text-blue-500 transition duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
