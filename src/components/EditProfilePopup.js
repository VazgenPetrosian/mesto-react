import React from "react";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      title="Редактировать профиль"
      id={"_edit-profile"}
      buttonName={"Сохранить"}
      isLoading={props.isLoading}
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
        onChange={handleChangeName}
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
        onChange={handleChangeDescription}
      />
      <span className="popup__input-error description-value-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
