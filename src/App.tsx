import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import NavigationBar from "./Components/Navbar";
import HomePage from "./Pages/Home";
import { Footer } from "./Components/Footer";
import { bgImage } from "./bgImage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
export const App: React.FunctionComponent = () => {
  return (
    <>
      <div style={bgImage.body}>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};
