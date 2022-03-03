const HelpRequestForm: React.FC = () => {
  return (
    <div className="help">
      <div className="help__container">
        <div className="container">
          <h2 className="help__title">Нужна помощь в подборе?</h2>
          <form className="help__form" action="">
            <div className="help__form-line">
              <input className="help__form-input" type="text" placeholder="Имя" />
              <input className="help__form-input input-mask" type="tel" placeholder="Телефон" />
              <button className="help__form-btn btn" type="submit">
                Получить консультацию
              </button>
            </div>
            <label className="help__form-label">
              <input className="help__form-real" type="checkbox" />
              <span className="help__form-fake"></span>
              <span className="help__form-agree">
                Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
              </span>
            </label>
          </form>
        </div>
        <div className="help__images">
          <img src="images/form-bg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HelpRequestForm;
