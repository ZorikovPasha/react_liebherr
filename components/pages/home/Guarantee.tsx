import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../redux/slices/modalsSlice";

const Guarantee: React.FC = () => {
  const dispatch = useDispatch();
  
  const handleOpenPopup = () => {
    dispatch(toggleModal({ name: "request", state: true }));
    document.documentElement.classList.add('lock');
  };


  return (
    <section className="guarantee">
      <div className="container">
        <div className="guarantee__inner">
          <h2 className="guarantee__title">С нами надежно</h2>
          <div className="guarantee__body">
            <div className="guarantee__info">
              <p className="guarantee__text">Компания Еврокран успешно работает на территории РФ с 2000 года.</p>
              <p className="guarantee__text">В нашем автопарке гусеничные и мобильные краны известного немецкого бренда.</p>
              <p className="guarantee__text">Среди них есть модели любой грузоподъемности, для погрузочных, монтажных, транспортировочных и других работ.</p>
              <p className="guarantee__text">Обращение в компанию гарантирует комплексный подход к решению поставленных задач. Получить больше информации можно у менеджеров Компании Еврокран.</p>
              <button 
                className="guarantee__btn btn"
                onClick={handleOpenPopup}
                >Заказать звонок</button>
            </div>
            <div className="guarantee__items">
              <div className="guarantee__item">
                <img className="guarantee__item-img" src="static/images/guarantee-1.svg" alt="guarantee" />
                <p className="guarantee__item-title">Поставка техники точно в срок</p>
              </div>
              <div className="guarantee__item">
                <img className="guarantee__item-img" src="static/images/guarantee-2.svg" alt="guarantee" />
                <p className="guarantee__item-title">Сопровождение спецтехники</p>
              </div>
              <div className="guarantee__item">
                <img className="guarantee__item-img" src="static/images/guarantee-3.svg" alt="guarantee" />
                <p className="guarantee__item-title">Квалифицированнные специалисты</p>
              </div>
              <div className="guarantee__item">
                <img className="guarantee__item-img" src="static/images/guarantee-4.svg" alt="guarantee" />
                <p className="guarantee__item-title">Автопарк от ведущих мировых производителей</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
