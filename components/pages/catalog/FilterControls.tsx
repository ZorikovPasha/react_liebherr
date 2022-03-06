
import React from 'react';
import { MouseEventHandler } from "react";

interface ICOntrolsProps {
onAsideOpen: MouseEventHandler<HTMLButtonElement>;
}
const FilterControls = React.forwardRef<HTMLButtonElement, ICOntrolsProps>(({ onAsideOpen }, asideBtnRef) => {

  return (
    <div className="catalog-content__controls catalog-controls">
      <div className="catalog-controls__aside-toggle aside-toggle">
        <button 
          className="aside-toggle__btn" 
          onClick={onAsideOpen}
          ref={asideBtnRef}
          >
          <img src="/static/images/aside-toggle.svg" alt="иконка переключатель" />
        </button>
      </div>
      <div className="catalog-controls__sort">
        <img src="/static/images/sort-icon.svg" alt="" />
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
          <input 
            type="text" 
            className="sort-select__input" 
            value="" 
            />
        </div>
      </div>
      <div className="catalog-controls__view view">
        <button className="catalog-controls__btn view__btn-grid">
          <img src="/static/images/view-grid.svg" alt="сетка" />
        </button>
        <button className="catalog-controls__btn view__btn-list">
          <img src="/static/images/view-list.svg" alt="список" />
        </button>
      </div>
    </div>
  );
});

export default FilterControls;
