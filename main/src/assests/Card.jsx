import React from "react";
import "./Card.css";

export const Card = (props) => {
    return (
    <div className="Card">
        {props.imgSrc && props.imgAlt && (
        <img src={props.imgSrc} alt={props.imgAlt} className="CardImg"/>
        )}
        <br/>
        {props.title && <h1 className="CardTitle">{props.title}</h1>}
        <br/>
        {props.description && <p className="CardDescription">{props.description}</p>}
        <br/>
    </div>
    );
};