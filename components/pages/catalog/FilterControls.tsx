const FilterControls: React.FC = () => {
  return (
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
  );
};

export default FilterControls;
