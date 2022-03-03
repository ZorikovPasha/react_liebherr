import { NextPage } from "next";
import { PopupRequest } from "../components";

const Objects: NextPage = () => {
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
              <span className="breadcrumbs__link">Объекты</span>
            </li>
          </ul>
        </div>
      </div>

      <section className="objects">
        <div className="container">
          <h1 className="objects__title">Работа спецтехники от Компании Еврокран</h1>
          <div className="objects__items">
            <div className="objects__item item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Монтаж г.Туапсе
                </a>
              </h6>
            </div>
            <div className="objects__item item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>
            <div className="objects__item item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>
            <div className="objects__item item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>
            <div className="objects__item item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>
            <div className="objects__item item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>
            <div className="objects__item item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>
            <div className="objects__item item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка
                </a>
              </h6>
            </div>
            <div className="objects__item item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>
            <div className="objects__item item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>
            <div className="objects__item item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>
            <div className="objects__item item-object">
              <div className="item-object__images">
                <img src="images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе г.Туапсе г.Туапсе г.Туапсе г.Туапсе г.Туапсе
                </a>
              </h6>
            </div>
          </div>
          <div className="objects__btn-wrapper">
            <button className="objects__btn">Загрузить ещё</button>
          </div>
        </div>
      </section>

      <section className=" block-text">
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
    </>
  );
};

export default Objects;
