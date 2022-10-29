import React from "react";
import profile from "./profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faSquareInstagram,
  faSquareTwitter,
  faSquareFacebook,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import './App2.css';

function App2() {
  return (
    <div className="ground">
         <div className="card">
        <Image />
        <Title />
        <Detail />
        <Footer />
    </div>
    </div>
   
  );
}

function Image() {
    return (
        <div>
            <img src={profile}></img>
        </div>
    )
}

function Title() {
  return (
    <div>
      <h1 className="name">Issei Mori</h1>
      <h4 className="job">web/App developer</h4>
      <h4 className="univ">Keio university / 1st</h4>
      <Button />
    </div>
  );
}

function Button() {
  return (
    <div className="mail">
        <ul className="mailchild">
    <li><FontAwesomeIcon icon={faEnvelope} className="f"/></li>
    <li><h3 className="mailtxt">Email</h3></li>
        </ul>
    </div>
  );
}

function Detail() {
  return (
    <div className="detail">
      <div>
        <h4>About</h4>
        <h6 className="about">
          Freshman in Keio university in Japan. majoring in science Google DSC
          Keio lead Cloud League lead Working as a APP engineer at Maker.inc.
          Now learning React.js and enjoying web developing.
        </h6>
      </div>
      <div>
        <h4>Interests</h4>
        <h6 className="interests">
          Freshman in Keio university in Japan. majoring in science Google DSC
          Keio lead Cloud League lead Working as a APP engineer at Maker.inc.
          Now learning React.js and enjoying web developing.
        </h6>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="icon">
      <ul className="icons">
        <li>
          <FontAwesomeIcon icon={faSquareFacebook} />
        </li>
        <li>
          <FontAwesomeIcon icon={faSquareTwitter} />
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />
        </li>
        <li>
          <FontAwesomeIcon icon={faSquareGithub} />
        </li>
        <li>
          <FontAwesomeIcon icon={faSquareInstagram} />
        </li>
      </ul>
    </div>
  );
}

export default App2;
