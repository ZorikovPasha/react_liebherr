import Link from "next/link";

interface ICardProps {
  preview: string;
  title: string;
  subtitle: string;
  id: number;
}

const ArticleCard: React.FC<ICardProps> = ({ preview, title, subtitle, id }) => {
  return (
    <div className="blog__item item-blog">
      <div className="item-blog__images">
        <img src={preview} alt="Статья о строительной технике" />
      </div>
      <div className="item-blog__box">
        <h6 className="item-blog__title">{title}</h6>
        <p className="item-blog__text" data-crop="200">
          {subtitle}
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
