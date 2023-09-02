import { useDispatch, useSelector } from 'react-redux'

import { selectPopupState } from '../../redux/selectors'
import { toggleModal } from '../../redux/slices/modalsSlice'

interface IPopupMessageProps {
  title: string
  text: string
  buttonText: string
}

export const PopupSuccess: React.FC<IPopupMessageProps> = ({ title, text, buttonText }) => {
  const dispatch = useDispatch()

  const poupState = useSelector(selectPopupState)

  const onClose = () => {
    dispatch(toggleModal({ name: 'message', state: false }))
    document.body.classList.remove('lock')
  }

  return poupState.message ? (
    <div className="popup-message">
      <div className="popup-message__body">
        <button className="popup-message__close" onClick={onClose}>
          <img src="/static/images/close.svg" alt="close icon" />
        </button>
        <h3 className="popup-message__title">{title}</h3>
        <p className="popup-message__text">{text}</p>
        <button className="popup-message__btn" onClick={onClose}>
          {buttonText}
        </button>
      </div>
    </div>
  ) : null
}
