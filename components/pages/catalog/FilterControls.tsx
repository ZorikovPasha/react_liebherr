
import React from 'react';
import { MouseEventHandler } from "react";
import Select from 'react-select'

interface ICOntrolsProps {
onAsideOpen: MouseEventHandler<HTMLButtonElement>;
}
const FilterControls = React.forwardRef<HTMLButtonElement, ICOntrolsProps>(({ onAsideOpen }, asideBtnRef) => {
  const sortOptions = [
    {value: "default", label: "По умолчанию"},
    {value: "heght", label: "по высоте"},
    {value: "liftingCapacity", label: "По грузоподъемности"},
    {value: "length", label: "По длине"},
  ];

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
        <Select
          className="catalog-controls__sort-select"
          options={sortOptions} 
          />
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
