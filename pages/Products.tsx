import { NextPage } from "next";
import { PopupRequest } from "../components";

const Product: NextPage = () => {
  return (
    <>
      <PopupRequest />

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
              <a className="breadcrumbs__link" href="catalog.html">
                Каталог техники
              </a>
            </li>
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link">Страница товара</span>
            </li>
          </ul>
        </div>
      </div>

      <section className="product">
        <div className="container">
          <h1 className="product__title">Гусеничный кран Liebherr LR 1750</h1>
          <div className="product__inner">
            <div className="product__images">
              <div className="product__slider">
                <div className="product__slider-item">
                  <div className="product__slider-images">
                    <img src="images/product-slider-1.jpg" alt="" />
                  </div>
                </div>
                <div className="product__slider-item">
                  <div className="product__slider-images">
                    <img src="images/product-slider-1.jpg" alt="" />
                  </div>
                </div>
                <div className="product__slider-item">
                  <div className="product__slider-images">
                    <img src="images/product-slider-1.jpg" alt="" />
                  </div>
                </div>
                <div className="product__slider-item">
                  <div className="product__slider-images">
                    <img src="images/product-slider-1.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="product__thumbs">
                <div className="product__thumb">
                  <div className="product__thumb-images">
                    <img src="images/product-slider-1.jpg" alt="" />
                  </div>
                </div>
                <div className="product__thumb">
                  <div className="product__thumb-images">
                    <img src="images/product-slider-1.jpg" alt="" />
                  </div>
                </div>
                <div className="product__thumb">
                  <div className="product__thumb-images">
                    <img src="images/product-slider-1.jpg" alt="" />
                  </div>
                </div>
                <div className="product__thumb">
                  <div className="product__thumb-images">
                    <img src="images/product-slider-1.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="product__info">
              <ul className="product__info-list product-list">
                <li className="product-list__item">
                  <p className="product-list__text">Максимальная грузоподъемность:</p>
                  <p className="product-list__text">750 т</p>
                </li>
                <li className="product-list__item">
                  <p className="product-list__text">При вылете стрелы:</p>
                  <p className="product-list__text">7,00 м</p>
                </li>
                <li className="product-list__item">
                  <p className="product-list__text">Главная стрела:</p>
                  <p className="product-list__text">140 м</p>
                </li>
                <li className="product-list__item">
                  <p className="product-list__text">Максимальная высота подъема:</p>
                  <p className="product-list__text">191 м</p>
                </li>
                <li className="product-list__item">
                  <p className="product-list__text">Максимальный вылет стрелы:</p>
                  <p className="product-list__text">156 м</p>
                </li>
                <li className="product-list__item">
                  <p className="product-list__text">Решетчатый удлинитель:</p>
                  <p className="product-list__text">от 14,00 до 105,00 м</p>
                </li>
                <li className="product-list__item">
                  <p className="product-list__text">Скорость передвижения:</p>
                  <p className="product-list__text">1,65 км/ч</p>
                </li>
                <li className="product-list__item">
                  <p className="product-list__text product-list__text--bold">Стоимость аренды:</p>
                  <p className="product-list__text product-list__text--bold">Договорная</p>
                </li>
              </ul>
              <a className="product__info-btn btn" href="contacts.html">
                Заказать
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="tabs">
        <div className="container">
          <div className="tabs__toggle">
            <div className="tabs__toggle-box">
              <a className="tabs__toggle-item tabs__toggle-item--pressed" href="#depiction">
                Описание
              </a>
              <a className="tabs__toggle-item" href="#features">
                Характеристики
              </a>
              <a className="tabs__toggle-item" href="#specifications">
                Документация
              </a>
            </div>
          </div>
          <div className="tabs__content">
            <div className="tabs__content-item tabs__content-item--shown item-content" id="depiction">
              <h2 className="item-content__title">Аренда гусеничного крана Liebherr LR 1750</h2>
              <p className="item-content__text block-text__text">Гусеничный кран LR 1750 находит свое применение в строительстве электростанций, нефтеперерабатывающих заводов, на строительных площадках мостов и при монтаже ветросиловых установок.</p>
              <p className="item-content__text block-text__text">Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или балластировочной тележкой.</p>
              <p className="item-content__text block-text__text">Компактные габариты компонентов подъемного крана и их умеренный индивидуальный вес позволяют обеспечить экономичную транспортировку этого подъемного крана к строительной площадке.</p>
              <p className="item-content__text block-text__text">Этот 750-тонный кран может также использоваться с выдвижными опорами, имеющими опорную базу 13 x 13 м. Результирующая грузоподъемность в этом случае может быть увеличена до 370 %.</p>

              <div className="item-content__images">
                <div className="item-content__img">
                  <img src="images/depict-1.jpg" alt="" />
                </div>
                <div className="item-content__img">
                  <img src="images/depict-2.jpg" alt="" />
                </div>
                <div className="item-content__img">
                  <img src="images/depict-3.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="tabs__content-item" id="features">
              <ul className="product__info-list product-list">
                <li className="product-list__item">
                  <p className="product-list__text">Максимальная грузоподъемность:</p>
                  <p className="product-list__text">750 т</p>
                </li>
                <li className="product-list__item">
                  <p className="product-list__text">При вылете стрелы:</p>
                  <p className="product-list__text">7,00 м</p>
                </li>
                <li className="product-list__item">
                  <p className="product-list__text">Главная стрела:</p>
                  <p className="product-list__text">140 м</p>
                </li>
                <li className="product-list__item">
                  <p className="product-list__text">Максимальная высота подъема:</p>
                  <p className="product-list__text">191 м</p>
                </li>
                <li className="product-list__item">
                  <p className="product-list__text">Максимальный вылет стрелы:</p>
                  <p className="product-list__text">156 м</p>
                </li>
                <li className="product-list__item">
                  <p className="product-list__text">Решетчатый удлинитель:</p>
                  <p className="product-list__text">от 14,00 до 105,00 м</p>
                </li>
                <li className="product-list__item">
                  <p className="product-list__text">Скорость передвижения:</p>
                  <p className="product-list__text">1,65 км/ч</p>
                </li>
              </ul>
            </div>
            <div className="tabs__content-item item-specs" id="specifications">
              <div className="item-specs__box">
                <div className="item-specs__item">
                  <div className="item-specs__images">
                    <img src="images/specifications/1.jpg" alt="" />
                  </div>
                  <a className="item-specs__link" href="#">
                    скачать
                  </a>
                </div>
                <div className="item-specs__item">
                  <div className="item-specs__images">
                    <img src="images/specifications/1.jpg" alt="" />
                  </div>
                  <a className="item-specs__link" href="#">
                    скачать
                  </a>
                </div>
                <div className="item-specs__item">
                  <div className="item-specs__images">
                    <img src="images/specifications/1.jpg" alt="" />
                  </div>
                  <a className="item-specs__link" href="#">
                    скачать
                  </a>
                </div>
                <div className="item-specs__item">
                  <div className="item-specs__images">
                    <img src="images/specifications/1.jpg" alt="" />
                  </div>
                  <a className="item-specs__link" href="#">
                    скачать
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-text block-text">
        <div className="container">
          <h2 className="block-text__title">Заголовок</h2>
          <p className="block-text__text">Гусеничный кран LR 1750 находит свое применение в строительстве электростанций, нефтеперерабатывающих заводов, на строительных площадках мостов и при монтаже ветросиловых установок.</p>
          <p className="block-text__text">Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или балластировочной тележкой.</p>
          <p className="block-text__text">Компактные габариты компонентов подъемного крана и их умеренный индивидуальный вес позволяют обеспечить экономичную транспортировку этого подъемного крана к строительной площадке.</p>
          <p className="block-text__text">Этот 750-тонный кран может также использоваться с выдвижными опорами, имеющими опорную базу 13 x 13 м. Результирующая грузоподъемность в этом случае может быть увеличена до 370 %.</p>
          <p className="block-text__text">Гусеничный кран LR 1750 находит свое применение в строительстве электростанций, нефтеперерабатывающих заводов, на строительных площадках мостов и при монтаже ветросиловых установок.</p>
          <p className="block-text__text">Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или балластировочной тележкой.</p>
          <p className="block-text__text">Компактные габариты компонентов подъемного крана и их умеренный индивидуальный вес позволяют обеспечить экономичную транспортировку этого подъемного крана к строительной площадке.</p>
          <p className="block-text__text">Этот 750-тонный кран может также использоваться с выдвижными опорами, имеющими опорную базу 13 x 13 м. Результирующая грузоподъемность в этом случае может быть увеличена до 370 %.Гусеничный кран LR 1750 находит свое применение в строительстве электростанций, нефтеперерабатывающих заводов, на строительных площадках мостов и при монтаже ветросиловых установок.</p>
          <p className="block-text__text">Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или балластировочной тележкой.</p>
          <p className="block-text__text">Компактные габариты компонентов подъемного крана и их умеренный индивидуальный вес позволяют обеспечить экономичную транспортировку этого подъемного крана к строительной площадке.</p>
          <p className="block-text__text">Этот 750-тонный кран может также использоваться с выдвижными опорами, имеющими опорную базу 13 x 13 м. Результирующая грузоподъемность в этом случае может быть увеличена до 370 %.</p>
        </div>
      </section>

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

      <section className="similar">
        <div className="container">
          <h2 className="similar__title">Похожие краны</h2>
          <div className="similar__items">
            <div className="product-item">
              <div className="product-item__body">
                <div className="product-item__images">
                  <img className="product-item__img" src="images/catalog/1.jpg" alt="" />
                </div>
                <div className="product-item__title-box">
                  <a className="product-item__title product-item__title--big" href="product.html">
                    Гусеничный кран Liebherr LR 1750
                  </a>
                </div>
                <div className="product-item__info">
                  <div className="product-item__box">
                    <div className="product-item__text">Грузоподъемность:</div>
                    <div className="product-item__text">40 тонн</div>
                    <div className="product-item__text">Длина стрелы:</div>
                    <div className="product-item__text">35 м</div>
                  </div>
                  <a className="product-item__link" href="#">
                    Все характеристики
                  </a>
                  <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                    Арендовать
                  </a>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-item__body">
                <div className="product-item__images">
                  <img className="product-item__img" src="images/catalog/1.jpg" alt="" />
                </div>
                <div className="product-item__title-box">
                  <a className="product-item__title product-item__title--big" href="product.html">
                    Гусеничный кран Liebherr LR 1750
                  </a>
                </div>
                <div className="product-item__info">
                  <div className="product-item__box">
                    <div className="product-item__text">Грузоподъемность:</div>
                    <div className="product-item__text">40 тонн</div>
                    <div className="product-item__text">Длина стрелы:</div>
                    <div className="product-item__text">35 м</div>
                  </div>
                  <a className="product-item__link" href="#">
                    Все характеристики
                  </a>
                  <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                    Арендовать
                  </a>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-item__body">
                <div className="product-item__images">
                  <img className="product-item__img" src="images/catalog/1.jpg" alt="" />
                </div>
                <div className="product-item__title-box">
                  <a className="product-item__title product-item__title--big" href="product.html">
                    Гусеничный кран Liebherr LR 1750
                  </a>
                </div>
                <div className="product-item__info">
                  <div className="product-item__box">
                    <div className="product-item__text">Грузоподъемность:</div>
                    <div className="product-item__text">40 тонн</div>
                    <div className="product-item__text">Длина стрелы:</div>
                    <div className="product-item__text">35 м</div>
                  </div>
                  <a className="product-item__link" href="#">
                    Все характеристики
                  </a>
                  <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                    Арендовать
                  </a>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-item__body">
                <div className="product-item__images">
                  <img className="product-item__img" src="images/catalog/1.jpg" alt="" />
                </div>
                <div className="product-item__title-box">
                  <a className="product-item__title product-item__title--big" href="product.html">
                    Гусеничный кран Liebherr LR 1750
                  </a>
                </div>
                <div className="product-item__info">
                  <div className="product-item__box">
                    <div className="product-item__text">Грузоподъемность:</div>
                    <div className="product-item__text">40 тонн</div>
                    <div className="product-item__text">Длина стрелы:</div>
                    <div className="product-item__text">35 м</div>
                  </div>
                  <a className="product-item__link" href="#">
                    Все характеристики
                  </a>
                  <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                    Арендовать
                  </a>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-item__body">
                <div className="product-item__images">
                  <img className="product-item__img" src="images/catalog/1.jpg" alt="" />
                </div>
                <div className="product-item__title-box">
                  <a className="product-item__title product-item__title--big" href="product.html">
                    Гусеничный кран Liebherr LR 1750
                  </a>
                </div>
                <div className="product-item__info">
                  <div className="product-item__box">
                    <div className="product-item__text">Грузоподъемность:</div>
                    <div className="product-item__text">40 тонн</div>
                    <div className="product-item__text">Длина стрелы:</div>
                    <div className="product-item__text">35 м</div>
                  </div>
                  <a className="product-item__link" href="#">
                    Все характеристики
                  </a>
                  <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                    Арендовать
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
