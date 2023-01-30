import Link from 'next/link';
import Slider from 'react-slick';
import React from 'react';
import AxiosError from 'axios';

import { SliderNextArrow, SliderPrevArrow } from "../../../components/common/SliderArrows";
import ArticleCard from "../../../components/pages/blog/ArticleCard"
import { publicApi } from '../../../api';
import { ArticleType } from '../../../types/dataTypes';
import { ROUTES } from '../../../utils/const';

interface IProps {
  currentArticle: number
}

const AnotherArticlesSlider: React.FC<IProps> = ({ currentArticle }) => {
  const [articles, setArticles] = React.useState<ArticleType[]>([])
  const [slider, setSlider] = React.useState<Slider>();
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    publicApi.getArticles(1).then(data => {
      if (data instanceof AxiosError) {
        return
      }

      setArticles(data.items.filter(article => article.id !== currentArticle))
    })

  }, [currentArticle])

  const settings = {
    row: 1,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    infinite: false,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} isDisabled={activeSlide === articles.length - 3} />,
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
          {articles?.map(({ id, title, subtitle, preview }) => (
            <ArticleCard preview={preview} title={title} subtitle={subtitle} id={id} key={id} />
          ))}
        </Slider>
        <div className="another-ones__btn-wrapper">
          <Link href={ROUTES.BLOG}>
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
