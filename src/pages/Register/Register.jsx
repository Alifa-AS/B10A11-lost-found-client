import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import registerLottie from "../../assets/lottie/register.json";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    if (password.length < 6) {
      setErrorMessage("password should be 6 character or more");
      return;
    }

    // Check for at least one upperCase letter
    if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must include at least one uppercase letter");
      return;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      setErrorMessage("Password must include at least one lowercase letter");
      return;
    }

    //call create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message, error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={registerLottie} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="ml-8 mt-4 text-4xl font-bold text-center">
              Register now!
            </h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photo"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#1c402e] text-white">
                  Register
                </button>
              </div>
              <div>
                <p>
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-green-500 underline font-bold"
                  >
                    {" "}
                    Login{" "}
                  </Link>
                  Now!
                </p>
              </div>
            </form>
            <div className="my-4 mx-6">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
