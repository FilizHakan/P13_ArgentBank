import React from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from "react-router-dom";

import Home from "./pages/Home";
import LogIn from "./pages/Login";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";

import "./main.css";

export default function App () 
{
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}


