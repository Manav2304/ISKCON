import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import NavigationBar from "./Components/Navbar";
import MyCarousel from "./Pages/Home";
import Home from "./Pages/Home";
import DonationPage from "./Pages/Donation";
import DonationFormPage from "./Pages/Donation/form";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pages/Home" element={<MyCarousel />} />
          <Route path="/pages/Donation/" element={<DonationPage />} />
               <Route path="/donate" element={<DonationFormPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
