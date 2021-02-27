import React from "react";

function Card( {user} ) {
    return (
     
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{user.name.first + " " + user.name.last}</h5>

                <img alt="user" src={user.picture.thumbnail}/>

                 <p className="card=text">Email: {user.email}</p>

                 <p className="card=text">Phone Number: {user.phone}</p>



                
            </div>
            </div>
        </div>
      
    )
}

export default Card;