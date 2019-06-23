import React from 'react';
import Card from "./Card";

export default function GameBoard({aquarium, onCardClick}) {

    return (
        <div className="container">
            <div className="row">
                {aquarium.map((fish, index) => (
                    <Card src={fish.source} key={index} onCardClick={()=>{onCardClick(fish.id)}}/>
                    //                                  onMovieClick={()=>{onMovieClick(index)}}
                ))}
            </div>
        </div>
    )
}