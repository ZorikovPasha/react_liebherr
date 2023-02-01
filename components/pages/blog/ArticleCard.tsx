import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../../../utils/const";

interface ICardProps {
  preview: string;
  title: string;
  subtitle: string;
  id: number;
}

const ArticleCard: React.FC<ICardProps> = ({ preview, title, subtitle, id }) => {
  return (
    <div className="blog__item item-blog">
      <div className="blog__item-inner">
        <div className="item-blog__images">
          <Image 
            src={preview} 
            width='100%'
            height='100%'
            alt="Статья о строительной технике"
            layout="responsive"
          />
        </div>
        <div className="item-blog__box">
          <h6 className="item-blog__title">{title}</h6>
          <p className="item-blog__text" data-crop="200">
            {subtitle}
          </p>
          <Link href={ROUTES.ARTICLE + id}>
            <a className="item-blog__btn btn">Подробнее</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
