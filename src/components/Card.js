import React from "react";

function Card( {users} ) {
    return (
        <div className="row">
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                {users.map(user => <p className="card-text">{user.name.first}{user.name.last}</p>)}
                
            </div>
            </div>
        </div>
        </div>
    )
}

export default Card;