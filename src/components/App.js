import React from "react";
import { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWIthForm";
import ImagePopup from "./ImagePopup";
function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }
  return (
    <div className="App">
      <body className="pages">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          title="Редактировать профиль"
          id={"_edit-profile"}
          buttonName={"Сохранить"}
        >
          <input
            minlength="2"
            maxlength="40"
            required
            type="text"
            value="Жак-Ив Кусто"
            className="popup__input popup__input_select_name"
            name="name"
            id="name-value"
            placeholder="Название"
          />
          <span className="popup__input-error name-value-input-error"></span>
          <input
            minlength="2"
            maxlength="200"
            required
            type="text"
            value="Исследователь океана"
            className="popup__input popup__input_select_description"
            name="description"
            id="description-value"
            placeholder="О себе"
          />
          <span className="popup__input-error description-value-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          title="Новое место"
          id={"_add-card"}
          buttonName={"Сохранить"}
        >
          <input
            minlength="2"
            maxlength="30"
            required
            type="text"
            className="popup__input popup__input_select_place"
            name="name"
            id="name-add-value"
            placeholder="Название"
          />
          <span className="popup__input-error name-add-value-input-error"></span>
          <input
            type="url"
            required
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_select_link"
            name="description"
            id="link-value"
          />
          <span className="popup__input-error link-value-input-error"></span>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <div className="popup popup_type_deleteCard">
          <div className="popup__container">
            <button
              className="popup__close popup__close_type_deleteCard"
              type="button"
            ></button>
            <form
              className="popup__form popup__form_type_deleteCard"
              name="delete-form"
            >
              <h2 className="popup__heading">Вы уверены?</h2>
              <button
                className="popup__button popup__button_type_deleteCard"
                type="submit"
              >
                Да
              </button>
            </form>
          </div>
        </div>
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          title="Обновить аватар"
          id={"_avatar"}
          buttonName={"Сохранить"}
        >
          <input
            name="description"
            placeholder="Ссылка на аватар"
            type="url"
            className="popup__input popup__input_select_url"
            required
            id="avatar-value"
          />
          <span className="popup__input-error avatar-value-input-error"></span>
        </PopupWithForm>
        {/* <template className="template" id="templateID">
          <article className="card">
            <button className="card__trashcan" type="button"></button>
            <img className="card__image" />
            <div className="card__block">
              <h2 className="card__heading"></h2>
              <button className="card__like" type="button">
                <p className="card__likes-number">0</p>
              </button>
            </div>
          </article>
        </template> */}
      </body>
    </div>
  );
}

export default App;
