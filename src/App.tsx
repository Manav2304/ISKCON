import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import { LifeTimeMembership } from "./Pages/Servicespage/LifeTimeMembership";
import { IskconYouthForun } from "./Pages/Servicespage/IskconYouthForum";
import { GuestHouse } from "./Pages/Servicespage/GuestHouse";
import { Gaushala } from "./Pages/Servicespage/Gaushala";
import { DeityWorship } from "./Pages/Servicespage/DeityWorship";
import { DevoteeKitchen } from "./Pages/Servicespage/DevoteeKitchen";
import { KirtanAtIskcon } from "./Pages/Servicespage/KirtanAtIskcon";
import { BookDistribution } from "./Pages/Servicespage/BookDistribution";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route
            path="/services-page/life-time-membership"
            element={<LifeTimeMembership />}
          />
          <Route
            path="/services-page/iskcon-youth-forum"
            element={<IskconYouthForun />}
          />
          <Route
            path="/services-page/guest-house"
            element={<GuestHouse />}
          />
          <Route path="/services-page/gaushala" element={<Gaushala />} />
          <Route
            path="/services-page/deity-worship"
            element={<DeityWorship />}
          />
          <Route
            path="/services-page/devotee-kitchen"
            element={<DevoteeKitchen />}
          />
          <Route
            path="/services-page/kirtan-at-iskcon"
            element={<KirtanAtIskcon />}
          />
          <Route
            path="/services-page/book-distribution"
            element={<BookDistribution />}
          />
        </Routes>
      </Router>
    </>
  );
};