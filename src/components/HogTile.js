import React, { useState } from "react";
import Details from "./Details";

function HogTile( {item} ) {
    const [displayData, setDisplayData] = useState(false);

    function handleClick(event) {
        setDisplayData((displayData) => !displayData);
    }

    return (
        <div key={item.id}>
            <h1>
                {item.name}
            </h1>
            <img onClick={handleClick} src={item.image} />
            {displayData ? <Details item={item} /> : null}
        </div>
    )
}

export default HogTile;