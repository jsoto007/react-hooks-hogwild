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
 /*
    
    1. create state that changes from true to false
    2. creating a new component Details.js give it data and use it as the component that toggles if true.

    */