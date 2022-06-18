
import React from 'react';
import Slider from 'react-slick';
import { SliderPrevArrow, SliderNextArrow } from "../..";


interface IFootage {
  title: string,
  text: string,
  images: string[]
}

const SceneFootage: React.FC<IFootage> = ({ title, text, images }) => {
  const [fullSliderNav, setFullSliderNav] = React.useState<Slider>();
  const [thumbsNav, setThumbsNav] = React.useState<Slider>();
  const [activeSlide, setActiveSlide] = React.useState(0);

  const thumbsSettings = {
    arrows: false,
    variableWidth: true,
    infinite: false,
    focusOnSelect: true,
  };

  const fullSliderSettings = {
    fade: true,
    infinite: false,
    prevArrow: <SliderPrevArrow onClick={thumbsNav?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={thumbsNav?.slickNext} isDisabled={activeSlide === images.length - 1} />,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
        }
      },
    ]
  };

  return (
    <section className="object-top">
      <div className="container">
        <h1 className="object-top__title">{title}</h1>
        <p className="object-top__text">{text}</p>
          <Slider 
            {...fullSliderSettings} 
            className="object-top__slider"
            asNavFor={thumbsNav} 
            ref={(slider: Slider) => setFullSliderNav(slider)}
            >
            {images?.map((imgSrc) => (
              <div className="object-top__slider-item" key={imgSrc}>
                <div className="object-top__images">
                  <img src={imgSrc} alt="Фото со стройки" />
                </div>
              </div>
            ))}
          </Slider>

          <Slider 
            {...thumbsSettings} 
            className="object-top__thumbs"
            asNavFor={fullSliderNav} 
            ref={(slider: Slider) => setThumbsNav(slider)}
            >
            {images?.map(imgSrc => (
              <div className="object-top__thumb" key={imgSrc}>
                <div className="object-top__thumb-images">
                  <img src={imgSrc} alt="Фото со стройки" />
                </div>
              </div>
            ))}
          </Slider>
      </div>
  </section>
  )
}

export default SceneFootage;