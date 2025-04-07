import React from "react";
import { Link } from "react-router-dom";


function LandingPage(){
    return(
        <>
        <section className="section">
            <h1 className="title is-1 has-text-black">Social Network for M2IS Students</h1>
        </section>
        <section className="section">
            <div className="block ">
            Welcome to the Social Network App, a full-stack project built with React on the frontend and Spring Boot on the backend. 
            This application enables users to register, create posts, interact in groups, and chat with each other in real time hopefully. 
            The goal of this project is to simulate the core functionalities of a modern social media platform with clear modularity, scalable architecture, and clean API documentation.
            </div>
            <h4 className="title has-text-black is-4">To get started choose one of the options:</h4>
            <div className="columns">
                <div className="column has-text-centered">
                    <Link className="button is-large is-link" to="/login">Log in</Link>
                </div>
                <div className="column has-text-centered" >
                    <Link className="button is-large is-primary" to="/register">Register</Link>
                </div>
            </div>
        </section>
        </>
    )
}
export default LandingPage;