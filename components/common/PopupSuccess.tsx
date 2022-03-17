import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/slices/modalsSlice";
import ClientOnlyPortal from "./ClientOnlyPortal";

interface IPopupMessageProps {
  title: string;
  text: string;
  buttonText: string;
}

const PopupMessage: React.FC<IPopupMessageProps> = ({ title, text, buttonText }) => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(toggleModal({ name: "message", state: false }));
    document.body.classList.remove('lock');
  };

  return (
    <ClientOnlyPortal selector="#modal">
      <div className="popup-message">
        <div className="popup-message__body">
          <button className="popup-message__close" onClick={onClose}>
            <img src="/static/images/close.svg" alt="close icon" />
          </button>
          <h3 className="popup-message__title">{title}</h3>
          <p className="popup-message__text">{text}</p>
          <button className="popup-message__btn" onClick={onClose}>{buttonText}</button>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default PopupMessage;
