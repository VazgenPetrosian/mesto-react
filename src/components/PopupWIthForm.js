import React from "react";
import closeButton from "../images/close-icon-320px.svg";

function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.isOpen ? "popup_opened" : ""}`}
      id={props.id}
    >
      <div className="popup__container">
        <button
          style={{ backgroundImage: `url(${closeButton})` }}
          onClick={props.onClose}
          className="popup__close"
          type="button"
        ></button>
        <form className="popup__form" id="edit-form" name={props.name}>
          <h2 className="popup__heading">{props.title}</h2>
          {props.children}
          <button className="popup__button" type="submit">
            {props.buttonName}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
