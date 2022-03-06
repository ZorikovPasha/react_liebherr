import Link from "next/link";

interface ICardProps {
  imgSrc: string;
  title: string;
  text: string;
  id: number;
}

const ArticleCard: React.FC<ICardProps> = ({ imgSrc, title, text, id }) => {
  return (
    <div className="blog__item item-blog">
      <div className="item-blog__images">
        <img src={imgSrc} alt="Статья о строительной технике" />
      </div>
      <div className="item-blog__box">
        <h6 className="item-blog__title">{title}</h6>
        <p className="item-blog__text" data-crop="200">
          {text}
        </p>
        <Link href={'/article/' + id}>
          <a className="item-blog__btn btn">
            Подробнее
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
