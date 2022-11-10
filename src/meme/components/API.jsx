import React from "react";

export default function API() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)


    React.useEffect(function () {
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    } ,[count])
    

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h1>{count}</h1>
            <button onClick={() =>  setCount(prev => prev + 1)}>add</button>
        </div>
    )

}