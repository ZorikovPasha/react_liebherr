import Image from 'next/image';
import React from 'react'
import { REGEX } from '../../utils/const';
import { AppForm } from './AppForm';

const HelpRequestForm: React.FC = () => {
  const fields = React.useRef({
    fields: {
      name: {
        value: "",
        isValid: false,
        inputClass: "help__form-input",
        type: "text",
        placeholder: "Имя",
        labelClass: "help__form-label flex",
        blockClass: "",
        tag: "input",
        errorMessage: "Поле не заполнено",
        validateFn: (str: string) => str.length > 0
      },
      phone: {
        value: "",
        isValid: false,
        inputClass: "help__form-input",
        type: "tel",
        placeholder: "Телефон",
        labelClass: "help__form-label flex",
        blockClass: "",
        tag: "input",
        errorMessage: "Поле заполнено некорректно",
        validateFn: (str: string) => REGEX.phone.test(str)
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
