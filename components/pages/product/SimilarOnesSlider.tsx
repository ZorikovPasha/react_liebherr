
import Slider from 'react-slick';
import { CatalogCard, SliderPrevArrow, SliderNextArrow } from "../..";


const SimilarOnesSlider: React.FC = () => {
  const settings  = {
    arrows: true,
    dots: true,
    variableWidth: true,
    centerMode: true,
    infinite: false,
    initialSlide: 2,
    prevArrow: <SliderPrevArrow />,
    nextArrow: <SliderNextArrow />,
    responsive: [
      {
        breakpoint: 993,
          settings: {
            variableWidth: false,
            centerMode: false,
            slidesToShow: 2,
          }
      },
      {
        breakpoint: 661,
          settings: {
            arrows: false,
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            centerMode: false,
            rows: 2,
          }
      }

    ]
  };
  const machinery = [
    { id: 35, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30, imgSrc: "/static/images/catalog/1.jpg" },
    { id: 5, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30, imgSrc: "/static/images/catalog/1.jpg" },
    { id: 3, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30, imgSrc: "/static/images/catalog/1.jpg" },
    { id: 0, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30, imgSrc: "/static/images/catalog/1.jpg" },
    { id: 45, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30, imgSrc: "/static/images/catalog/1.jpg" },
    { id: 57, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30, imgSrc: "/static/images/catalog/1.jpg" },
  ];
  return (
    <section className="similar">
      <div className="container">
        <h2 className="similar__title">Похожие краны</h2>
        <div className="similar__items">
          <Slider className="similar__items" {...settings}>
            {machinery.map(m => (
              <CatalogCard {...m} key={m.id} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SimilarOnesSlider;
