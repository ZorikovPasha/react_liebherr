import React from "react";
import { PopupRequest } from "../..";

const Guarantee: React.FC = () => {
  const [isPopupRequestOpened, setPopupRequestOpened] = React.useState(false);

  const handletOpenPopup = React.useCallback(() => {
    document.body.classList.add('lock');
    setPopupRequestOpened(true);
  }, []);

  const handletClosePopup = React.useCallback(() => {
    document.body.classList.remove('lock');
    setPopupRequestOpened(false);
  }, []);

  return (
    <section className="guarantee">
      {isPopupRequestOpened && <PopupRequest onClose={handletClosePopup}/>}
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
                onClick={handletOpenPopup}
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
