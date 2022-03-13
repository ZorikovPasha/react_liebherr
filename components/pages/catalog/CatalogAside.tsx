import React, { MouseEventHandler } from 'react';

interface IASideProps {
  isAsideOpened: boolean;
  isAsideBodyOpened: boolean;
  onAsideClose: MouseEventHandler<HTMLButtonElement>;
}

const CatalogAside = React.forwardRef<HTMLDivElement, IASideProps>( ({ isAsideOpened, isAsideBodyOpened, onAsideClose }, AsideRef) => {
  return (
    <aside 
      className={`catalog-content__aside aside-catalog ${isAsideOpened ? "opened" : ""}`}
    >
      <div 
        className={`aside-catalog__body ${isAsideBodyOpened ? 'opened': ""}`}
        ref={AsideRef}
      >
        <button className="aside-catalog__close" onClick={onAsideClose}>
          <img src="/static/images/close.svg" alt="крестик" />
        </button>
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
      </div>
    </aside>
  );
});

export default CatalogAside;
