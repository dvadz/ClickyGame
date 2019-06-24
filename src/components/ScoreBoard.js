import React from 'react';

export default function ScoreBoard (props){
    return (
        <div>
            <div className="top border">
                <h1 className="row">
                    <span id="game-name" className="col-md-4 px-4"> Clicky Game</span>
                    <span id="score" className="col-md-4 px-4">Score: {props.score} </span>
                    <span id="top-score" className="col-md-4 px-4">Top Score {props.highScore} </span>
                </h1>
            </div>
        </div>
    )
}