import React from 'react';
import Card from "./Card";
import img from "./images/1.jpg"
export default function GameBoard({aquarium, onCardClick}) {

    return (
        <div className="container">
            <div className="row">
                {aquarium.map((fish, index) => (
                    <Card src={fish.image} key={index} onCardClick={()=>{onCardClick(fish.id)}}/>
                    //                                  onMovieClick={()=>{onMovieClick(index)}}
                ))}
            </div>
        </div>
    )
}