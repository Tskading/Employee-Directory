import React from "react";

function Card( {user} ) {
    return (
     
        <div className="col-sm-6">
            <div className="card bg-dark text-white">
            <div className="card-body">
                <h5 className="card-title font-italic">{user.name.first + " " + user.name.last}</h5>

                <img alt="user" src={user.picture.thumbnail}/>

                 <p className="card=text font-weight-bold">Email: {user.email}</p>

                 <p className="card=text font-weight-bold">Phone Number: {user.phone}</p>                
            </div>
            </div>
        </div>
      
    )
}

export default Card;