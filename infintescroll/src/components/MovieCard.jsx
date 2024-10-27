import React from "react";
import '../App.css'

const MovieCard =({userId,body,title})=>{
    return(
        <div className="card">
      <div className="card-info">
        <p className="card-id">{userId}</p>
        <p>{body.substr(0, 150)}</p>
        <h2>{title.substr(0, 15)}</h2>
      </div>
    </div>
    )
}

export default MovieCard