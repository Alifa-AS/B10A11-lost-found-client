import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from "../../assets/logo.png";
import DataTheme from "./DataTheme/DataTheme";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // console.log("successful signOut");
      })
      .catch((error) => {
        console.log("failed to logOut", error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
        <div className="flex-1">
          <Link to="/" className="flex gap-2 items-center">
            <img className="w-auto h-7" src={logo} alt="" />
            <span className="font-bold">Lost & Found</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/items/all">All Items</Link>
            </li>

            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>

          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div title={`${user?.displayName} (${user?.email})`}  className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/addPostItems" className="justify-between">
                    Add Lost & Found Items
                  </Link>
                </li>
                <li>
                  <Link to="/allRecover">All Recovered Items</Link>
                </li>
                <li>
                  <Link to="/myPostedItems">Manage My Posted Items</Link>
                </li>

                <li className="mt-2">
                  <button
                    onClick={handleLogOut}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
          <div className="ml-4">
            <DataTheme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
