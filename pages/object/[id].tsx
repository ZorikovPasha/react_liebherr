import { NextPage } from "next";
import { BreadCrumbs, SceneFootage, Texts } from "../../components";

const Object: NextPage = () => {
  return (
    <>
      <BreadCrumbs items={[]}></BreadCrumbs>

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

      <SceneFootage></SceneFootage>

      <Texts></Texts>

      <div className="another-ones">
        <div className="container">
          <h2 className="another-ones__title">Другие объекты</h2>
          <div className="another-ones__slider">
            <div className=" item-object">
              <div className="item-object__images">
                <img src="static/images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>
            <div className=" item-object">
              <div className="item-object__images">
                <img src="static/images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>

            <div className=" item-object">
              <div className="item-object__images">
                <img src="static/images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>
            <div className=" item-object">
              <div className="item-object__images">
                <img src="static/images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе
                </a>
              </h6>
            </div>

            <div className=" item-object">
              <div className="item-object__images">
                <img src="static/images/objects/1.jpg" alt="" />
              </div>
              <h6 className="item-object__title">
                <a className="item-object__link" href="object.html">
                  монтаж{" "}
                </a>
              </h6>
            </div>
            <div className=" item-object">
              <div className="item-object__images">
                <img src="static/images/objects/1.jpg" alt="" />
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
