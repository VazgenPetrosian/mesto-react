import React from "react";
import { useState, useEffect } from "react";
import iconLike from "../images/Like.svg";
import trashCan from "../images/trashcan.svg";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <article className="card">
      <button
        className="card__trashcan"
        type="button"
        style={{ backgroundImage: `url(${trashCan})` }}
      ></button>
      <img
        className="card__image"
        onClick={handleClick}
        src={props.card.link}
        alt={props.card.name}
      />
      <div className="card__block">
        <h2 className="card__heading">{props.card.name}</h2>
        <button
          className="card__like"
          type="button"
          style={{ backgroundImage: `url(${iconLike})` }}
        >
          <p className="card__likes-number">{props.card.likes.length}</p>
        </button>
      </div>
    </article>
  );
}
export default Card;
