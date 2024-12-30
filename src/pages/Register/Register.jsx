import Lottie from "lottie-react";
import React from "react";
import registerLottie from "../../assets/lottie/register.json";

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    
        if(password.length < 6){
          setErrorMessage('password should be 6 character or more');
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
    
      }
    
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={registerLottie} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="ml-8 mt-4 text-4xl font-bold text-center">
              Login now!
            </h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
