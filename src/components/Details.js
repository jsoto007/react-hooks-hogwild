import React from "react";


function Details( { item } ) {

       return ( <div>
            <ul>
                <li>Specialty: {item.specialty}</li>
                <li>weight: {item.weight}</li>
                <li>Greased: {item.greased}</li>
                <li>Highest Medal: {item["highest medal achieved"]}</li>
            </ul>
            </div>
              )
  
}

export default Details;
