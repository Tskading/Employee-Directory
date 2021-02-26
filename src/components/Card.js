import React from "react";

function Card( {user} ) {
    return (
     
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
              
                 <p className="card-text">{user.name.first + " " + user.name.last}</p> 

                 <p className="card=text">{user.email}</p>

                 <p className="card=text">{user.phone}</p>



                
            </div>
            </div>
        </div>
      
    )
}

export default Card;