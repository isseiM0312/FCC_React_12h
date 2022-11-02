import React from "react";
import img from '../images/Vector.svg';
import '../Airbnb.css';

export default function Navbar() {
    return(
        <nav>
            <img className="logo" src={img}></img>
        </nav>
    );
}