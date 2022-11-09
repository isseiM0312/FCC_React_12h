import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from './data.js'
import './Travel_journal.css';

export default function Travel() {
    const cards = data.map(item => {
        return <Card {...item} />
    })

    return(
        <div>
            <Header />
            <section>
                {cards}
            </section>
        </div>
    )
}