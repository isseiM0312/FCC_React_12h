import React from "react";
import '../Travel_journal.css'

export default function Card(props) {
    console.log(props.image);
    return (
        <div className="card--ground">
            <img className="card--image" src={`../../../images/travel_journal/${props.image}`}></img>
            <section className="info--ground">
                <div>
                    <p className="card--country">
                        <img className="card--pin" src={`../../../images/travel_journal/pin.svg`}></img>
                        {props.country}
                        <a className="card--map" href='https://www.google.co.jp/maps/'>View in Google Map</a>
                    </p>
                </div>
                <div className="card--title">{props.title}</div>
                <div className="card--season">{`${props.season.start} - ${props.season.end}`}</div>
                <div className="card--discription">{props.discription}</div>
            </section>
        </div>
    )
}