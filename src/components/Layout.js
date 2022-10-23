import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="App bg-[#EDE4E0]">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
