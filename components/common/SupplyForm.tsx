const SupplyForm: React.FC = () => {
  return (
    <section className="main-form">
      <div className="main-form__container">
        <div className="container">
          <div className="main-form__inner">
            <h3 className="main-form__title">
              {" "}
              <span>Оперативно</span> поставим технику
            </h3>
            <form className="main-form__form" action="">
              <div className="main-form__line">
                <div className="main-form__block main-form__block--pushed form__block form__block--floating">
                  <input 
                    id="main-form-input-name"
                    className="input-mask floating__input" 
                    type="tel" 
                    placeholder="Ваше имя" 
                  />
                  <label 
                    htmlFor="main-form-input-name" 
                    className="floating__label" 
                    data-content="Ваше имя"
                    >
                  </label>
                </div>
                <div className="main-form__block main-form__block--pushed form__block form__block--floating">
                  <input 
                    id="main-form-input-password"
                    className="floating__input" 
                    type="text" 
                    placeholder="Ваш телефон" 
                    />
                  <label 
                    htmlFor="main-form-input-password" 
                    className="floating__label" 
                    data-content="Ваш телефон"
                    >
                  </label>
                </div>
                <button className="main-form__btn btn" type="submit">
                  Заказать звонок
                </button>
              </div>
              <label className="main-form__label">
                <input className="main-form__checkbox-real" type="checkbox" />
                <span className="main-form__checkbox-fake"></span>
                <span className="main-form__agree">
                  Я согласен с 
                  <span className="main-form__agree-link">
                    условиями обработки 
                  </span>
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
