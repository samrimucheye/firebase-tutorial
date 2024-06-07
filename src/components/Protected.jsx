import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import Chat from "./Chat";

const Protected = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogged(true);
      console.log("User is signed in:", user);
      // Update UI for signed-in user
    } else {
      setIsLogged(false);
      console.log("User is signed out");
      // Update UI for signed-out user
    }
  });
  return <div>{isLogged ? <Chat /> : children}</div>;
};

export default Protected;
