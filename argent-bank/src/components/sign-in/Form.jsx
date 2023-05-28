import React from "react";
import { useState } from "react";

import Loader from "../../pages/Loader";
import getToken from "../../services/GetToken";
import { ShowError } from "../../features/selector";

/**
 * @description Form component for sign-in page
 * @returns {JSX} element
 */
export default function Form ()
{
    // Local state for the email and the password information
    const [formData, setFormData] = useState({
        email: "", 
        password: "",
    });

    // Get the email and password from the form input
    const onChange = (el) =>
    {
        el.persist();
        const { name, value } = el.target;
        setFormData((state) =>
        ({
            ...state, [name]: value
        }));
    };

    // Send the email and password to the API
    const onSubmit = (el) =>{
        el.preventDefault();
        getToken(formData.email, formData.password);
    };

    return (
        <div>
        <div className="main bg-dark-sign">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon-content"></i>
                <h1>Sign In</h1>
                <form onSubmit={onSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="username" 
                        autoComplete="username" 
                        required 
                        placeholder="Username" 
                        value={formData.email} 
                        onChange={onChange}
                    />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        autoComplete="current-password" 
                        required 
                        placeholder="Password" 
                        value={formData.password} 
                        onChange={onChange} 
                    />
                </div>

                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
            
                <button type="submit" className="sign-in-button">
                    Sign In
                </button>
                <ShowError />
                </form>
            </section>
        </div>
        </div>
    );
};