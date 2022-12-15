import React from "react";


function Details( { item } ) {

       return ( <div>
            <ul>
                <li>{item.specialty}</li>
                <li>{item.weight}</li>
                <li>{item.greased}</li>
            </ul>
            </div>
              )
  
}

export default Details;
