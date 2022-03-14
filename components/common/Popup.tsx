import React from "react";

interface IPopupProps {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const PopupRequest: React.FC<IPopupProps> = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup__body">
        <button className="popup__close" onClick={onClose}>
          <img src="/static/images/close.svg" alt="close icon" />
        </button>
        <h3 className="popup__title">Арендовать спецтехнику</h3>
        <p className="popup__text">Оставьте заявку на звонок и мы ответим на все ваши вопросы в самое ближайшее время</p>
        <form className="popup__form" action="">
          <input className="popup__input" type="text" placeholder="Ваше имя" />
          <input className="popup__input input-mask" type="tel" placeholder="Ваш телефон*" />
          <input className="popup__input email-mask" type="text" placeholder="Ваша почта" />
          <label className="popup__label form-label">
            <input className="form-label__checkbox-real" type="checkbox" />
            <span className="form-label__checkbox-fake"></span>
            <span className="form-label__text">
              Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
            </span>
          </label>
          <button className="popup__btn btn" type="submit">
            Оставить заявку
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupRequest;
