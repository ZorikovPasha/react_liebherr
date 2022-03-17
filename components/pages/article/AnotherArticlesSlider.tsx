import Link from 'next/link';
import Slider from 'react-slick';
import React from 'react';

import { SliderNextArrow, SliderPrevArrow } from "../../../components";

const AnotherArticlesSlider: React.FC = () => {
  const [slider, setSlider] = React.useState<Slider>();
  const [activeSlide, setActiveSlide] = React.useState(0);

  const articles = [
    { id: 1, title: "Аренда автокрана LIEBHERR LTM 1160 в Москве", text: "Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.", imgSrc: "/static/images/blog/1.jpg" },
    { id: 2, title: "Аренда автокрана LIEBHERR LTM 1160 в Москве", text: "Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.", imgSrc: "/static/images/blog/1.jpg" },
    { id: 3, title: "Аренда автокрана LIEBHERR LTM 1160 в Москве", text: "Компания Liebher.", imgSrc: "/static/images/blog/1.jpg" },
    { id: 4, title: "Аренда автокрана LIEBHERR LTM 1160 в Москве", text: "Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.", imgSrc: "/static/images/blog/1.jpg" },
    { id: 5, title: "Аренда автокрана LIEBHERR LTM 1160 в Москве", text: "Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.", imgSrc: "/static/images/blog/1.jpg" },
    { id: 6, title: "Аренда автокрана LIEBHERR LTM 1160 в Москве", text: "Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.", imgSrc: "/static/images/blog/1.jpg" },
    { id: 7, title: "Аренда автокрана LIEBHERR LTM 1160 в Москве", text: "Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории.", imgSrc: "/static/images/blog/1.jpg" },
  ];

  const settings = {
    row: 1,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    infinite: false,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} isDisabled={activeSlide === articles.length - 2} />,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 861,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  }

  return (
    <div className="article__another-ones another-ones">
      <div className="container">
        <h2 className="another-ones__title">Другие статьи</h2>
        <Slider 
          {...settings} 
          className="another-ones__slider"
          ref={(slider: Slider) => setSlider(slider)}
          >
          {articles.map(({ id, imgSrc, title, text }) => (
            <div className=" item-blog" key={id}>
              <div className="item-blog__images">
                <img src={imgSrc} alt="" />
              </div>
              <div className="item-blog__box">
                <h6 className="item-blog__title">{title}</h6>
                <p className="item-blog__text" data-crop="200">{text}</p>
                <Link href={'/article/' + id}>
                  <a className="item-blog__btn btn">
                    Подробнее
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        <div className="another-ones__btn-wrapper">
          <Link href="/blog">
            <a className="another-ones__btn">
              Все статьи
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnotherArticlesSlider;
