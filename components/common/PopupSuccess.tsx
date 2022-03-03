interface IPopupMessageProps {
  title: string;
  text: string;
  buttonText: string;
}

const PopupMessage: React.FC<IPopupMessageProps> = ({ title, text, buttonText }) => {
  return (
    <div className="popup-message">
      <div className="popup-message__body">
        <button className="popup-message__close">
          <img src="images/close.svg" alt="" />
        </button>
        <h3 className="popup-message__title">{title}</h3>
        <p className="popup-message__text">{text}</p>
        <button className="popup-message__btn">{buttonText}</button>
      </div>
    </div>
  );
};

export default PopupMessage;
