import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import MyCarousel from "./Pages/Home";
import Home from "./Pages/Home";
import DonationPage from "./Pages/Donation";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<MyCarousel />} />
          <Route path="/Donation/" element={<DonationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
