import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import Form from "../components/sign-in/Form";
import Footer from "../components/Footer";
import Loader from "./Loader";
import { isLoggedSelector } from "../features/selector";

/**
 * @description Sign in page 
 * @returns {JSX} element
 */
export default function SignIn () 
{
    // Logged in or out
    const isLogged = useSelector(isLoggedSelector);

    if (isLogged) {
        return <Navigate to="/dashboard" />
    }

    return (
      <div>
        <Loader />
        <Header />
        <Form />
        <Footer />        
      </div>
    );
};
