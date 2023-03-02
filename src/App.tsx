import React from "react";

import MyCarousel from "./Pages/Home";
import NavigationBar from "./Components/Navbar";
import { Donation } from "./Pages/Donation";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <NavigationBar />
      <MyCarousel />
      <Donation />
    </>
  );
};
