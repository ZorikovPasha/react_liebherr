import React from 'react'

// import { ClientOnlyPortal } from "../";
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../redux/slices/modalsSlice'
import { selectPopupState } from '../../redux/selectors'
import Image from 'next/image'

const PopupError: React.FC = () => {
  const dispatch = useDispatch()

  const popupState = useSelector(selectPopupState)

  const onClose = () => {
    document.documentElement.classList.remove('lock')
    dispatch(toggleModal({ name: 'error', state: false }))
  }

  return popupState.error ? (
    // <ClientOnlyPortal selector="#modal">
    <div className="popup">
      <div className="popup__body">
        <button className="popup__close" onClick={onClose}>
          <Image
            src="/static/images/close.svg"
            alt="close"
            width={24}
            height={24}
          />
        </button>
        <h3 className="popup__title">Что-то пошло не так..</h3>
        <p className="popup__text">Пожалуйста, повторите попытку</p>
        <button className="popup-message__btn" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  ) : // </ClientOnlyPortal>
  null
}

export default PopupError
