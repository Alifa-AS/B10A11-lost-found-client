import React from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        const user = result.user;
        console.log(user);

        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);

            Swal.fire({
              title: "Login Successful!",
              text: "You have successfully logged in with Google.",
              icon: "success",
              confirmButtonText: "OK",
            }).then(() => {
              navigate("/");
            });
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn">
        <FcGoogle />
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
