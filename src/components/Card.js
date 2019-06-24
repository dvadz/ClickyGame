import React from 'react';
import "./Card.css";

export default function Card(props) {
        return (
            <div className="card col-3">
                <img src={props.src} alt="fish" onClick={props.onCardClick} />
            </div>
        )
}
