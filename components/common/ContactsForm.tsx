import React from 'react'
import { REGEX } from '../../utils/const'
import { AppForm } from './AppForm'

export const ContactsForm = () => {
  const fields = React.useRef({
    fields: {
      name: {
        value: '',
        isValid: false,
        tag: 'input',
        inputClass: 'form-contacts__input',
        type: 'text',
        placeholder: 'Ваше имя',
        labelClass: 'form-label',
        blockClass: 'form-contacts__block',
        errorMessage: 'Поле не заполнено',
        validateFn: (str: string) => str.length > 0,
      },
      phone: {
        value: '',
        isValid: false,
        tag: 'input',
        inputClass: 'form-contacts__input',
        type: 'tel',
        mask: '+79999999999',
        placeholder: '+7__________',
        labelClass: 'form-label',
        blockClass: 'form-contacts__block',
        errorMessage: 'Поле заполнено некорректно',
        validateFn: (str: string) => !str.includes('_'),
      },
      email: {
        value: '',
        isValid: false,
        tag: 'input',
        inputClass: 'form-contacts__input',
        type: 'text',
        placeholder: 'Ваша почта',
        labelClass: 'form-label',
        blockClass: 'form-contacts__block',
        errorMessage: 'Поле заполнено некорректно',
        validateFn: (str: string) => REGEX.email.test(str),
      },
      message: {
        value: '',
        isValid: false,
        tag: 'textarea',
        inputClass: 'form-contacts__area',
        type: 'text',
        placeholder: 'Оставьте ваш вопрос',
        labelClass: 'form-label',
        blockClass: 'form-contacts__block',
        errorMessage: 'Поле не заполнено',
        validateFn: (str: string) => str.length > 0,
      },
    },
    isAgree: false,
  })
  return <AppForm formClass="popup__form" fields={fields.current} buttonClass="popup__btn btn" buttonText="Оставить заявку" />
}
