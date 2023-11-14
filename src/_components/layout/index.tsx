import React from "react";
import NavBar from "../navBar/navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
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
