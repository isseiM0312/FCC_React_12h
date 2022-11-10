import React from "react";
import Header from './components/Header.jsx';
import MemeChild from "./components/MemeChild.jsx";
import Form from "./components/Form.jsx";
import API from "./components/API.jsx";
import Resize from "./components/ Resize.jsx";

export default function Meme() {
    return (
    <div>
      
        <Header />
        <MemeChild />
        {/*  <Form></Form>
         <Resize />
         <API /> */}
    </div>
    );
    
}