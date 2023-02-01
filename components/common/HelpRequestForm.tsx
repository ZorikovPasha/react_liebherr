import Image from 'next/image';
import React from 'react'
import * as yup from "yup";
import { REGEX } from '../../utils/const';
import { AppForm } from './AppForm';

const HelpRequestForm: React.FC = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required('Поле обязательно'),
    phone: yup.string().required('Поле обязательно').matches(REGEX.phone, "Некорректный номер телефона"),
    isAgree: yup.boolean().oneOf([true], ""),
  });

  const initValues = {
    name: "",
    phone: "",
    isAgree: false,
  };

    const fields = React.useRef({
      fields: {
        name: {
          inputClass: "help__form-input",
          type: "text",
          placeholder: "Имя",
          labelClass: "help__form-label flex",
          blockClass: "",
          tag: "input"
        },
        phone: {
          inputClass: "help__form-input",
          type: "tel",
          placeholder: "Телефон",
          labelClass: "help__form-label flex",
          blockClass: "",
          tag: "input"
        },
      },
      isAgree: false
    })
  

  return (
    <div className="help rel before after">
      <div className="help__container">
        <div className="container">
          <h2 className="help__title">Нужна помощь в подборе?</h2>
          <AppForm 
            formClass="help__form"
            fields={fields.current}
            formSchema={formSchema} 
            initValues={initValues}
            buttonClass="help__form-btn btn" 
            buttonText="Получить консультацию"
            agreeLabelClass="help__form-label help__form-label--margin-top flex"
          />
        </div>
        <div className="help__images">
          <Image 
            src="/static/images/form-bg.png"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default HelpRequestForm;
