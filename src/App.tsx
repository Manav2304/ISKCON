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
import Home from "./Pages/Home";
import FestivalPage from "./Pages/Festival";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pages/Home" element={<MyCarousel />} />
          <Route path="/Pages/Festival" element={<FestivalPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
