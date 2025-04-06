import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout(){
    return (
        // <Route index element={<LandingPage />} />
        //           <Route path="home" element={<HomePage />} />
        //           <Route path="register" element={<RegisterPage />} />
        //           <Route path="group" element={<GroupPage />} />
        //           <Route path="*" element={<NoPage />} />
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">Landing Page</Link>
              </li>
              <li>
                <Link to="/home">Home Page</Link>
              </li>
              <li>
                <Link to="/register">Register Page</Link>
              </li>
              <li>
                <Link to="/group">Group Page</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
}

export default Layout;