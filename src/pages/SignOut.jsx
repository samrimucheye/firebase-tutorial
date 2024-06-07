import React from "react";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

const SignOut = () => {
  const signOutUser = async () => {
    try {
      await signOut(auth);
      alert(`user signOut${auth.currentUser.displayName}`);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <button onClick={signOutUser} className="btn bg-red-600">
      SignOut
    </button>
  );
};

export default SignOut;
