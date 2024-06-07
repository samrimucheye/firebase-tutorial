import React from "react";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase-config";

const SignByGoogle = () => {
  const provider = new GoogleAuthProvider();
  const handleSignInGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <button onClick={handleSignInGoogle}>
      <i class="fa-brands fa-google"></i>SignByGoogle
    </button>
  );
};

export default SignByGoogle;
