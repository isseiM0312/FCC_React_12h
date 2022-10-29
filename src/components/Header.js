import React from "react";
import logo from './logo.svg';
import './App.css'

//imgはimport 適当な名前　from 'パス'でいれる
//src = {適当な名前(上で付けたやつ)}

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

