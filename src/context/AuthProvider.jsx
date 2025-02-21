import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    setAccessToken(token);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // const signInUser = async (email, password) => {
  //   setLoading(true);
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //     const tokenResponse = await axios.post("http://localhost:5000/jwt", { email });
  //     setAccessToken(tokenResponse.data.token);
  //   } catch (error) {
  //     console.error("Error signing in:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    setAccessToken(null);
    return signOut(auth);
  };

  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state captured", currentUser);
      setLoading(false);
      if (currentUser?.email) {
        axios
          .post("http://localhost:5000/jwt", {email: currentUser.email}, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.token) {
              setAccessToken(res.data.token);  
            }
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    accessToken
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
