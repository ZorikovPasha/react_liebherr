
import React from 'react';
import { MouseEventHandler } from "react";
import Select from 'react-select'

interface ICOntrolsProps {
onAsideOpen: MouseEventHandler<HTMLButtonElement>;
}
const FilterControls = React.forwardRef<HTMLButtonElement, ICOntrolsProps>(({ onAsideOpen }, asideBtnRef) => {
  const [activeView, setActiveView] = React.useState('grid');
  const sortOptions = [
    {value: "default", label: "По умолчанию"},
    {value: "heght", label: "По высоте"},
    {value: "liftingCapacity", label: "По грузоподъемности"},
    {value: "length", label: "По длине"},
  ];

  const onChangeViewGrid = () => {
    setActiveView('grid')
  };

  const onChangeViewList = () => {
    setActiveView('list')
  };


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
          value={sortOptions[0]}
          className="catalog-controls__sort-select"
          options={sortOptions} 
          />
      </div>
      <div className="catalog-controls__view view">
        <button 
          onClick={onChangeViewGrid}
          className={`catalog-controls__btn view__btn-grid ${activeView === 'grid' ? 'catalog-controls__btn--active' : ''}`}
          >
          <img src="/static/images/view-grid.svg" alt="сетка иконка" />
        </button>
        <button 
          onClick={onChangeViewList}
          className={`catalog-controls__btn view__btn-list ${activeView === 'list' ? 'catalog-controls__btn--active' : ''}`}
          >
          <img src="/static/images/view-list.svg" alt="список иконка" />
        </button>
      </div>
    </div>
  );
});

export default FilterControls;
