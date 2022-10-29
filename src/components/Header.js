import React from "react";
import logo from "./logo.svg";
import "./App.css";

//imgはimport 適当な名前　from 'パス'でいれる
//src = {適当な名前(上で付けたやつ)}

export default function Header() {
  return (
    <div>
      <header>
        <nav className="nav">
          <ul className="nav-titles">
            <img src={logo}></img>
            <h2>React Fact</h2>
          </ul>
          <ul className="nav-item">
            <h3>Pricing</h3>
            <h3>About</h3>
            <h3>Contact</h3>
          </ul>
        </nav>
      </header>
    </div>
  );
}
