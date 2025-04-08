import React from "react";
import './RegisterPage.css';
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';

function LoginPage(){
    const navigate = useNavigate();
    const [loginFormNotification,setloginFormNotification] = useState(
            {
                message:"",
                notification_display:"is-hidden"
            }
        );
    const [loginFormData, setLoginFormData] = useState({
        user_email:"",
        user_password:""
    })
    const handleChange = (event) => {
        const {name, value} = event.target
        setLoginFormData((prevFormData) => ({...prevFormData,[name]:value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:6262/user/login',loginFormData,{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(function (response){
            console.log("Response",response)
        }).catch(function (error){
            // console.log(error.response.data)
            setloginFormNotification({
                message: error.response.data,
                notification_display:""
            })
        })
        // navigate("/")
    }
    document.addEventListener('DOMContentLoaded', () => {
        
        (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
          const $notification = $delete.parentNode;
            
          $delete.addEventListener('click', () => {
            $notification?.parentNode?.removeChild($notification);
          });
        });
      });

    return(
        <>
        <form id="registerForm" onSubmit={handleSubmit}>
            <section className="section">
                <h1 className="title is-1 has-text-black">Log In</h1>
            </section>
            <div className={`notification is-danger is-light ${loginFormNotification.notification_display}`}>
                <button className="delete"></button>
                <p>{loginFormNotification.message}</p>
            </div>
            <section className="section">
            <div className="field">
                <label className="label has-text-black">Email</label>
                    <div className="control">
                        <input 
                            className="input"
                            name="user_email"
                            id="userEmail" 
                            type="text" 
                            placeholder="Text input" 
                            value={loginFormData.user_email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-black">Password</label>
                    <div className="control ">
                        <input 
                        className="input" 
                        type="password" 
                        name="user_password"
                        id="userPassword" 
                        value={loginFormData.user_password}
                        onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Login</button>
                </div>
            </div>
            </section>
        </form>
        </>
    )
}
export default LoginPage;