import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import { LifeTimeMembership } from "./Pages/Services/LifeTimeMembership";
import { IskconYouthForun } from "./Pages/Services/IskconYouthForum";
import { GuestHouse } from "./Pages/Services/GuestHouse";
import { Gaushala } from "./Pages/Services/Gaushala";
import { DeityWorship } from "./Pages/Services/DeityWorship";
import { DevoteeKitchen } from "./Pages/Services/DevoteeKitchen";
import { KirtanAtIskcon } from "./Pages/Services/KirtanAtIskcon";
import { BookDistribution } from "./Pages/Services/BookDistribution";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route
            path="/services/life-time-membership"
            element={<LifeTimeMembership />}
          />
          <Route
            path="/services/iskcon-youth-forum"
            element={<IskconYouthForun />}
          />
          <Route
            path="/services/guest-house"
            element={<GuestHouse />}
          />
          <Route path="/services/gaushala" element={<Gaushala />} />
          <Route
            path="/services/deity-worship"
            element={<DeityWorship />}
          />
          <Route
            path="/services/devotee-kitchen"
            element={<DevoteeKitchen />}
          />
          <Route
            path="/services/kirtan-at-iskcon"
            element={<KirtanAtIskcon />}
          />
          <Route
            path="/services/book-distribution"
            element={<BookDistribution />}
          />
        </Routes>
      </Router>
    </>
  );
};