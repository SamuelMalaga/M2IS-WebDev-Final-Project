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
                <a className="navbar-item">
                    Home
                </a>
                <a className="navbar-item">
                    Navigation Stuff
                </a>
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

export default NavBar;