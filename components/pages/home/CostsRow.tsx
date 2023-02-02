const CostsRow: React.FC = () => {
  const costsItems = [
    { imgSrc: "static/images/cost-1.png", text: "Стоимость аренды крана определяется так: 8 (восемь) часов работы каждой единицы спецтехники в течение смены." },
    { imgSrc: "static/images/cost-2.png", text: "География доставки спецтехники – вся территория РФ и страны СНГ." },
    { imgSrc: "static/images/cost-3.png", text: "Стоимость мобилизации и демобилизации за МКАД и на территорию в границах ТТК обговаривается индивидуально и требует дополнительной оплаты." },
    { imgSrc: "static/images/cost-4.png", text: "Обозначенная в прайс-листе стоимость услуг включает НДС – 20 %." },
  ];
  return (
    <section className="cost rel after before">
      <div className="container">
        <div className="cost__inner">
          <h2 className="cost__title">Из чего складывается стоимость аренды</h2>
          <div className="cost__items flex jcsb">
            {costsItems.map(({ imgSrc, text }, idx) => (
              <div className="cost__item" key={imgSrc}>
                <p className={`cost__item-num cost__item-num--${idx + 1}`}>
                  <img src={imgSrc} alt="cost" />
                </p>
                <p className="cost__item-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostsRow;
