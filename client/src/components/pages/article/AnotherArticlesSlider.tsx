import Link from 'next/link'
import Slider from 'react-slick'
import React from 'react'

import { SliderNextArrow, SliderPrevArrow } from '../../../components/common/SliderArrows'
import { ArticleCard } from '../../../components/pages/blog/ArticleCard'
import { ROUTES } from '../../../utils/const'
import { IArticleRes } from '../../../api/types'

interface IAnotherArticlesSliderProps {
  items: IArticleRes[]
}

export const AnotherArticlesSlider: React.FC<IAnotherArticlesSliderProps> = ({ items }) => {
  const [slider, setSlider] = React.useState<Slider>()
  const [activeSlide, setActiveSlide] = React.useState(0)

  const settings = {
    row: 1,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    infinite: false,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} isDisabled={activeSlide === items.length - 3} />,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 861,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <div className="article__another-ones another-ones">
      <div className="container">
        <h2 className="another-ones__title">Другие статьи</h2>
        <Slider className="another-ones__slider" {...settings} ref={(slider: Slider) => setSlider(slider)}>
          {items?.map(({ id, Title, Text, Preview, Slug }) => (
            <ArticleCard preview={Preview?.url} title={Title} subtitle={Text} slug={Slug} key={id} />
          ))}
        </Slider>
        <div className="another-ones__btn-wrapper">
          <Link href={ROUTES.ARTICLES}>
            <a className="another-ones__btn">Все статьи</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
