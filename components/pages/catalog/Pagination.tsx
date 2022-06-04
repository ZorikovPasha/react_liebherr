import React from 'react';
import { useDispatch } from 'react-redux';
import { setPaginate } from '../../../redux/slices/CatalogFiltersSlice';

interface IPagination {
  catalogItemsCount: number,
}

const Pagination: React.FC<IPagination> = ({catalogItemsCount}) => {
  let [activePage, setActivePage] = React.useState(0);

  const dispatch = useDispatch();

  const ITEMS_PER_PAGE = 10;
  const pagesCount = Math.ceil(catalogItemsCount / ITEMS_PER_PAGE);
  const pages = [...Array(pagesCount)].map((_,i) => i);



  const onPrevPage = () => {
    if (activePage > 0) {
      setActivePage(--activePage);
      dispatch(setPaginate(--activePage))
    }
  };

  
  const onNextPage = () => {
    if (activePage < pagesCount) {
      setActivePage(++activePage);
      dispatch(setPaginate(++activePage))
    }
  };

  const onPageChange = (num: number) => {
    setActivePage(num);
    dispatch(setPaginate(num))
  };


  return (
    <div className="pagination">
      <button 
        className={`pagination__arrow`}
        disabled={activePage <= 0}
        onClick={onPrevPage}
        >
        <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.646446 4.35355C0.451183 4.15829 0.451183 3.84171 0.646446 3.64644L3.82843 0.464464C4.02369 0.269202 4.34027 0.269202 4.53553 0.464464C4.7308 0.659726 4.7308 0.976308 4.53553 1.17157L1.70711 4L4.53553 6.82842C4.73079 7.02369 4.73079 7.34027 4.53553 7.53553C4.34027 7.73079 4.02369 7.73079 3.82843 7.53553L0.646446 4.35355ZM31 4.5L0.999998 4.5L0.999998 3.5L31 3.5L31 4.5Z" fill="#535554" />
        </svg>
      </button>
      <ul className="pagination__list">
        {pages.map(num => (
          <li
            key={num}
            className={`pagination__item ${activePage === num ? 'pagination__item--active' : '' }`}
            onClick={onPageChange.bind(null, num)}
            >
            <span className="pagination__link">{num + 1}</span>
          </li>
        ))}

        {/* <li className="pagination__item pagination__item--dots">
          <span></span>
          <span></span>
          <span></span>
        </li> */}
      </ul>
      <button 
        className={`pagination__arrow`}
        disabled={activePage + 1 >= pagesCount}
        onClick={onNextPage}
        >
        <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64644L27.1716 0.464464C26.9763 0.269202 26.6597 0.269202 26.4645 0.464464C26.2692 0.659726 26.2692 0.976308 26.4645 1.17157L29.2929 4L26.4645 6.82842C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716 7.53553L30.3536 4.35355ZM4.37114e-08 4.5L30 4.5L30 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#535554" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
