import Link from "next/link";
import Slider from "react-slick";

const SliderPrevArrow: React.FC = () => {
  return (
    <button type="button" className="slick-btn slick-prev">
      <div className="slider-arr-wrapper">
        <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17158C4.73079 0.976313 4.73079 0.659731 4.53553 0.464468C4.34027 0.269206 4.02369 0.269206 3.82843 0.464468L0.646446 3.64645ZM31 3.5L0.999998 3.5L0.999998 4.5L31 4.5L31 3.5Z" fill="#2D2D2D" />
        </svg>
      </div>
    </button>
  );
};

const SliderNextArrow: React.FC = () => {
  return (
    <button type="button" className="slick-btn slick-next">
      <div className="slider-arr-wrapper">
        <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64644L27.1716 0.464464C26.9763 0.269202 26.6597 0.269202 26.4645 0.464464C26.2692 0.659726 26.2692 0.976308 26.4645 1.17157L29.2929 4L26.4645 6.82842C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716 7.53553L30.3536 4.35355ZM4.37114e-08 4.5L30 4.5L30 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#2D2D2D" />
        </svg>
      </div>
    </button>
  );
};

const RentSlider: React.FC = () => {
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
    prevArrow: <SliderPrevArrow />,
    nextArrow: <SliderNextArrow />,
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
          <Slider className="rent__slider" {...settings}>
            {slides.map(({ title, text, link }, idx) => (
              <div className="rent__slider-item slider-item" key={idx}>
                <div className="slider-item__body">
                  <div className="slider-item__images wow animate__animated animate__fadeInLeft" data-wow-offset="400">
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
