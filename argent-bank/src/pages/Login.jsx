import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { toastContainer, toast } from "react-toastify";

import Header from "../components/Header";
import Form from "../components/login/Form";
import Footer from "../components/Footer";
import Loader from "./Loader";
import { isLoggedSelector } from "../features/selector";

/**
 * @description Sign in page 
 * @returns {JSX} element
 */
export default function Login () 
{
    // Logged in or out
    const isLogged = useSelector(isLoggedSelector);

    if (isLogged) {
        return <Navigate to="/profile" />
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
