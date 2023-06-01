import React from "react";
import closeButton from "../images/close-icon-320px.svg";

function PopupWithForm({
  isOpen,
  onClose,
  name,
  title,
  buttonName,
  children,
  id,
}) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`} id={id}>
      <div className="popup__container">
        <button
          style={{ backgroundImage: `url(${closeButton})` }}
          onClick={onClose}
          className="popup__close"
          type="button"
        ></button>
        <form className="popup__form" name={name}>
          <h2 className="popup__heading">{title}</h2>
          {children}
          <button className="popup__button" type="submit">
            {buttonName}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
