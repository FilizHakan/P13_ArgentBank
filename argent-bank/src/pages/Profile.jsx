import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedSelector } from "../features/selector";

import DashboardBody from "../components/profile/DashboardBody";
import Footer from "../components/Footer";
import DashboardHeader from "../components/profile/DashboardHeader";
import Loader from "./Loader";
/**
 * @description dashboard page for each profile
 * @returns {JSX} element
 */
export default function Dashboard () 
{
    // Logged in or logged out
    const isLogged = useSelector(isLoggedSelector);

    if (isLogged === false)
    {
        return <Navigate to="/login" />
        
    }

    return (
      <div>
        <Loader />
        <DashboardHeader />
        <DashboardBody /> 
        <Footer />
      </div>
    );
};