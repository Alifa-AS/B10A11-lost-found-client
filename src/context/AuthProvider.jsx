import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (user, name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };

  // const signInUser = (email, password) => {
  //   setLoading(true);
  //   setAccessToken(token);
  //   return signInWithEmailAndPassword(auth, email, password);
  // };

  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
  
      // Sending email for JWT
      await axios.post("https://lost-and-found-server-swart.vercel.app/jwt", { email }, { withCredentials: true });
  
      return userCredential; // Return the userCredential
    } catch (error) {
      console.error("Error signing in:", error);
      throw error; // Rethrow the error for handling in the Login component
    } finally {
      setLoading(false);
    }
  };
  

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
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
          .post(
            "https://lost-and-found-server-swart.vercel.app/jwt",
            { email: currentUser.email },
            { withCredentials: true }
          )
          .then((res) => {
            console.log("login token", res.data);
            // setLoading(false);
          });
      } else {
        axios
          .post(
            "https://lost-and-found-server-swart.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => console.log("logout", res.data));
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
    updateUserProfile,
    signInUser,
    signInWithGoogle,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
