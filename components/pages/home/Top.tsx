import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import Slider, { Settings } from "react-slick";
import { toggleModal } from "../../../redux/slices/modalsSlice";
import { ROUTES } from "../../../utils/const";

interface IArrowProps {
  onClick: (() => void) | undefined,
  isDisabled: boolean
}

const SliderPrevArrow: React.FC<IArrowProps> = ({ onClick, isDisabled }) => {
  return (
    <button
      onClick={onClick}  
      type="button" 
      className={`slick-btn slick-prev ${ isDisabled ? 'slick-disabled': ''}`}
      >
      <img src="static/images/slider-arr-left.svg" alt="" />
    </button>
  );
};

const SliderNextArrow: React.FC<IArrowProps> = ({ onClick, isDisabled }) => {
  return (
    <button
      onClick={onClick} 
      type="button" 
      className={`slick-btn slick-next ${ isDisabled ? 'slick-disabled': ''}`}
      >
      <img src="static/images/slider-arr-right.svg" alt="" />
    </button>
  );
};


const Top: React.FC = () => {
  const [slider, setSlider] = React.useState<Slider>();
  const [activeSlide, setActiveSlide] = React.useState(0);

  const dispatch = useDispatch();

  const slides = [
    { num: "01", total: "04", src: "static/images/top-bg.jpg" },
    { num: "02", total: "04", src: "static/images/top-bg.jpg" },
    { num: "03", total: "04", src: "static/images/top-bg.jpg" },
    { num: "04", total: "04", src: "static/images/top-bg.jpg" },
  ];

  const settings: Settings = {
    autoplay: true,
    draggable: true,
    fade: true,
    infinite: false,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} isDisabled={activeSlide === slides.length - 1} />,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 670,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const handleOpenPopup = () => {
    dispatch(toggleModal({ name: "request", state: true }));
    document.documentElement.classList.add('lock');
  };


  return (
    <section className="top">
      <div className="container-fluid">
        <div className="top__inner">
          <Slider 
            className={`top__slider`} 
            {...settings}
            ref={(slider: Slider) => setSlider(slider)}
            >
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
                <h1 className="top__title animate__animated animate__fadeIn animate__delay-1s">???????????? ?????????????????????? Liebherr ?????? ?????????? ??????????</h1>
                <p className="top__text animate__animated animate__fadeIn animate__delay-2s">??????????????????, ???????????????????? ?? ???????????????? ?????????? LIEBHERR ?? ???????????? ?????? ?????????? ?????????? ?? ????????????. ???????????????? ???? ???????? ????????????</p>
                <div className="top__btns animate__animated animate__fadeIn animate__delay-2s">
                  <button 
                    className="top__callme btn"
                    onClick={handleOpenPopup}
                    >
                      ???????????????? ????????????
                    </button>
                  <Link href={ROUTES.CATALOG}>
                    <a className="top__link btn-line">?????????????? ??????????????</a>
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
