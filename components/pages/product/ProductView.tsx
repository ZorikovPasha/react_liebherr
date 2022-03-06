import React from 'react';
import Slider from 'react-slick';

const ProductView: React.FC = () => {
  const [thumbsSlider, setThumbsSlider] = React.useState<Slider>();
  const [fullSlider, setFullSlider] = React.useState<Slider>();

  const info = {
    liftingCapacity: { text: "Максимальная грузоподъемность", value: 750 },
    arrowLength: { text: "При вылете стрелы", value: 7 } ,
    mainArrowLength: { text: "Главная стрела", value: 140 },
    maxHeight: { text: "Максимальная высота подъема", value: 191 },
    maxRadius: { text: "Максимальный вылет стрелы", value: 156 },
    speed: { text: "Скорость передвижения", value: 1.65 },
    extension: { text: "Решетчатый удлинитель", value: 14.105},
    price: { text: "Стоимость аренды", value: "Договорная"},
  };
  const thumbs = [
    { imgSrc: "/static/images/product-slider-1.jpg", },
    { imgSrc: "/static/images/product-slider-2.jpg", },
    { imgSrc: "/static/images/product-slider-1.jpg", },
  ];

  const slides = [
    { imgSrc: "/static/images/product-slider-1.jpg", },
    { imgSrc: "/static/images/product-slider-2.jpg", },
    { imgSrc: "/static/images/product-slider-1.jpg", },
  ];

  const thumsSettings = {
    slidesToShow: 3,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
  };

  const slidesSettings = {
    fade: true,
    arrows: false,
  };

  return (
    <section className="product">
      <div className="container">
        <h1 className="product__title">Гусеничный кран Liebherr LR 1750</h1>
        <div className="product__inner">
          <div className="product__images">
            <Slider 
              {...slidesSettings}
              className="product__slider"
              asNavFor={thumbsSlider} 
              ref={(slider1: Slider) => setFullSlider(slider1)}
              >
              {slides.map(({ imgSrc }, idx) => (
                <div className="product__slider-item" key={idx}>
                  <div className="product__slider-images">
                    <img src={imgSrc} alt="Строительная техника" />
                  </div>
                </div>
              ))}
            </Slider>
            <Slider 
              {...thumsSettings}
              className="product__thumbs"
              asNavFor={fullSlider} 
              ref={(slider2: Slider) => setThumbsSlider(slider2)}
              >
              {thumbs.map(({ imgSrc }, idx) => (
                <div className="product__thumb" key={idx}>
                  <div className="product__thumb-images">
                    <img src={imgSrc} alt="Строительная техника" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="product__info">
            <ul className="product__info-list product-list">
              { Object.entries(info).map(arr => (
                <li className="product-list__item">
                  <p className="product-list__text">{arr[1].text}:</p>
                  <p className="product-list__text">{arr[1].value }</p>
                </li>
              )) }
            </ul>
            <button className="product__info-btn btn">
              Заказать
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
