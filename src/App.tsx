import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./styles.css";

import NavigationBar from "./Components/Navbar";
import MyCarousel from "./Pages/Home";
import Home from "./Pages/Home";
import DonationPage from "./Pages/Donation";
import { Footer } from "./Components/Footer";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<MyCarousel />} /> */}
          <Route path="/donation" element={<DonationPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
