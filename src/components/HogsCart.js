import React from "react";
import HogTile from "./HogTile"

function HogsCart( { hogs } ) {
    const displayedItems = hogs.map((item) => {
        return (
            <HogTile item={item}/>
        )
        
    })
    return (
        <div>
            {displayedItems}
        </div>
    )
}

export default HogsCart;