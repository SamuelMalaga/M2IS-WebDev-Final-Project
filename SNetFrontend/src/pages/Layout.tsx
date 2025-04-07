import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
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