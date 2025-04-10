import { Link } from "react-router-dom";

import React from "react";
function NavBar(){
    return(
        <>
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">Logo</Link>
            </div>
            
            <div className="navbar-menu">
                <div className="navbar-start">
                <Link className="navbar-item" to="/home">
                        Home page - ATH
                </Link>
                <Link className="navbar-item" to="/group">
                        GroupPage
                </Link>
                </div>
                <div className="navbar-end">
                    <Link className="navbar-item" to="/login">
                        Login
                    </Link>
                    <Link className="navbar-item" to="/register">
                        Register
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}
{/* <nav>
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
          </nav> */}

export default NavBar;