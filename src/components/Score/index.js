import React from "react";
import "./style.css";

const Score = props => (
  <div className="score">
    <h3 className="score">Score: {props.total}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);
export default Score;
