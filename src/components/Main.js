import React from "react";
import api from "../utils/api";
import { useState, useEffect } from "react";
import Card from "./Card";
function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((error) => {
        console.error(
          `ошибка загрузки данных с апи: ${error} - ${error.statusText}`
        );
      });
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch((error) => {
        console.error(
          `ошибка загрузки карточек с апи: ${error} - ${error.statusText}`
        );
      });
  }, []);

  return (
    <main className="main-page">
      <section className="profile">
        <button className="profile__avatar-button" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt={userName} />
        </button>
        <div className="profile__info">
          <button
            onClick={props.onEditProfile}
            type="button"
            className="profile__edit-button"
          ></button>
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__desc-profile">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
