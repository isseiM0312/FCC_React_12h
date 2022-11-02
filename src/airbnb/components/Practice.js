import React from "react";

export default function Practice() {
    const colors = ["Red","Orange","Yellow","Green","Blue","Indigo","Violet"]
    console.log(colors)
    return (
        <div>
            {colors.map((col) => {
                return(
                <P1 name={col} value={col} />
                )
            })}
        </div>
    )
}

function P1({name, value}) {
    return(
        <div>
            <h1>{name}</h1>
            <h3>{value}</h3>
        </div>
    )
}