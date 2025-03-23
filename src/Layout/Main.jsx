import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <div >
      <Navbar />
      <main >
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
