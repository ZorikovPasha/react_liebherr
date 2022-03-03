import { NextPage } from "next";
import { PopupRequest } from "../components";

const Object: NextPage = () => {
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
              <a className="breadcrumbs__link" href="objects.html">
                Объексты
              </a>
            </li>
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link">Разгрузка и монтаж трансформатора</span>
            </li>
          </ul>
        </div>
      </div>

      <section className="object-top">
        <div className="container">
          <h1 className="object-top__title">Разгрузка и монтаж трансформатора</h1>
          <p className="object-top__text">Разгрузка и монтаж трансформатора ТРДН 80000-110 весом 90т на объекте: НПЗ, г.Туапсе Работу выполняет автокран LIEBHERR LTM1500 грузоподъемностью 500т.</p>
          <div className="object-top__slider">
            <div className="object-top__slider-item">
              <div className="object-top__images">
                <img src="images/object/1.jpg" alt="" />
              </div>
            </div>
            <div className="object-top__slider-item">
              <div className="object-top__images">
                <img src="images/object/2.jpg" alt="" />
              </div>
            </div>
            <div className="object-top__slider-item">
              <div className="object-top__images">
                <img src="images/object/3.jpg" alt="" />
              </div>
            </div>
            <div className="object-top__slider-item">
              <div className="object-top__images">
                <img src="images/object/4.jpg" alt="" />
              </div>
            </div>
            <div className="object-top__slider-item">
              <div className="object-top__images">
                <img src="images/object/5.jpg" alt="" />
              </div>
            </div>
            <div className="object-top__slider-item">
              <div className="object-top__images">
                <img src="images/object/6.jpg" alt="" />
              </div>
            </div>
            <div className="object-top__slider-item">
              <div className="object-top__images">
                <img src="images/object/7.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="object-top__thumbs">
            <div className="object-top__thumb">
              <div className="object-top__thumb-images">
                <img src="images/object/1.jpg" alt="" />
              </div>
            </div>
            <div className="object-top__thumb">
              <div className="object-top__thumb-images">
                <img src="images/object/2.jpg" alt="" />
              </div>
            </div>
            <div className="object-top__thumb">
              <div className="object-top__thumb-images">
                <img src="images/object/3.jpg" alt="" />
              </div>
            </div>
            <div className="object-top__thumb">
              <div className="object-top__thumb-images">
                <img src="images/object/4.jpg" alt="" />
              </div>
            </div>
            <div className="object-top__thumb">
              <div className="object-top__thumb-images">
                <img src="images/object/5.jpg" alt="" />
              </div>
            </div>
            <div className="object-top__thumb">
              <div className="object-top__thumb-images">
                <img src="images/object/6.jpg" alt="" />
              </div>
            </div>
            <div className="object-top__thumb">
              <div className="object-top__thumb-images">
                <img src="images/object/7.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="object-text block-text">
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

      <div className="another-ones">
        <div className="container">
          <h2 className="another-ones__title">Другие объекты</h2>
          <div className="another-ones__slider">
            <div className=" item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>
            <div className=" item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>

            <div className=" item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>
            <div className=" item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>

            <div className=" item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  монтаж{" "}
                </a>
              </h6>
            </div>
            <div className=" item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка г.Туапсе
                </a>
              </h6>
            </div>
          </div>
          <div className="another-ones__btn-wrapper">
            <a className="another-ones__btn" href="objects.html">
              Смотреть все
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Object;
