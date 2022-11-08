import React from "react";
import './Airbnb.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Practice from "./components/Practice";
import data from "./data.js"


export default function Airbnb() {

    const cards = data.map(item => {
        return (
            <Card
            key = {item.id}
               {...item} />
        )
    })

    return (
        <div>
            {/* <Practice /> */}
            <Navbar />
            <Hero />
            <section className="card--list">{cards}</section>
        </div>
    );
}

