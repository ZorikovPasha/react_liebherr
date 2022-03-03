const ContactsForm: React.FC = () => {
  return (
    <section className="contacts">
      <div className="container">
        <h2 className="contacts__title">Контакты</h2>
        <div className="contacts__inner">
          <div className="contacts__content">
            <p className="contacts__text">Ежедневно мы развиваемся и стараемся стать лучше для вас, поэтому всегда рады получить от вас обратную связь с пожеланиями и идеями по улучшению наших продуктов!</p>
            <p className="contacts__text">Если у вас остались вопросы или есть предложения как стать лучше пишите нам!</p>
            <a href="#" className="contacts__address">
              г. Москва, Россия, 117628,м. Бульвар Дмитрия Донского, ул. Куликовская, 12{" "}
            </a>
            <div className="contacts__box">
              <div className="contacts__phones">
                <a className="contacts__phone" href="tel:+74999299666">
                  +7 (499)929-96-66
                </a>
                <a className="contacts__phone" href="tel:+79853645518">
                  +7 (985)364-55-18
                </a>
                <a className="contacts__phone" href="tel:+79852262030">
                  +7 (985)226-20-30
                </a>
              </div>
              <div className="contacts__time">
                <a className="contacts__mail" href="mailto:evro-k@yandex.ru">
                  evro-k@yandex.ru
                </a>
                <p className="contacts__schedule">10:00 - 17:00</p>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default ContactsForm;
