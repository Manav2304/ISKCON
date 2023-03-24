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
            path="/Servicespage/LifeTimeMembership"
            element={<LifeTimeMembership />}
          />
          <Route
            path="/Servicespage/IskconYouthForum"
            element={<IskconYouthForun />}
          />
          <Route
            path="/Servicespage/GuestHouse"
            element={<GuestHouse />}
          />
          <Route path="/Servicespage/Gaushala" element={<Gaushala />} />
          <Route
            path="/Servicespage/DeityWorship"
            element={<DeityWorship />}
          />
          <Route
            path="/Servicespage/DevoteeKitchen"
            element={<DevoteeKitchen />}
          />
          <Route
            path="/Servicespage/KirtanAtIskcon"
            element={<KirtanAtIskcon />}
          />
          <Route
            path="/Servicespage/BookDistribution"
            element={<BookDistribution />}
          />
        </Routes>
      </Router>
    </>
  );
};
