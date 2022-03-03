const QuestionsForm: React.FC = () => {
  return (
    <section className="questions">
      <div className="questions__container">
        <div className=" container">
          <div className="questions__inner">
            <h2 className="questions__title">Остались вопросы?</h2>
            <p className="questions__text">Оставьте заявку на звонок и мы ответим на все ваши вопросы в самое ближайшее время</p>
            <form className="questions__form" action="">
              <input className="questions__form-input" type="text" placeholder="Ваше имя" />
              <input className="questions__form-input input-mask" type="tel" placeholder="Ваш телефон*" required />
              <input className="questions__form-input email-mask" type="text" placeholder="Ваша почта" />
              <textarea className="questions__form-textarea" placeholder="Оставьте ваш вопрос"></textarea>
              <label className="questions__form-label">
                <input className="questions__form-real" type="checkbox" />
                <span className="questions__form-fake"></span>
                <span className="questions__form-agree">
                  Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
                </span>
              </label>
              <button className="questions__form-btn btn" type="submit">
                Заказать звонок
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsForm;
