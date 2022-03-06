import React from 'react';

interface IASideProps {
  isAsideOpened: boolean;
  isAsideBodyOpened: boolean;
}

const CatalogAside = React.forwardRef<HTMLDivElement, IASideProps>( ({ isAsideOpened, isAsideBodyOpened }, AsideRef) => {
  return (
    <aside 
      className={`catalog-content__aside aside-catalog ${isAsideOpened ? "opened" : ""}`}
    >
      <div 
        className={`aside-catalog__body ${isAsideBodyOpened ? 'opened': ""}`}
        ref={AsideRef}
      >
        <div className="aside-catalog__title-box">
          <p className="aside-catalog__title">Параметры</p>
        </div>
        <div className="aside-catalog__box">
          <form className="aside-catalog__form" action="">
            <div className="aside-catalog__filter aside-filter">
              <p className="aside-filter__title">Вид техники</p>
              <label className="aside-filter__label">
                <input type="checkbox" className="aside-filter__check-real" />
                <span className="aside-filter__check-fake"></span>
                <span className="aside-filter__text">Мобильные краны</span>
              </label>
              <label className="aside-filter__label">
                <input type="checkbox" className="aside-filter__check-real" />
                <span className="aside-filter__check-fake"></span>
                <span className="aside-filter__text">Гусеничные краны</span>
              </label>
              <label className="aside-filter__label">
                <input type="checkbox" className="aside-filter__check-real" />
                <span className="aside-filter__check-fake"></span>
                <span className="aside-filter__text">Низкорамные тралы</span>
              </label>
              <label className="aside-filter__label">
                <input type="checkbox" className="aside-filter__check-real" />
                <span className="aside-filter__check-fake"></span>
                <span className="aside-filter__text">Модульные платформы</span>
              </label>
            </div>
            <div className="aside-catalog__filter aside-filter filter-weight">
              <p className="aside-filter__title">Грузоподъемность т.</p>
              <div className="aside-filter__line">
                <div className="aside-filter__input-box">
                  <span className="aside-filter__from">от</span>
                  <input type="number" className="aside-filter__input aside-filter__input-from filter-weight__from" value="" />
                </div>
                <div className="aside-filter__input-box">
                  <span className="aside-filter__from">до</span>
                  <input type="number" className="aside-filter__input aside-filter__input-to filter-weight__to" value="" />
                </div>
              </div>

              <input className="range-slider--weight" type="text" name="my_range" value="" data-type="double" data-min="40" data-max="750" data-from="40" data-to="160" data-grid="false" />
            </div>
            <div className="aside-catalog__filter aside-filter filter-height">
              <p className="aside-filter__title">Высота подъема, м.</p>
              <div className="aside-filter__line">
                <div className="aside-filter__input-box">
                  <span className="aside-filter__from">от</span>
                  <input type="number" className="aside-filter__input aside-filter__input-from filter-height__from" value="" />
                </div>
                <div className="aside-filter__input-box">
                  <span className="aside-filter__from">до</span>
                  <input type="number" className="aside-filter__input aside-filter__input-to filter-height__to" value="" />
                </div>
              </div>
              <input className="range-slider--height" type="text" name="my_range" value="" data-type="double" data-min="10" data-max="100" data-from="10" data-to="84" data-grid="false" />
            </div>
            <div className="aside-catalog__filter aside-filter filter-length">
              <p className="aside-filter__title">Длина стрелы, м.</p>
              <div className="aside-filter__line">
                <div className="aside-filter__input-box">
                  <span className="aside-filter__from">от</span>
                  <input type="number" className="aside-filter__input aside-filter__input-from filter-length__from" value="" />
                </div>
                <div className="aside-filter__input-box">
                  <span className="aside-filter__from">до</span>
                  <input type="number" className="aside-filter__input aside-filter__input-to filter-length__to" value="" />
                </div>
              </div>
              <input className="range-slider--length" type="text" name="my_range" value="" data-type="double" data-min="20" data-max="120" data-from="30" data-to="100" data-grid="false" />
            </div>
            <button className="aside-catalog__reset" type="reset">
              Очистить фильтр
            </button>
            <button className="aside-catalog__submit" type="submit">
              Показать
            </button>
          </form>
        </div>

        <div className="aside-catalog__title-box">
          <p className="aside-catalog__title">Парк техники</p>
        </div>
        <div className="aside-catalog__box aside-catalog__box--last">
          <div className="aside-catalog__dropdown aside-dropdown">
            <p className="aside-dropdown__title">Мобильные краны Liebherr LTM</p>
            <div className="aside-dropdown__box">
              <ul className="aside-dropdown__list">
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1040 (40 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1050 (50 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1070 (70 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1090 (90 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1095 (95 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1120 (120 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="#product.html">
                    LTM 1250 (250 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1300 (300 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1400 (400 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1500 (500 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1750 (750 т.)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="aside-catalog__dropdown aside-dropdown">
            <p className="aside-dropdown__title">Гусеничные краны Liebherr LR</p>
            <div className="aside-dropdown__box">
              <ul className="aside-dropdown__list">
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1040 (40 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1050 (50 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1070 (70 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1090 (90 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1095 (95 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1120 (120 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="#product.html">
                    LTM 1250 (250 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1300 (300 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1400 (400 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1500 (500 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1750 (750 т.)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="aside-catalog__dropdown aside-dropdown">
            <p className="aside-dropdown__title">Низкорамные тралы</p>
            <div className="aside-dropdown__box">
              <ul className="aside-dropdown__list">
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1040 (40 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1050 (50 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1070 (70 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1090 (90 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1095 (95 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1120 (120 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="#product.html">
                    LTM 1250 (250 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1300 (300 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1400 (400 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1500 (500 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1750 (750 т.)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="aside-catalog__dropdown aside-dropdown">
            <p className="aside-dropdown__title">Модульные платформы</p>
            <div className="aside-dropdown__box">
              <ul className="aside-dropdown__list">
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1040 (40 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1050 (50 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1070 (70 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1090 (90 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1095 (95 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1120 (120 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="#product.html">
                    LTM 1250 (250 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1300 (300 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1400 (400 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1500 (500 т.)
                  </a>
                </li>
                <li className="aside-dropdown__list-item">
                  <a className="aside-dropdown__link" href="product.html">
                    LTM 1750 (750 т.)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
});

export default CatalogAside;
