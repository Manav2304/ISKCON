import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import NavigationBar from "./Components/Navbar";
import MyCarousel from "./Pages/Home";
import AboutUs from "./Pages/About";
import Home from "./Pages/Home";
import DonationPage from "./Pages/Donation";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pages/Home" element={<MyCarousel />} />
          <Route path="/Pages/About" element={<AboutUs />} />
          <Route path="/pages/Donation" element={<DonationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
