import React, { Children, useState } from "react";
import Details from "./Details";

function HogsCart( { hogs } ) {
    const [displayData, setDisplayData] = useState(false)  
  

    const displayedItems = hogs.map((item) => {
        return (
            <div key={item.id}>
                <h1>{item.name}</h1>
                <img onClick={handleClick} src={item.image}/>
                {displayData ? <Details item={item} /> : null}
            </div>
        )
        
    })

    function handleClick() {
        setDisplayData((displayData) => !displayData)
      
    }
    return (
        <div>
            {displayedItems}
        </div>
    )
}

export default HogsCart;