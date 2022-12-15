import React, { Children, useState } from "react";
import Details from "./Details";
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