import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-7">
        <ul>
          <h6 className="footer-title">Services</h6>
          <li>
            <NavLink
              to="/addNewCampaign"
              className={({ isActive }) =>
                isActive ? "text-green-950 font-bold underline" : ""
              }
            >
              AddCampaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myCampaign"
              className={({ isActive }) =>
                isActive ? "text-[#1c402e] font-bold underline" : ""
              }
            >
              MyCampaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myDonations"
              className={({ isActive }) =>
                isActive ? "text-[#1c402e] font-bold underline" : ""
              }
            >
              MyDonations
            </NavLink>
          </li>
        </ul>
        <ul>
          <h6 className="footer-title">Pages</h6>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#1c402e] font-bold underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allCampaign"
              className={({ isActive }) =>
                isActive ? "text-green-950 font-bold underline" : ""
              }
            >
              AllCampaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? "text-[#1c402e] font-bold underline" : ""
              }
            >
              All Users
            </NavLink>
          </li>
        </ul>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-2">
        <aside className="grid-flow-col items-center">
          <img className="w-12" src={logo} alt="" />
          <p>
            Lost & Found
            <br />
            Providing services since 2021
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/login/">
              <FaFacebook className="text-blue-600 text-2xl" />
            </a>
            <a href="https://www.youtube.com/">
              <FaYoutube className="text-red-600 text-2xl" />
            </a>
            <a>
              <FaInstagram className="text-purple-500 text-2xl"></FaInstagram>
            </a>
            <a>
              <FaXTwitter className="text-black text-2xl" />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
