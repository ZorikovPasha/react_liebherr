import Slider from "react-slick";
import React from 'react';
import { SliderNextArrow, SliderPrevArrow } from '../../../components/common/SliderArrows';
import Image from "next/image";

const ReviewsCards: React.FC = () => {
  const [slider, setSlider] = React.useState<Slider>();
  const [activeSlide, setActiveSlide] = React.useState(0);

  const reviews = [
    { imgSrc: "/static/images/reviews/1.jpg" }, 
    { imgSrc: "/static/images/reviews/2.jpg" }, 
    { imgSrc: "/static/images/reviews/3.jpg" }, 
    { imgSrc: "/static/images/reviews/1.jpg" }, 
    { imgSrc: "/static/images/reviews/2.jpg" }, 
    { imgSrc: "/static/images/reviews/3.jpg" }, 
    { imgSrc: "/static/images/reviews/1.jpg" }, 
    { imgSrc: "/static/images/reviews/2.jpg" }, 
    { imgSrc: "/static/images/reviews/3.jpg" }, 
    { imgSrc: "/static/images/reviews/1.jpg" }
  ];
  
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    infinite: false,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} isDisabled={activeSlide === reviews.length - 3} />,
    afterChange: (current: number) => setActiveSlide(current),

    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="reviews__title">Клиенты говорят о нас</h2>
        <Slider
          className="reviews__items wow animate__animated animate__fadeIn"
          {...settings}
          ref={(slider: Slider) => setSlider(slider)}
          >
          {reviews.map(({ imgSrc }, idx) => (
            <div className="reviews__item" key={idx}>
              <div className="reviews__item-images">
                <Image 
                  src={imgSrc} 
                  alt="Карточка отзыва клиента"
                  layout="fill" 
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewsCards;
