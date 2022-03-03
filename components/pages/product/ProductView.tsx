const ProductView: React.FC = () => {
  return (
    <section className="product">
      <div className="container">
        <h1 className="product__title">Гусеничный кран Liebherr LR 1750</h1>
        <div className="product__inner">
          <div className="product__images">
            <div className="product__slider">
              <div className="product__slider-item">
                <div className="product__slider-images">
                  <img src="images/product-slider-1.jpg" alt="" />
                </div>
              </div>
              <div className="product__slider-item">
                <div className="product__slider-images">
                  <img src="images/product-slider-1.jpg" alt="" />
                </div>
              </div>
              <div className="product__slider-item">
                <div className="product__slider-images">
                  <img src="images/product-slider-1.jpg" alt="" />
                </div>
              </div>
              <div className="product__slider-item">
                <div className="product__slider-images">
                  <img src="images/product-slider-1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="product__thumbs">
              <div className="product__thumb">
                <div className="product__thumb-images">
                  <img src="images/product-slider-1.jpg" alt="" />
                </div>
              </div>
              <div className="product__thumb">
                <div className="product__thumb-images">
                  <img src="images/product-slider-1.jpg" alt="" />
                </div>
              </div>
              <div className="product__thumb">
                <div className="product__thumb-images">
                  <img src="images/product-slider-1.jpg" alt="" />
                </div>
              </div>
              <div className="product__thumb">
                <div className="product__thumb-images">
                  <img src="images/product-slider-1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="product__info">
            <ul className="product__info-list product-list">
              <li className="product-list__item">
                <p className="product-list__text">Максимальная грузоподъемность:</p>
                <p className="product-list__text">750 т</p>
              </li>
              <li className="product-list__item">
                <p className="product-list__text">При вылете стрелы:</p>
                <p className="product-list__text">7,00 м</p>
              </li>
              <li className="product-list__item">
                <p className="product-list__text">Главная стрела:</p>
                <p className="product-list__text">140 м</p>
              </li>
              <li className="product-list__item">
                <p className="product-list__text">Максимальная высота подъема:</p>
                <p className="product-list__text">191 м</p>
              </li>
              <li className="product-list__item">
                <p className="product-list__text">Максимальный вылет стрелы:</p>
                <p className="product-list__text">156 м</p>
              </li>
              <li className="product-list__item">
                <p className="product-list__text">Решетчатый удлинитель:</p>
                <p className="product-list__text">от 14,00 до 105,00 м</p>
              </li>
              <li className="product-list__item">
                <p className="product-list__text">Скорость передвижения:</p>
                <p className="product-list__text">1,65 км/ч</p>
              </li>
              <li className="product-list__item">
                <p className="product-list__text product-list__text--bold">Стоимость аренды:</p>
                <p className="product-list__text product-list__text--bold">Договорная</p>
              </li>
            </ul>
            <a className="product__info-btn btn" href="contacts.html">
              Заказать
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
