import Link from "next/link";
import Slider from "react-slick";
import React from 'react';

import { SliderNextArrow, SliderPrevArrow } from "../../../components";

const RentSlider: React.FC = () => {
  const [slider, setSlider] = React.useState<Slider>();
  const [activeSlide, setActiveSlide] = React.useState(0);

  const slides = [
    { title: "Гусеничные краны", link: "Выбрать спецтехнику", text: "Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс." },
    { title: "Гусеничные краны", link: "Выбрать спецтехнику", text: "Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс." },
    { title: "Гусеничные краны", link: "Выбрать спецтехнику", text: "Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс." },
    { title: "Гусеничные краны", link: "Выбрать спецтехнику", text: "Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс." },
    { title: "Гусеничные краны", link: "Выбрать спецтехнику", text: "Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс." },
    { title: "Гусеничные краны", link: "Выбрать спецтехнику", text: "Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс." },
  ];
  const settings = {
    dots: true,
    fade: true,
    infinite: false,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} isDisabled={activeSlide === slides.length - 1} />,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="rent">
      <div className="container">
        <div className="rent__inner">
          <h2 className="rent__title">
            <span>Спецтехника</span> в аренду
          </h2>
          <Slider 
            className="rent__slider" 
            {...settings}
            ref={(slider: Slider) => setSlider(slider)}
            >
            {slides.map(({ title, text, link }, idx) => (
              <div className="rent__slider-item slider-item" key={idx}>
                <div className="slider-item__body">
                  <div className="slider-item__images wow animate__animated animate__fadeInLeft">
                    <img src="static/images/rent.png" alt="строительная техника" />
                  </div>
                  <div className="slider-item__info">
                    <h3 className="slider-item__title">{title}</h3>
                    <p className="slider-item__text">{text}</p>
                    <Link href="/catalog">
                      <a className="slider-item__link btn">{link}</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RentSlider;
