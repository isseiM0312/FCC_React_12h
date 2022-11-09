import React from "react";

export default function Hero() {
    return(
        <section className="hero">
            <img src = {`${process.env.PUBLIC_URL}/images/airbnb/Group 77.svg`} className="hero--photo"></img>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--body">Join unique interactive activities led by 
                one-of-a-kind host-all without leaving home.
            </p>
        </section>
    )
}