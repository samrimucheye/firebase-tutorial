import React from "react";

import ImageUpload from "./pages/ImageUplod";
import SignUP from "./pages/SignUP";
import SignIn from "./pages/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import SignByGoogle from "./pages/SignByGoogle";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-yellow-600 min-h-screen p-4 my-9">

        <h2>welcome to malede gashaw's chat</h2>

        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <SignUP />
                <hr />
                <SignIn />
                <SignByGoogle />
                <ImageUpload />
              </Protected>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
