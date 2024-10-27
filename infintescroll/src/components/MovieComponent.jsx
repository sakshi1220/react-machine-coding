import React from "react"
import MovieCard from "./MovieCard"

const MovieComponent=({card})=>{
    console.log(card)
    return(
        <div className="wrapper">
      <div className="container">
        <h1>List of cards</h1>
        <div className="grid grid-three-column">
       {card?.map((c,id)=>{
        return <MovieCard key={id} userId={c.id} body={c.body} title={c.title}/>
       })}
         </div>
      </div>
    </div>
    );
}

export default MovieComponent