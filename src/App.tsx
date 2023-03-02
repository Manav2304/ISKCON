import React from "react";

import MyCarousel from "./Pages/Home";
import NavigationBar from "./Components/Navbar";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <NavigationBar />
      <MyCarousel />
    </>
  );
};
