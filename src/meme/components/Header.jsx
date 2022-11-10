import React from "react";
import '../Meme.css';

export default function Header() {
    return (
        <header className="header">
            <img className="header--image" src="../../../images/meme/Troll Face.svg"></img>
            <h2 className="header--title"></h2>
            <h4 className="header--project"></h4>
        </header>
    )
}