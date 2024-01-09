import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavBar from "../BottomNavBar/BottomNavBar";


const Body = () => {
  return (
    <div className="relative">
      <BottomNavBar />
      <Outlet />
    </div>
  );
};

export default Body;
