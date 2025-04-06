import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import './Layout.css';

function Layout(){
    return (
        <>
          <NavBar></NavBar>
          <Outlet />
        </>
      )
}

export default Layout;