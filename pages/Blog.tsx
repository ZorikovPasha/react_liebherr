import { NextPage } from "next";

const Blog: NextPage = () => {
  return (
    <>
      <div className="popup">
        <div className="popup__body">
          <button className="popup__close">
            <img src="images/close.svg" alt="" />
          </button>
          <h3 className="popup__title">Арендовать спецтехнику</h3>
          <p className="popup__text">Оставьте заявку на звонок и мы ответим на все ваши вопросы в самое ближайшее время</p>
          <form className="popup__form" action="">
            <input className="popup__input" type="text" placeholder="Ваше имя" />
            <input className="popup__input input-mask" type="tel" placeholder="Ваш телефон*" />
            <input className="popup__input email-mask" type="text" placeholder="Ваша почта" />
            <label className="popup__label form-label">
              <input className="form-label__checkbox-real" type="checkbox" />
              <span className="form-label__checkbox-fake"></span>
              <span className="form-label__text">
                Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
              </span>
            </label>
            <button className="popup__btn btn" type="submit">
              Оставить заявку
            </button>
          </form>
        </div>
      </div>

      <div className="popup-message">
        <div className="popup-message__body">
          <button className="popup-message__close">
            <img src="images/close.svg" alt="" />
          </button>
          <h3 className="popup-message__title">Ваша заявка отправлена</h3>
          <p className="popup-message__text">Мы позвоним вам в самое ближайшее время</p>
          <button className="popup-message__btn">Вернуться</button>
        </div>
      </div>

      <div className="breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="index.html">
                Главная
              </a>
            </li>
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link">Статьи</span>
            </li>
          </ul>
        </div>
      </div>

      <section className="blog">
        <div className="container">
          <h1 className="blog__title">СТАТЬИ О СПЕЦТЕХНИКЕ</h1>
          <div className="blog__items">
            <div className="blog__item item-blog">
              <div className="item-blog__images">
                <img src="images/blog/1.jpg" alt="" />
              </div>
              <div className="item-blog__box">
                <h6 className="item-blog__title">Аренда автокрана LIEBHERR LTM 1160 в Москве</h6>
                <p className="item-blog__text" data-crop="200">
                  Liebherr
                </p>
                <a className="item-blog__btn btn" href="article.html">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="blog__item item-blog">
              <div className="item-blog__images">
                <img src="images/blog/1.jpg" alt="" />
              </div>
              <div className="item-blog__box">
                <h6 className="item-blog__title">Аренда автокрана</h6>
                <p className="item-blog__text" data-crop="200">
                  Компания Liebherr.
                </p>
                <a className="item-blog__btn btn" href="article.html">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="blog__item item-blog">
              <div className="item-blog__images">
                <img src="images/blog/1.jpg" alt="" />
              </div>
              <div className="item-blog__box">
                <h6 className="item-blog__title">Аренда автокрана LIEBHERR LTM 1160 в Москве</h6>
                <p className="item-blog__text" data-crop="200">
                  Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.
                </p>
                <a className="item-blog__btn btn" href="article.html">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="blog__item item-blog">
              <div className="item-blog__images">
                <img src="images/blog/1.jpg" alt="" />
              </div>
              <div className="item-blog__box">
                <h6 className="item-blog__title">Аренда автокрана LIEBHERR LTM 1160 в Москве</h6>
                <p className="item-blog__text" data-crop="200">
                  Компания Liebherr.
                </p>
                <a className="item-blog__btn btn" href="article.html">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="blog__item item-blog">
              <div className="item-blog__images">
                <img src="images/blog/1.jpg" alt="" />
              </div>
              <div className="item-blog__box">
                <h6 className="item-blog__title">Аренда автокрана LIEBHERR LTM 1160 в Москве</h6>
                <p className="item-blog__text" data-crop="200">
                  Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.
                </p>
                <a className="item-blog__btn btn" href="article.html">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="blog__item item-blog">
              <div className="item-blog__images">
                <img src="images/blog/1.jpg" alt="" />
              </div>
              <div className="item-blog__box">
                <h6 className="item-blog__title">Аренда автокрана LIEBHERR LTM 1160 в Москве</h6>
                <p className="item-blog__text" data-crop="200">
                  Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.
                </p>
                <a className="item-blog__btn btn" href="article.html">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="blog__item item-blog">
              <div className="item-blog__images">
                <img src="images/blog/1.jpg" alt="" />
              </div>
              <div className="item-blog__box">
                <h6 className="item-blog__title">Аренда автокрана LIEBHERR LTM 1160 в Москве</h6>
                <p className="item-blog__text" data-crop="200">
                  Компания Liebherr.
                </p>
                <a className="item-blog__btn btn" href="article.html">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="blog__item item-blog">
              <div className="item-blog__images">
                <img src="images/blog/1.jpg" alt="" />
              </div>
              <div className="item-blog__box">
                <h6 className="item-blog__title">Аренда автокрана LIEBHERR LTM 1160 в Москве</h6>
                <p className="item-blog__text" data-crop="200">
                  Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.
                </p>
                <a className="item-blog__btn btn" href="article.html">
                  Подробнее
                </a>
              </div>
            </div>
            <div className="blog__item item-blog">
              <div className="item-blog__images">
                <img src="images/blog/1.jpg" alt="" />
              </div>
              <div className="item-blog__box">
                <h6 className="item-blog__title">Аренда автокрана LIEBHERR LTM 1160 в Москве</h6>
                <p className="item-blog__text" data-crop="200">
                  Компания Liebherr – ведущий поставщик
                </p>
                <a className="item-blog__btn btn" href="article.html">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className="blog__btn-wrapper">
            <button className="blog__btn">Загрузить ещё</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
