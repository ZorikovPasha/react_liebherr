import React, { MouseEventHandler } from "react";
import Range from 'rc-slider';

import { makeQueryFromParams } from "../../../utils/makeQueryFromParams";
import { useDispatch, useSelector } from "react-redux";
import { selectFliters } from "../../../redux/selectors";
import { fetchProducts } from "../../../redux/slices/productsSlice";

type AsidePropsType = {
  onOpen: React.MutableRefObject<null | (() => void)>
}

export const CatalogAside = React.forwardRef<HTMLDivElement, AsidePropsType>(({ onOpen }, AsideRef) => {

  const [isAsideOpened, setAsideOpened] = React.useState(false);
  const [isAsideBodyOpened, setAsideBodyOpened] = React.useState(false);

  onOpen.current = () => {
    setAsideOpened(true);
    setTimeout(() => setAsideBodyOpened(true), 100);
    document.documentElement.classList.add("lock");
  };

  const onAsideClose: MouseEventHandler<HTMLButtonElement> = () => {
    setAsideOpened(false);
    setAsideBodyOpened(false);
    document.documentElement.classList.remove("lock");
  };

  const trackStyle = {
    backgroundColor: "#FCB427",
    height: "2px",
  };

  const railStyle = {
    backgroundColor: "#535554",
    height: "2px",
  };

  const handleStyle = {
    top: "8px",
    width: "12px",
    height: "6px",
    backgroundColor: "#FCB427",
    border: "none",
    borderRadius: 0,
    opacity: 1,
    boxShadow: "none"
  };

  const dispatch = useDispatch()

  const { sort, weights } = useSelector(selectFliters);

  const [liftingCapacityFrom, setLiftingCapacityFrom] = React.useState(10);
  const [liftingCapacityTo, setLiftingCapacityTo] = React.useState(50);

  const [heightFrom, setHeightFrom] = React.useState(10);
  const [heightTo, setHeightTo] = React.useState(50);

  const [arrowLengthFrom, setArrowLengthFrom] = React.useState(10);
  const [arrowLengthTo, setArrowLengthTo] = React.useState(50);

  const onChangeRangeInput = (setState: React.Dispatch<React.SetStateAction<number>>, e: React.ChangeEvent<HTMLInputElement>) => setState(Number(e.target.value))

  const [isMobile, setMobile] = React.useState(false);
  const [isTracked, setTracked] = React.useState(false);
  const [islowBed, setlowBed] = React.useState(false);
  const [isModular, setModular] = React.useState(false);

  const onTypeToggle = (value: boolean, setStateCb: React.Dispatch<React.SetStateAction<boolean>>) => {
    setStateCb(!value);
  };

  const handleChangeRange = (
    setFromCb: React.Dispatch<React.SetStateAction<number>>,
    setToCb: React.Dispatch<React.SetStateAction<number>>,
    values: number | number[], 
  ) => {
    if (Array.isArray(values)) {
      setFromCb(values[0]);
      setToCb(values[1])  
    } else {
      setFromCb(values);
    }
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const query = makeQueryFromParams(
      sort,
      weights,
      {
        mobile: isMobile,
        tracked: isTracked,
        lowBed: islowBed,
        modular: isModular,
      },
      liftingCapacityFrom,
      liftingCapacityTo,
      heightFrom,
      heightTo,
      arrowLengthFrom,
      arrowLengthTo
    );

    dispatch(fetchProducts(query))
  };

  const onResetFilters = () => {
    setMobile(false);
    setTracked(false);
    setlowBed(false);
    setModular(false);

    setLiftingCapacityFrom(10);
    setLiftingCapacityTo(50);

    setHeightFrom(10);
    setHeightTo(50);

    setArrowLengthFrom(10);
    setArrowLengthTo(50);
  };

  return (
    <aside className={`catalog-content__aside aside-catalog ${isAsideOpened ? "opened" : ""}`}>
      <div 
        className={`aside-catalog__body ${isAsideBodyOpened ? "opened" : ""}`} 
        ref={AsideRef}
      >
        <button 
          className="aside-catalog__close" 
          onClick={onAsideClose}
        >
          <img src="/static/images/close.svg" alt="крестик" />
        </button>
        <div className="aside-catalog__title-box">
          <p className="aside-catalog__title">Параметры</p>
        </div>
        <div className="aside-catalog__box">
          <form className="aside-catalog__form" onSubmit={handleSubmit}>
            <div className="aside-catalog__filter aside-filter">
              <p className="aside-filter__title">Вид техники</p>
              <label className="aside-filter__label">
                <input
                  name="machinery_type"
                  type="checkbox"
                  className="aside-filter__check-real"
                  checked={isMobile}
                  onChange={onTypeToggle.bind(null, isMobile, setMobile)}
                />
                <span className="aside-filter__check-fake" />
                <span className="aside-filter__text">Мобильные краны</span>
              </label>
              <label className="aside-filter__label">
                <input
                  name="machinery_type"
                  type="checkbox"
                  className="aside-filter__check-real"
                  checked={isTracked}
                  onChange={onTypeToggle.bind(null, isTracked, setTracked)}
                />
                <span className="aside-filter__check-fake" />
                <span className="aside-filter__text">Гусеничные краны</span>
              </label>
              <label className="aside-filter__label">
                <input
                  name="machinery_type"
                  type="checkbox"
                  className="aside-filter__check-real"
                  checked={islowBed}
                  onChange={onTypeToggle.bind(null, islowBed, setlowBed)}
                />
                <span className="aside-filter__check-fake" />
                <span className="aside-filter__text">Низкорамные тралы</span>
              </label>
              <label className="aside-filter__label">
                <input
                  name=""
                  type="checkbox"
                  className="aside-filter__check-real"
                  checked={isModular}
                  onChange={onTypeToggle.bind(null, isModular, setModular)}
                />
                <span className="aside-filter__check-fake" />
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
                    value={liftingCapacityFrom}
                    onChange={onChangeRangeInput.bind(null, setLiftingCapacityFrom)}
                  />
                </div>
                <div className="aside-filter__input-box">
                  <span className="aside-filter__from">до</span>
                  <input
                    name="lifting_capacity_to"
                    type="number"
                    className="aside-filter__input aside-filter__input-to filter-weight__to"
                    value={liftingCapacityTo}
                    onChange={onChangeRangeInput.bind(null, setLiftingCapacityTo)}
                  />
                </div>
              </div>
              <Range
                range 
                step={1}
                min={0}
                max={150}
                value={[liftingCapacityFrom, liftingCapacityTo]}
                allowCross={false} 
                trackStyle={trackStyle}
                railStyle={railStyle}
                handleStyle={handleStyle}
                onChange={handleChangeRange.bind(null, setLiftingCapacityFrom, setLiftingCapacityTo)}
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
                    value={heightFrom}
                    onChange={onChangeRangeInput.bind(null, setHeightFrom)}

                  />
                </div>
                <div className="aside-filter__input-box">
                  <span className="aside-filter__from">до</span>
                  <input
                    name="height_to"
                    type="number"
                    className="aside-filter__input aside-filter__input-to filter-height__to"
                    value={heightTo}
                    onChange={onChangeRangeInput.bind(null, setHeightTo)}
                  />
                </div>
              </div>
              <Range
                range 
                step={1}
                min={0}
                max={150}
                value={[heightFrom, heightTo]}
                allowCross={false} 
                trackStyle={trackStyle}
                railStyle={railStyle}
                handleStyle={handleStyle}
                onChange={handleChangeRange.bind(null, setHeightFrom, setHeightTo)}
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
                    value={arrowLengthFrom}
                    onChange={onChangeRangeInput.bind(null, setArrowLengthFrom)}
                  />
                </div>
                <div className="aside-filter__input-box">
                  <span className="aside-filter__from">до</span>
                  <input
                    name="arrow_length_to"
                    type="number"
                    className="aside-filter__input aside-filter__input-to filter-length__to"
                    value={arrowLengthTo}
                    onChange={onChangeRangeInput.bind(null, setArrowLengthTo)}
                  />
                </div>
              </div>
            <Range
              range 
              step={1}
              min={0}
              max={150}
              value={[arrowLengthFrom, arrowLengthTo]}
              allowCross={false} 
              trackStyle={trackStyle}
              railStyle={railStyle}
              handleStyle={handleStyle}
              onChange={handleChangeRange.bind(null, setArrowLengthFrom, setArrowLengthTo)}
            />
            </div>
            <button 
              className="aside-catalog__reset" 
              type="reset" 
              onClick={onResetFilters}
            >
              Очистить фильтр
            </button>
            <button 
              className="aside-catalog__submit" 
              type="submit"
            >
              Показать
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
});
