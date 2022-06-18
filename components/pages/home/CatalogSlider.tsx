import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Slider, { Settings }  from 'react-slick';

import { CatalogCard, SliderNextArrow, SliderPrevArrow } from "../../";
import { selectProducts } from "../../../redux/selectors";

const CatalogSlider: React.FC = () => {
  const [slider, setSlider] = React.useState<Slider>();
  const [activeSlide, setActiveSlide] = React.useState(1);

  const items = useSelector(selectProducts)

  const settings: Settings = {
    arrows: true,
    dots: true,
    variableWidth: true,
    centerMode: true,
    infinite: false,
    initialSlide: 1,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} isDisabled={activeSlide === items.length - 1} />,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
    ]
  };

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="catalog__title">Каталог техники</h2>
      </div>
      <div className="container-fluid">
        <div className="catalog-slider">
          <Slider 
            className="catalog-slider"
            {...settings}
            ref={(slider1: Slider) => setSlider(slider1)}
             >
            {items && items?.map(({ id, name, imgSrc, features }) => (
              <CatalogCard 
                key={id} 
                id={id}
                rootElClass="product-item--padding"
                name={name}
                imgSrc={imgSrc}
                liftingCapacity={features.liftingCapacity.value}
                arrowLength={features.arrowLength.value}
                />
            ))}
          </Slider>
        </div>
        <div className="catalog__btn-wrapper">
          <Link href="/catalog">
            <a className="catalog__btn">Перейти в каталог</a>
          </Link>
        </div>
      </div>
    </section>
  );
};


export default CatalogSlider;