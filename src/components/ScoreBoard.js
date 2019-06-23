import React, {Component} from 'react';

export default class ScoreBoard extends Component {
    state = {

    };

    render() {
        return (
            <div>
                <div className="top border">
                    <h1 className="row">
                        <span id="game-name" className="col-md-4 px-4"> Clicky Game</span>
                        <span id="score" className="col-md-4 px-4">Score: </span>
                        <span id="top-score" className="col-md-4 px-4">Top Score</span>
                    </h1>
                </div>
            </div>
        )
    }
}