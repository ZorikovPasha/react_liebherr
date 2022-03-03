const SupplyForm: React.FC = () => {
  return (
    <section className="main-form">
      <div className="main-form__container">
        <div className="container">
          <div className="main-form__inner">
            <h3 className="main-form__title">
              {" "}
              <span>Оперативно</span> поставим технику{" "}
            </h3>
            <form className="main-form__form" action="">
              <div className="main-form__line">
                <input className="main-form__input" type="text" placeholder="Ваше имя" />
                <input className="main-form__input input-mask" type="tel" placeholder="Ваш телефон*" />
                <button className="main-form__btn btn" type="submit">
                  Заказать звонок
                </button>
              </div>
              <label className="main-form__label">
                <input className="main-form__checkbox-real" type="checkbox" />
                <span className="main-form__checkbox-fake"></span>
                <span className="main-form__agree">
                  Я согласен с
                  <a className="main-form__agree-link" href="#">
                    условиями обработки
                  </a>
                  и использования моих персональных данных
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyForm;
