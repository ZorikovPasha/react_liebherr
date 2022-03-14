
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

  const thumbsSettings = {
    arrows: false,
    variableWidth: true,
    infinite: false,
    focusOnSelect: true,
  };

  const fullSliderSettings = {
    fade: true,
    infinite: false,
    prevArrow: <SliderPrevArrow />,
    nextArrow: <SliderNextArrow/>,
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
            ref={(slider1: Slider) => setFullSliderNav(slider1)}
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
            ref={(slider1: Slider) => setThumbsNav(slider1)}
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