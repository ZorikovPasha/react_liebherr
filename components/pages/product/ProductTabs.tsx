const ProductTabs: React.FC = () => {
  return (
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
  );
};

export default ProductTabs;
