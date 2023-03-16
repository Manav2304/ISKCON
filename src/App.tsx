import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import NavigationBar from "./Components/Navbar";
import MyCarousel from "./Pages/Home";
import AboutUs from "./Pages/About";
import Home from "./Pages/Home";
import DonationPage from "./Pages/Donation";
import { LifeTimeMembership } from "./Pages/Servicespage/LifeTimeMembership";
import { IskconYouthForum } from "./Pages/Servicespage/IskconYouthForum";
import { GuestHouse } from "./Pages/Servicespage/GuestHouse";
import { Gaushala } from "./Pages/Servicespage/Gaushala";
import { DeityWorship } from "./Pages/Servicespage/DeityWorship";
import { DevoteeKitchen } from "./Pages/Servicespage/DevoteeKitchen";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pages/Home" element={<MyCarousel />} />
          <Route path="/Pages/About" element={<AboutUs />} />
          <Route path="/Pages/Donation" element={<DonationPage />} />
          <Route path="/Pages/Servicespage/LifeTimeMembership" element={<LifeTimeMembership />} />
          <Route path="/Pages/Servicespage/IskconYouthForum" element={<IskconYouthForum />} />
          <Route path="/Pages/Servicespage/GuestHouse" element={<GuestHouse />} />
          <Route path="/Pages/Servicespage/Gaushala" element={<Gaushala />} />
          <Route path="/Pages/Servicespage/DeityWorship" element={<DeityWorship />} />
          <Route path="/Pages/Servicespage/DevoteeKitchen" element={<DevoteeKitchen />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};
