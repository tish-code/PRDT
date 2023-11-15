import React from "react";
import NavBar from "../navBar/navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="py-[10px] px-[20px]">
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
