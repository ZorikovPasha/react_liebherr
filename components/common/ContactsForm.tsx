const ContactsForm: React.FC = () => {
  return (
    <form className="contacts__form form-contacts">
      <input type="text" className="form-contacts__input" placeholder="Имя" />
      <div className="form-contacts__line">
        <input className="form-contacts__input email-mask" type="text" placeholder="E-mail" />
        <input className="form-contacts__input input-mask" type="tel" placeholder="Телефон" />
      </div>
      <textarea className="form-contacts__area" placeholder="Сообщение"></textarea>
      <label className="form-contacts__label form-label">
        <input type="checkbox" className="form-label__checkbox-real" />
        <span className="form-label__checkbox-fake"></span>
        <span className="form-label__text">
          Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
        </span>
      </label>
      <button className="form-contacts__btn btn" type="submit">
        Оставить заявку
      </button>
    </form>
  );
};

export default ContactsForm;
