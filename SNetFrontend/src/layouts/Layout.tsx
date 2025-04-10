import React from "react";
import { Outlet, Link } from "react-router-dom";
// import NavBar from "../pages/components/NavBar";
import NavBar from "../pages/components/NavBar";
import Footer from "../pages/components/Footer";
import './Layout.css';

function Layout() {
  return (
    <div className="layout-wrapper">
      <NavBar />
      <div className="layout-content container has-text-black">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;