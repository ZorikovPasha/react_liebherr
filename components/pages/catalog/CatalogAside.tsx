import React from "react";
import { Formik } from "formik";
import { Range } from "react-range";
interface IASideProps {
  isAsideOpened: boolean;
  isAsideBodyOpened: boolean;
  onAsideClose: React.MouseEventHandler<HTMLButtonElement>;
}


const CatalogAside = React.forwardRef<HTMLDivElement, IASideProps>(({ isAsideOpened, isAsideBodyOpened, onAsideClose }, AsideRef) => {
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 300;
  const [values, setValues] = React.useState([25, 75]);
  console.log(values);

  const userFormValues = {
    machinery_type: { 
      mobile: false,
      tracked: false,
      low_bed: false,
      modular: false,
    },
    lifting_capacity_from: 50,
    lifting_capacity_to: 100,
    height_from: 20,
    height_to: 120,
    arrow_length_from: 50,
    arrow_length_to: 150,
  };

  const onResetFilters = () => {
    let key: keyof typeof userFormValues.machinery_type;

    for (key in userFormValues.machinery_type) {
      userFormValues.machinery_type[key] = false
    }

    userFormValues.lifting_capacity_from = 50;
    userFormValues.lifting_capacity_to = 100;
    userFormValues.height_from = 20;
    userFormValues.height_to = 120;
    userFormValues.arrow_length_from = 50;
    userFormValues.arrow_length_to = 150;
  };

  return (
    <aside className={`catalog-content__aside aside-catalog ${isAsideOpened ? "opened" : ""}`}>
      <div className={`aside-catalog__body ${isAsideBodyOpened ? "opened" : ""}`} ref={AsideRef}>
        <button className="aside-catalog__close" onClick={onAsideClose}>
          <img src="/static/images/close.svg" alt="крестик" />
        </button>
        <div className="aside-catalog__title-box">
          <p className="aside-catalog__title">Параметры</p>
        </div>
        <div className="aside-catalog__box">
          <Formik
            enableReinitialize
            initialValues={userFormValues} 
            onSubmit={() => {}}
            >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <form className="aside-catalog__form" onSubmit={handleSubmit}>
                <div className="aside-catalog__filter aside-filter">
                  <p className="aside-filter__title">Вид техники</p>
                  <label className="aside-filter__label">
                    <input
                      name="machinery_type"
                      type="checkbox"
                      className="aside-filter__check-real"
                      checked={values.machinery_type.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="aside-filter__check-fake"></span>
                    <span className="aside-filter__text">Мобильные краны</span>
                  </label>
                  <label className="aside-filter__label">
                    <input
                      name="machinery_type"
                      type="checkbox"
                      className="aside-filter__check-real"
                      checked={values.machinery_type.tracked}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="aside-filter__check-fake"></span>
                    <span className="aside-filter__text">Гусеничные краны</span>
                  </label>
                  <label className="aside-filter__label">
                    <input
                      name="machinery_type"
                      type="checkbox"
                      className="aside-filter__check-real"
                      checked={values.machinery_type.low_bed}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="aside-filter__check-fake"></span>
                    <span className="aside-filter__text">Низкорамные тралы</span>
                  </label>
                  <label className="aside-filter__label">
                    <input
                      name=""
                      type="checkbox"
                      className="aside-filter__check-real"
                      checked={values.machinery_type.modular}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="aside-filter__check-fake"></span>
                    <span className="aside-filter__text">Модульные платформы</span>
                  </label>
                </div>
                <div className="aside-catalog__filter aside-filter filter-weight">
                  <p className="aside-filter__title">Грузоподъемность т.</p>
                  <div className="aside-filter__line">
                    <div className="aside-filter__input-box">
                      <span className="aside-filter__from">от</span>
                      <input
                        name="lifting_capacity_from"
                        type="number"
                        className="aside-filter__input aside-filter__input-from filter-weight__from"
                        value={values.lifting_capacity_from}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="aside-filter__input-box">
                      <span className="aside-filter__from">до</span>
                      <input
                        name="lifting_capacity_to"
                        type="number"
                        className="aside-filter__input aside-filter__input-to filter-weight__to"
                        value={values.lifting_capacity_to}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <Range
                    values={[values.lifting_capacity_from, values.lifting_capacity_to]}
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    onChange={(values) => {
                      setValues(values);
                    }}
                    renderTrack={({ props, children }) => (
                      <div
                        className="range-slider--weight"
                        {...props}
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                          ...props.style,
                          height: "36px",
                          display: "flex",
                          width: "100%",
                        }}
                      >
                        <div
                          ref={props.ref}
                          style={{
                          backgroundColor: "#fcb427",
                          height: "2px",
                          width: "100%",
                          borderRadius: "4px",
                          alignSelf: "center",
                          }}
                        >
                          {children}
                        </div>
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          width: '19px',
                          height: '6px',
                          backgroundColor: '#fcb427'
                        }}
                      />
                    )}
                  />
                </div>
                <div className="aside-catalog__filter aside-filter filter-height">
                  <p className="aside-filter__title">Высота подъема, м.</p>
                  <div className="aside-filter__line">
                    <div className="aside-filter__input-box">
                      <span className="aside-filter__from">от</span>
                      <input
                        name="height_from"
                        type="number"
                        className="aside-filter__input aside-filter__input-from filter-height__from"
                        value={values.height_from}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="aside-filter__input-box">
                      <span className="aside-filter__from">до</span>
                      <input
                        name="height_to"
                        type="number"
                        className="aside-filter__input aside-filter__input-to filter-height__to"
                        value={values.height_to}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <input
                    className="range-slider--height"
                    type="text"
                    name="my_range"
                    value=""
                    data-type="double"
                    data-min="10"
                    data-max="100"
                    data-from="10"
                    data-to="84"
                    data-grid="false"
                  />
                </div>
                <div className="aside-catalog__filter aside-filter filter-length">
                  <p className="aside-filter__title">Длина стрелы, м.</p>
                  <div className="aside-filter__line">
                    <div className="aside-filter__input-box">
                      <span className="aside-filter__from">от</span>
                      <input 
                        name="arrow_length_from"
                        type="number" 
                        className="aside-filter__input aside-filter__input-from filter-length__from" 
                        value={values.arrow_length_from}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                    </div>
                    <div className="aside-filter__input-box">
                      <span className="aside-filter__from">до</span>
                      <input
                        name="arrow_length_to"
                        type="number" 
                        className="aside-filter__input aside-filter__input-to filter-length__to" 
                        value={values.arrow_length_to}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                    </div>
                  </div>
                  <input
                    className="range-slider--length"
                    type="text"
                    name="my_range"
                    value=""
                    data-type="double"
                    data-min="20"
                    data-max="120"
                    data-from="30"
                    data-to="100"
                    data-grid="false"
                  />
                </div>
                <button 
                  className="aside-catalog__reset" 
                  type="reset"
                  onClick={onResetFilters}
                  >
                  Очистить фильтр
                </button>
                <button className="aside-catalog__submit" type="submit">
                  Показать
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </aside>
  );
});

export default CatalogAside;
