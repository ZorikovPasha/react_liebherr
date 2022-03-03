import Link from "next/link";
import React from "react";
import Slider, { Settings } from "react-slick";

const SliderPrevArrow: React.FC = () => {
  return (
    <button type="button" className="slick-btn slick-prev">
      <img src="static/images/slider-arr-left.svg" alt="" />
    </button>
  );
};

const SliderNextArrow: React.FC = () => {
  return (
    <button type="button" className="slick-btn slick-next">
      <img src="static/images/slider-arr-right.svg" alt="" />
    </button>
  );
};

const Top: React.FC = () => {
  const settings: Settings = {
    autoplay: true,
    draggable: true,
    fade: true,
    infinite: false,
    prevArrow: <SliderPrevArrow />,
    nextArrow: <SliderNextArrow />,
    responsive: [
      {
        breakpoint: 670,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const slides = [
    { num: "01", total: "04", src: "static/images/top-bg.jpg" },
    { num: "02", total: "04", src: "static/images/top-bg.jpg" },
    { num: "03", total: "04", src: "static/images/top-bg.jpg" },
    { num: "04", total: "04", src: "static/images/top-bg.jpg" },
  ];
  return (
    
    <section className="top">

      <div className="container-fluid">
        <div className="top__inner">
          <Slider className={`top__slider`} {...settings}>
            {slides.map(({ num, total, src }) => (
              <div className="top__slider-item" key={num + src}>
                <div className="top__slider-numbers">
                  <span className="top__slider-num">{num}/</span>
                  <span className="top__slider-total">{total}</span>
                </div>
                <div className="top__slider-images">
                  <img className="top__slider-img" src={src} alt="background image" />
                </div>
              </div>
            ))}
          </Slider>

          <div className="top__content">
            <div className="top__container container">
              <div className="top__content-box">
                <h1 className="top__title animate__animated animate__fadeIn animate__delay-1s">Аренда спецтехники Liebherr для любых задач</h1>
                <p className="top__text animate__animated animate__fadeIn animate__delay-2s">Мобильные, гусеничные и башенные краны LIEBHERR в аренду для любых задач и грузов. работаем по всей России</p>
                <div className="top__btns animate__animated animate__fadeIn animate__delay-2s">
                  <button className="top__callme btn">Заказать звонок</button>
                  <Link href="/catalog">
                    <a className="top__link">Каталог техники</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
