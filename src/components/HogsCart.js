import React, { Children, useState } from "react";

function HogsCart({ hogs, displayData, setDisplayData }) {
    

    const displayedItems = hogs.map((item) => {
        return (
            <div key={item.id}>
                <h1>{item.name}</h1>
                <img onClick={(event)=> {handleClick()}} src={item.image}/>
            </div>
        )
    })

    function handleClick() {
        setDisplayData((displayData) => !displayData)
        console.log(displayData)
    }
    return (
        <div>
            {displayedItems}
        </div>
    )
}

export default HogsCart;