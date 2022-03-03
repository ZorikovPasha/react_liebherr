import { NextPage } from "next";

const Catalog: NextPage = () => {
  return (
    <>
      <section className="catalog-tabs">
        <div className="container">
          <h1 className="catalog-tabs__title">Каталог техники</h1>
          <div className="catalog-tabs__items">
            <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-40">
              40 тонн
            </button>
            <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-50">
              50 тонн
            </button>
            <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-65">
              65 тонн
            </button>
            <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-68">
              68 тонн
            </button>
            <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-70">
              70 тонн
            </button>
            <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-82-5">
              82,5 тонн
            </button>
            <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-40">
              82,5 тонн
            </button>
            <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-84">
              84 тонн
            </button>
            <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-85">
              85 тонн
            </button>
            <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-90">
              90 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-93-8">
              93,8 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-95">
              95 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-112-5">
              112,5 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-120">
              120 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-131-6">
              131,6 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-150">
              150 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-160">
              160 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-200">
              200 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-250">
              250 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-280">
              280 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-300">
              300 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-350">
              350 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-400">
              400 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-50">
              500 тонн
            </button>
            <button className="catalog-tabs__item" data-filter=".weight-750">
              750 тонн
            </button>
          </div>
          <button className="catalog-tabs__more">ещё</button>
        </div>
      </section>

      <div className="catalog-content">
        <div className="container">
          <div className="catalog-content__inner">
            <aside className="catalog-content__aside aside-catalog">
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
            </aside>
            <div className="catalog-content__body">
              <div className="catalog-content__controls catalog-controls">
                <div className="catalog-controls__aside-toggle aside-toggle">
                  <button className="aside-toggle__btn">
                    <img src="images/aside-toggle.svg" alt="" />
                  </button>
                </div>
                <div className="catalog-controls__sort">
                  <img src="images/sort-icon.svg" alt="" />
                  <div className="dropdown">
                    <button className="catalog-controls__select sort-select">По умолчанию</button>
                    <ul className="sort-select__list">
                      <li className="sort-select__item" data-value="1">
                        Не по умолчанию
                      </li>
                      <li className="sort-select__item" data-value="2">
                        по высоте
                      </li>
                      <li className="sort-select__item" data-value="3">
                        По грузоподъемности
                      </li>
                      <li className="sort-select__item" data-value="4">
                        По длине
                      </li>
                    </ul>
                    <input type="text" className="sort-select__input" value="" />
                  </div>
                </div>
                <div className="catalog-controls__view view">
                  <button className="catalog-controls__btn view__btn-grid">
                    <img src="images/view-grid.svg" alt="" />
                  </button>
                  <button className="catalog-controls__btn view__btn-list">
                    <img src="images/view-list.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="catalog-content__items">
                <div className="product-item mix weight-40">
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
                      <a className="product-item__link" href="product.html">
                        Все характеристики
                      </a>
                      <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                        Арендовать
                      </a>
                    </div>
                  </div>
                </div>

                <div className="product-item mix weight-40">
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
                      <a className="product-item__link" href="product.html">
                        Все характеристики
                      </a>
                      <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                        Арендовать
                      </a>
                    </div>
                  </div>
                </div>

                <div className="product-item mix weight-50">
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
                      <a className="product-item__link" href="product.html">
                        Все характеристики
                      </a>
                      <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                        Арендовать
                      </a>
                    </div>
                  </div>
                </div>

                <div className="product-item mix weight-50">
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
                      <a className="product-item__link" href="product.html">
                        Все характеристики
                      </a>
                      <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                        Арендовать
                      </a>
                    </div>
                  </div>
                </div>

                <div className="product-item mix weight-200">
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
                      <a className="product-item__link" href="product.html">
                        Все характеристики
                      </a>
                      <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                        Арендовать
                      </a>
                    </div>
                  </div>
                </div>

                <div className="product-item mix weight-50">
                  <div className="product-item__body">
                    <div className="product-item__images">
                      <img className="product-item__img" src="images/catalog/1.jpg" alt="" />
                    </div>
                    <div className="product-item__title-box">
                      <a className="product-item__title product-item__title--big" href="product.html">
                        {" "}
                        кран
                      </a>
                    </div>
                    <div className="product-item__info">
                      <div className="product-item__box">
                        <div className="product-item__text">Грузоподъемность:</div>
                        <div className="product-item__text">40 тонн</div>
                        <div className="product-item__text">Длина стрелы:</div>
                        <div className="product-item__text">35 м</div>
                      </div>
                      <a className="product-item__link" href="product.html">
                        Все характеристики
                      </a>
                      <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                        Арендовать
                      </a>
                    </div>
                  </div>
                </div>

                <div className="product-item mix weight-300">
                  <div className="product-item__body">
                    <div className="product-item__images">
                      <img className="product-item__img" src="images/catalog/1.jpg" alt="" />
                    </div>
                    <div className="product-item__title-box">
                      <a className="product-item__title product-item__title--big" href="product.html">
                        Гусеничный кран
                      </a>
                    </div>
                    <div className="product-item__info">
                      <div className="product-item__box">
                        <div className="product-item__text">Грузоподъемность:</div>
                        <div className="product-item__text">40 тонн</div>
                        <div className="product-item__text">Длина стрелы:</div>
                        <div className="product-item__text">35 м</div>
                      </div>
                      <a className="product-item__link" href="product.html">
                        Все характеристики
                      </a>
                      <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                        Арендовать
                      </a>
                    </div>
                  </div>
                </div>

                <div className="product-item mix weight-70">
                  <div className="product-item__body">
                    <div className="product-item__images">
                      <img className="product-item__img" src="images/catalog/1.jpg" alt="" />
                    </div>
                    <div className="product-item__title-box">
                      <a className="product-item__title product-item__title--big" href="product.html">
                        Гусеничный кран Liebherr LR 1750-5040DF
                      </a>
                    </div>
                    <div className="product-item__info">
                      <div className="product-item__box">
                        <div className="product-item__text">Грузоподъемность:</div>
                        <div className="product-item__text">40 тонн</div>
                        <div className="product-item__text">Длина стрелы:</div>
                        <div className="product-item__text">35 м</div>
                      </div>
                      <a className="product-item__link" href="product.html">
                        Все характеристики
                      </a>
                      <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                        Арендовать
                      </a>
                    </div>
                  </div>
                </div>

                <div className="product-item mix weight-84">
                  <div className="product-item__body">
                    <div className="product-item__images">
                      <img className="product-item__img" src="images/catalog/1.jpg" alt="" />
                    </div>
                    <div className="product-item__title-box">
                      <a className="product-item__title product-item__title--big" href="product.html">
                        {" "}
                        Liebherr LR 1750
                      </a>
                    </div>
                    <div className="product-item__info">
                      <div className="product-item__box">
                        <div className="product-item__text">Грузоподъемность:</div>
                        <div className="product-item__text">40 тонн</div>
                        <div className="product-item__text">Длина стрелы:</div>
                        <div className="product-item__text">35 м</div>
                      </div>
                      <a className="product-item__link" href="product.html">
                        Все характеристики
                      </a>
                      <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                        Арендовать
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination">
                <a className="pagination__arrow pagination__arrow--active" href="#">
                  <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.646446 4.35355C0.451183 4.15829 0.451183 3.84171 0.646446 3.64644L3.82843 0.464464C4.02369 0.269202 4.34027 0.269202 4.53553 0.464464C4.7308 0.659726 4.7308 0.976308 4.53553 1.17157L1.70711 4L4.53553 6.82842C4.73079 7.02369 4.73079 7.34027 4.53553 7.53553C4.34027 7.73079 4.02369 7.73079 3.82843 7.53553L0.646446 4.35355ZM31 4.5L0.999998 4.5L0.999998 3.5L31 3.5L31 4.5Z" fill="#535554" />
                  </svg>
                </a>
                <ul className="pagination__list">
                  <li className="pagination__item pagination__item--active">
                    <span className="pagination__link">1</span>
                  </li>
                  <li className="pagination__item">
                    <a className="pagination__link" href="#">
                      2
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a className="pagination__link" href="#">
                      3
                    </a>
                  </li>

                  <li className="pagination__item pagination__item--dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </li>

                  <li className="pagination__item">
                    <a className="pagination__link" href="#">
                      5
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a className="pagination__link" href="#">
                      6
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a className="pagination__link" href="#">
                      7
                    </a>
                  </li>
                </ul>
                <a className="pagination__arrow" href="#">
                  <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64644L27.1716 0.464464C26.9763 0.269202 26.6597 0.269202 26.4645 0.464464C26.2692 0.659726 26.2692 0.976308 26.4645 1.17157L29.2929 4L26.4645 6.82842C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716 7.53553L30.3536 4.35355ZM4.37114e-08 4.5L30 4.5L30 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#535554" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <section className="block-text">
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

      <section className="contacts">
        <div className="container">
          <h2 className="contacts__title">Контакты</h2>
          <div className="contacts__inner">
            <div className="contacts__content">
              <p className="contacts__text">Ежедневно мы развиваемся и стараемся стать лучше для вас, поэтому всегда рады получить от вас обратную связь с пожеланиями и идеями по улучшению наших продуктов!</p>
              <p className="contacts__text">Если у вас остались вопросы или есть предложения как стать лучше пишите нам!</p>
              <a href="#" className="contacts__address">
                г. Москва, Россия, 117628,м. Бульвар Дмитрия Донского, ул. Куликовская, 12{" "}
              </a>
              <div className="contacts__box">
                <div className="contacts__phones">
                  <a className="contacts__phone" href="tel:+74999299666">
                    +7 (499)929-96-66
                  </a>
                  <a className="contacts__phone" href="tel:+79853645518">
                    +7 (985)364-55-18
                  </a>
                  <a className="contacts__phone" href="tel:+79852262030">
                    +7 (985)226-20-30
                  </a>
                </div>
                <div className="contacts__time">
                  <a className="contacts__mail" href="mailto:evro-k@yandex.ru">
                    evro-k@yandex.ru
                  </a>
                  <p className="contacts__schedule">10:00 - 17:00</p>
                </div>
              </div>
            </div>
            <form className="contacts__form form-contacts">
              <input type="text" className="form-contacts__input" placeholder="Имя" />
              <div className="form-contacts__line">
                <input className="form-contacts__input email-mask" type="text" placeholder="E-mail" />
                <input className="form-contacts__input input-mask" type="tel" placeholder="Телефон" />
              </div>
              <textarea className="form-contacts__area" placeholder="Сообщение"></textarea>
              <label className="form-contacts__label form-label">
                <input type="checkbox" className="form-label__checkbox-real" />
                <span className="form-label__checkbox-fake"></span>
                <span className="form-label__text">
                  Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
                </span>
              </label>
              <button className="form-contacts__btn btn" type="submit">
                Оставить заявку
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.59309082283!2d37.5659100109784!3d55.57353554252417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada349fa0335%3A0x664f1a375fe7ab8a!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1630922368972!5m2!1sru!2sru" width="100%" height="548" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
      </div>
    </>
  );
};

export default Catalog;
