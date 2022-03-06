import Link from "next/link";

interface ICardProps {
  imgSrc: string;
  id: number;
  title: string;
}
const ObjectCard: React.FC<ICardProps> = ({ id, imgSrc, title }) => {
  return (
    <div className="objects__item item-object">
      <div className="item-object__images">
        <img src={imgSrc} alt="" />
      </div>
      <h6 className="item-object__title">
        <Link href={'/object/' + id}>
          <a className="item-object__link">
            {title}
          </a>
        </Link>
      </h6>
    </div>
  );
};

export default ObjectCard;
