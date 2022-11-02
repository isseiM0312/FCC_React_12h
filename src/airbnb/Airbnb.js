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
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots} />
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

