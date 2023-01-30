import React from "react";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/slices/modalsSlice";
import { REGEX } from "../../utils/const";
import { AppForm } from "./AppForm";
import { selectPopupState } from "../../redux/selectors";

const PopupRequest: React.FC = () => {
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    name: yup.string().required('Поле обязательно'),
    email: yup.string().email("Некорректный адрес электронной почты").required('Поле обязательно'),
    phone: yup.string().required('Поле обязательно').matches(REGEX.phone, "Некорректный номер телефона"),
    isAgree: yup.boolean().oneOf([true])
  });

  const initValues = {
    name: "",
    phone: "",
    email: "",
    isAgree: false,
  };

  const popupState = useSelector(selectPopupState)

  const fields = React.useRef({
    fields: {
      name: {
        inputClass: "popup__input",
        type: "text",
        placeholder: "Ваше имя",
        labelClass: "popup__label form-label",
        blockClass: "",
        tag: "input"
      },
      phone: {
        inputClass: "popup__input",
        type: "tel",
        placeholder: "Ваш телефон",
        labelClass: "popup__label form-label",
        blockClass: "",
        tag: "input"
      },
      email: {
        inputClass: "popup__input",
        type: "text",
        placeholder: "Ваша почта",
        labelClass: "popup__label form-label",
        blockClass: "",
        tag: "input"
      },
    },
    isAgree: false
  })

  const onClose = () => {
    document.documentElement.classList.remove('lock');
    popupState.request && dispatch(toggleModal({ name: "request", state: false }));
    popupState.order && dispatch(toggleModal({ name: "order", state: false }))
  };

  return popupState.order || popupState.request ? (
    // <ClientOnlyPortal selector="#modal">
      <div className="popup">
        <div className="popup__body">
          <button 
            className="popup__close" 
            onClick={onClose}
            >
            <img src="/static/images/close.svg" alt="close icon" />
          </button>
          <h3 className="popup__title">Арендовать спецтехнику</h3>
          <p className="popup__text">Оставьте заявку на звонок и мы ответим на все ваши вопросы в самое ближайшее время</p>

          <AppForm 
            formClass="popup__form"
            fields={fields.current}
            formSchema={formSchema} 
            initValues={initValues}
            buttonClass="popup__btn btn" 
            buttonText="Оставить заявку"
            isOrder={popupState.order}
          />
        </div>
      </div>
    // </ClientOnlyPortal>
  ) : null
};

export default PopupRequest;
