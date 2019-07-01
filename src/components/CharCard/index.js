import React from "react";
import "./style.css";

const Card = props => (
  <div className="card">
    <img
      alt={props.id}
      src={props.image}
      id={props.id}
      onClick={() => props.shuffleCard(props.id)}
      className="shuffling"
    />
  </div>
);

export default Card;
