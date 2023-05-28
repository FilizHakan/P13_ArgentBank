import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from "../components/Footer";
import Loader from "./Loader";

/**
 * @description Home page
 * @returns {JSX} element
 */
export default function Home ()
{
    return (
      <div>
        <Loader />
        <Header />
        <Hero />
        <Footer />
      </div>
    );
};