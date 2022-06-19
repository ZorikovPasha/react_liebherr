import React from 'react'
import * as yup from "yup";

import { REGEX } from '../../utils/const';
import { AppForm } from './AppForm';

export const ContactsForm = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required('Поле обязательно'),
    email: yup.string().email("Некорректный адрес электронной почты").required('Поле обязательно'),
    phone: yup.string().required('Поле обязательно').matches(REGEX.phone, "Некорректный номер телефона"),
    message: yup.string().required("Поле обязательно"),
    isAgree: yup.boolean().oneOf([true])
  });

  const initValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
    isAgree: false,
  };

  const fields = React.useRef({
    fields: {
      name: {
        tag: "input",
        inputClass: "form-contacts__input",
        type: "text",
        placeholder: "Ваше имя",
        labelClass: "form-label",
        blockClass: "form-contacts__block"
      },
      phone: {
        tag: "input",
        inputClass: "form-contacts__input",
        type: "tel",
        placeholder: "Ваш телефон",
        labelClass: "form-label",
        blockClass: "form-contacts__block"
      },
      email: {
        tag: "input",
        inputClass: "form-contacts__input",
        type: "text",
        placeholder: "Ваша почта",
        labelClass: "form-label",
        blockClass: "form-contacts__block"
      },
      message: {
        tag: "textarea",
        inputClass: "form-contacts__area",
        type: "text",
        placeholder: "Оставьте ваш вопрос",
        labelClass: "form-label",
        blockClass: "form-contacts__block"
      },
    },
    isAgree: false
  })
  return (
    <AppForm 
      formClass="popup__form"
      fields={fields.current}
      formSchema={formSchema} 
      initValues={initValues}
      buttonClass="popup__btn btn" 
      buttonText="Оставить заявку"
    />
  )
}
