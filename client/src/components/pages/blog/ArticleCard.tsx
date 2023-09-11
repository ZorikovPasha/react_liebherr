import Link from 'next/link'
import { ROUTES } from '../../../utils/const'

interface ICardProps {
  preview: string | undefined
  title: string
  subtitle: string
  slug: string
}

export const ArticleCard: React.FC<ICardProps> = ({ preview, title, subtitle, slug }) => {
  const source = preview ? process.env.NEXT_PUBLIC_CMS + preview : undefined

  return (
    <div className="blog__item item-blog">
      <div className="blog__item-inner flex">
        <div className="item-blog__images">
          <img src={source} alt="Статья о строительной технике" />
        </div>
        <div className="item-blog__box flex">
          <h6 className="item-blog__title">{title}</h6>
          <p className="item-blog__text" data-crop="200">
            {subtitle}
          </p>
          <Link href={ROUTES.ARTICLES + slug}>
            <a className="item-blog__btn btn">Подробнее</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
