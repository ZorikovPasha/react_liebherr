import React from 'react'
import Image from 'next/image'

import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../redux/slices/modalsSlice'
import { REGEX } from '../../utils/const'
import { AppForm } from './AppForm'
import { selectPopupState } from '../../redux/selectors'

const PopupRequest: React.FC = () => {
  const dispatch = useDispatch()

  const popupState = useSelector(selectPopupState)

  const fields = React.useRef({
    fields: {
      name: {
        value: '',
        isValid: false,
        inputClass: 'popup__input',
        type: 'text',
        placeholder: 'Ваше имя',
        labelClass: 'popup__label flex form-label',
        tag: 'input',
        errorMessage: 'Поле не заполнено',
        validateFn: (str: string) => str.length > 0,
      },
      phone: {
        value: '',
        isValid: false,
        inputClass: 'popup__input',
        type: 'tel',
        placeholder: '+7__________',
        labelClass: 'popup__label flex form-label',
        mask: '+79999999999',
        tag: 'input',
        errorMessage: 'Поле заполнено некорректно',
        validateFn: (str: string) => !str.includes('_'),
      },
      email: {
        value: '',
        isValid: false,
        inputClass: 'popup__input',
        type: 'text',
        placeholder: 'Ваша почта',
        labelClass: 'popup__label flex form-label',
        tag: 'input',
        errorMessage: 'Поле заполнено некорректно',
        validateFn: (str: string) => REGEX.email.test(str),
      },
    },
    isAgree: false,
  })

  const onClose = () => {
    document.documentElement.classList.remove('lock')
    popupState.request && dispatch(toggleModal({ name: 'request', state: false }))
    popupState.order && dispatch(toggleModal({ name: 'order', state: false }))
  }

  return popupState.order || popupState.request ? (
    // <ClientOnlyPortal selector="#modal">
    <div className="popup">
      <div className="popup__body">
        <button className="popup__close" onClick={onClose}>
          <Image src="/static/images/close.svg" alt="close" width={24} height={24} />
        </button>
        <h3 className="popup__title">Арендовать спецтехнику</h3>
        <p className="popup__text">
          Оставьте заявку на звонок и мы ответим на все ваши вопросы в самое ближайшее время
        </p>

        <AppForm
          formClass="popup__form"
          fields={fields.current}
          buttonClass="popup__btn btn"
          buttonText="Оставить заявку"
          isOrder={popupState.order}
        />
      </div>
    </div>
  ) : // </ClientOnlyPortal>
  null
}

export default PopupRequest
