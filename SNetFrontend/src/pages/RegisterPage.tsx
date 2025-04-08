import React from "react";
import './RegisterPage.css';
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';



function RegisterPage(){
    const [registerFormNotification,setregisterFormNotification] = useState(
        {
            message:"",
            notification_display:"is-hidden"
        }
    )
    const [createUserFormData, setCreateUserFormData] = useState({
        user_name:"",
        user_email:"",
        user_password:"",
        user_birth_date:""
    });
    const handleChange = (event) =>{
        const { name,value } = event.target
        setCreateUserFormData((prevFormData) => ({...prevFormData,[name]:value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Sending the data")
        axios.post('http://localhost:6262/user/create',createUserFormData,{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(function (response){
            console.log("Response",response)
        }).catch(function (error){
            // console.log(error.response.data)
            setregisterFormNotification({
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
                <h1 className="title is-1 has-text-black">Create Account</h1>
            </section>
            <div className={`notification is-danger is-light ${registerFormNotification.notification_display}`}>
                <button className="delete"></button>
                <p>{registerFormNotification.message}</p>
            </div>
            <section className="section">
            <div className="field">
                <label className="label has-text-black">Name</label>
                <div className="control">
                    <input 
                        className="input"
                        name="user_name"
                        id="userName" 
                        type="text" 
                        placeholder="Text input" 
                        value={createUserFormData.user_name}
                        onChange={handleChange}
                    />
                </div>
                </div>
                <div className="field">
                    <label className="label has-text-black">Email</label>
                    <div className="control ">
                        <input 
                        className="input" 
                        type="email" 
                        placeholder="hello@"
                        name="user_email"
                        id="userEmail" 
                        value={createUserFormData.user_email}
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
                        value={createUserFormData.user_password}
                        onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                <label className="label has-text-black">Birth Date</label>
                    <div className="control">
                    <input
                        className="input bulma-datepicker clickable-datepicker"
                        type="date"
                        name="user_birth_date"
                        id="userBirthDate" 
                        value={createUserFormData.user_birth_date}
                        onChange={handleChange}
                    />
                    </div>
                </div>
                <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                    <Link className="button is-link is-light" to="/" >Cancel</Link>
                </div>
            </div>
            </section>
        </form>
        </>
    )
}

export default RegisterPage;