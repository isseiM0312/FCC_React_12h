import React from "react";
import logo from './logo.svg';
import './App.css'

export default function Header() {
    return (
      <div>
        <header>
          <nav className='nav'>
          <img className='nav-logo' src={logo}></img>
          <ul className='nav-item'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          </nav>
      </header>
      </div>
    )
  }

