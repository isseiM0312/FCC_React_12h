import React from "react";
import './Airbnb.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function Airbnb() {
    return(
        <div>
            <Navbar />
            <Hero />
            <Card />
        </div>
    );
}

