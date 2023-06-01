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
      <div className="pages">
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
            minLength="2"
            maxLength="40"
            required
            type="text"
            className="popup__input popup__input_select_name"
            name="name"
            id="name-value"
            placeholder="Название"
          />
          <span className="popup__input-error name-value-input-error"></span>
          <input
            minLength="2"
            maxLength="200"
            required
            type="text"
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
            minLength="2"
            maxLength="30"
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
      </div>
    </div>
  );
}

export default App;
