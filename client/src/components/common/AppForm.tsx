import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { publicApi } from '../../api'
import { useRouter } from 'next/router'
import { toggleModal } from '../../redux/slices/modalsSlice'
import { AppTextField } from './AppTextField'
import { toggleLoader } from '../../redux/slices/loaderSilce'
import { selectProduct } from '../../redux/selectors'

interface IFormField {
  inputClass: string
  type: string
  placeholder: string
  labelClass: string
  blockClass?: string
  tag: string
  value: string
  mask?: string
  isValid: boolean
  errorMessage: string
  validateFn: (s: string) => boolean
}

interface IFields {
  fields: {
    name: IFormField
    phone: IFormField
    email?: IFormField
    message?: IFormField
  }
  isAgree: boolean
}

interface IProps {
  fields: IFields
  buttonClass: string
  buttonText: string
  formClass: string
  agreeLabelClass?: string
  isOrder?: boolean
}

export const AppForm = ({
  fields,
  buttonClass = '',
  buttonText,
  formClass = '',
  agreeLabelClass = 'popup__label flex form-label',
  isOrder = false,
}: IProps) => {
  const [showErrors, setShowErrors] = React.useState(false)
  const [state, setState] = React.useState(fields)
  const dispatch = useDispatch()
  const { query } = useRouter()

  const desiredProduct = useSelector(selectProduct(Number(query.id)))

  const onChange = (key: keyof typeof state.fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => {
      const props = prev.fields[key]
      if (typeof props === 'undefined') {
        return prev
      }

      return {
        ...prev,
        fields: {
          ...prev.fields,
          [key]: {
            ...prev.fields[key],
            value: e.target.value,
            isValid: props.validateFn(e.target.value),
          },
        },
      }
    })

  const onAgree = () =>
    setState((prev) => ({
      ...prev,
      isAgree: !prev.isAgree,
    }))

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setShowErrors(true)

    const isValid = Object.values(state.fields).every((props) => {
      return props.isValid
    })

    if (!isValid || !state.isAgree) {
      return
    }

    const dto = {
      name: state.fields.name.value,
      phone: state.fields.phone?.value ?? '',
      id: desiredProduct?._id ?? '',
    }

    dispatch(toggleLoader(true))

    try {
      const res = await (isOrder ? publicApi.makeOrder(dto) : publicApi.sendRequest(dto))
      dispatch(toggleLoader(false))
      if (!res?.success) {
        dispatch(toggleModal({ name: 'error', state: true }))
        document.documentElement.classList.add('lock')
        return
      }

      isOrder
        ? dispatch(toggleModal({ name: 'order', state: false }))
        : dispatch(toggleModal({ name: 'request', state: false }))
      dispatch(toggleModal({ name: 'message', state: true }))

      setState(fields)
    } catch (error) {
      dispatch(toggleLoader(false))
      dispatch(toggleModal({ name: 'error', state: true }))
      document.documentElement.classList.add('lock')
    }
  }

  return (
    <form className={formClass} onSubmit={handleSubmit}>
      {Object.entries(state.fields).map(
        ([
          name,
          { value, isValid, tag, labelClass, placeholder, type, mask, inputClass, blockClass, errorMessage },
        ]) => (
          <AppTextField
            value={value}
            key={name}
            tag={tag}
            blockClass={blockClass}
            name={name}
            hasError={showErrors && !isValid}
            type={type}
            mask={mask}
            placeholder={placeholder}
            labelClass={labelClass}
            inputClass={inputClass}
            errorMessage={errorMessage}
            handleChange={onChange(name as keyof typeof state.fields)}
          />
        ),
      )}

      <label className={agreeLabelClass}>
        <input
          name="isAgree"
          className="form-label__checkbox-real"
          type="checkbox"
          checked={state.isAgree}
          onChange={onAgree}
        />
        <span
          className={`form-label__checkbox-fake rel ${
            showErrors && !state.isAgree ? 'form-label__checkbox-fake--error' : ''
          }`}
        />
        <span className="form-label__text">
          Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
        </span>
      </label>

      <button className={buttonClass} type="submit">
        {buttonText}
      </button>
    </form>
  )
}
