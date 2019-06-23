import React from 'react';
import "./Card.css";

export default function Card(props) {
        return (
            <div className="card col-3" onClick={props.onCardClick}>
                <img src={props.src} alt="fish"/>
            </div>
        )
}
