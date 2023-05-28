import React from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";

import "./main.css";

export default function App () 
{
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </Router>
  );
}


