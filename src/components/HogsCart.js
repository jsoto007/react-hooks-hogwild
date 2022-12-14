import React from "react";

function HogsCart({ hogs }) {
    const displayedItems = hogs.map((item) => {
        return (
            <div key={item.id}>
                <h1>{item.name}</h1>
                <img src={item.image}/>
            </div>
        )
    })
    return (
        <div>
            {displayedItems}
        </div>
    )
}

export default HogsCart;