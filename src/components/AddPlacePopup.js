import React from "react";
import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Новое место"
      id={"_add-card"}
      buttonName={"Сохранить"}
      onSubmit={handleSubmit}
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
        onChange={handleChangeName}
      />
      <span className="popup__input-error name-add-value-input-error"></span>
      <input
        type="url"
        required
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_select_link"
        name="description"
        id="link-value"
        onChange={handleChangeLink}
      />
      <span className="popup__input-error link-value-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
