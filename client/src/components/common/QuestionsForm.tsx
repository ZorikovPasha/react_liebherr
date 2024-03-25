import React from 'react'
import InputMask from 'react-input-mask'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

import { toggleModal } from '../../redux/slices/modalsSlice'
import { publicApi } from '../../api'
import { REGEX } from '../../utils/const'

export const QuestionsForm = () => {
  const phoneMask = '+7(999) 999-99-99'

  const dispatch = useDispatch()

  const initialFields = {
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
        placeholder: 'Ваш телефон',
        mask: phoneMask,
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
  }

  const [showErrors, setShowErrors] = React.useState(false)
  const [state, setState] = React.useState(initialFields)

  const onAgree = () =>
    setState((prev) => ({
      ...prev,
      isAgree: !prev.isAgree,
    }))

  const onChange = (key: keyof typeof state.fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      fields: {
        ...prev.fields,
        [key]: {
          ...prev.fields[key],
          value: e.target.value,
          isValid: prev.fields[key].validateFn(e.target.value),
        },
      },
    }))

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setShowErrors(true)
    const isValid = Object.values(state.fields).every((props) => props.isValid)

    if (!isValid || !state.isAgree) {
      return
    }

    const dto = {
      name: state.fields.name.value,
      phone: state.fields.phone.value,
      email: state.fields.email.value,
      message: state.fields.message.value,
    }

    try {
      const res = await publicApi.sendRequest(dto)
      if (!res?.success) {
        dispatch(toggleModal({ name: 'error', state: true }))
        document.documentElement.classList.add('lock')
        return
      }

      dispatch(toggleModal({ name: 'message', state: true }))
      document.documentElement.classList.add('lock')
      setState(initialFields)
    } catch (error) {
      dispatch(toggleModal({ name: 'error', state: true }))
      document.documentElement.classList.add('lock')
    }
  }

  const { name, email, phone, message } = state.fields

  return (
    <section className="questions">
      <div className="questions__container rel">
        <div className="container">
          <div className="questions__inner rel">
            <h2 className="questions__title">Остались вопросы?</h2>
            <p className="questions__text">
              Оставьте заявку на звонок и мы ответим на все ваши вопросы в самое ближайшее время
            </p>
            <form className="questions__form" onSubmit={handleSubmit}>
              <div className="questions__form-block">
                <label htmlFor="name" className="popup__label flex form-label" />
                <input
                  name="name"
                  className={`questions__form-input ${showErrors && !name.isValid ? 'form-input--error' : ''} `}
                  type="text"
                  placeholder="Ваше имя"
                  value={name.value}
                  onChange={onChange('name')}
                />
                {showErrors && !name.isValid && <p className="questions__form-message">{name.errorMessage}</p>}
              </div>

              <div className="questions__form-block">
                <label htmlFor="phone" className="popup__label flex form-label" />
                <InputMask
                  value={phone.value}
                  name="phone"
                  mask={phone.mask}
                  maskChar="_"
                  className={`questions__form-input ${showErrors && !phone.isValid ? 'form-input--error' : ''} `}
                  type={phone.type}
                  placeholder={phone.placeholder}
                  onChange={onChange('phone')}
                />
                {showErrors && !phone.isValid && <p className="questions__form-message">{phone.errorMessage}</p>}
              </div>
              <div className="questions__form-block">
                <label htmlFor="email" className="popup__label flex form-label" />
                <input
                  name="email"
                  className={`questions__form-input ${showErrors && !email.isValid ? 'form-input--error' : ''} `}
                  type="text"
                  placeholder="Ваша почта"
                  value={email.value}
                  onChange={onChange('email')}
                />
                {showErrors && !email.isValid && <p className="questions__form-message">{email.errorMessage}</p>}
              </div>

              <div className="questions__form-block">
                <label htmlFor="questions-area" className="popup__label flex form-label" />
                <textarea
                  name="message"
                  className={`questions__form-textarea ${showErrors && !message.isValid ? 'form-input--error' : ''} `}
                  placeholder="Оставьте ваш вопрос"
                  value={message.value}
                  onChange={onChange('message')}
                />
                {showErrors && !message.isValid && <p className="questions__form-message">{message.errorMessage}</p>}
              </div>

              <label className="questions__form-label flex" htmlFor="questions-form-agree">
                <input
                  id="questions-form-agree"
                  name="isAgree"
                  className="questions__form-real"
                  type="checkbox"
                  checked={state.isAgree}
                  onChange={onAgree}
                />
                <span className={`questions__form-fake ${showErrors && !state.isAgree ? 'form-input--error' : ''}`} />
                <span className="questions__form-agree">
                  Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
                </span>
              </label>
              <button className="questions__form-btn btn" type="submit">
                Заказать звонок
              </button>
            </form>
          </div>
        </div>
        <div className="questions__images">
          <Image src="/static/images/questions-aside.png" alt="product" layout="fill" />
        </div>
      </div>
    </section>
  )
}
