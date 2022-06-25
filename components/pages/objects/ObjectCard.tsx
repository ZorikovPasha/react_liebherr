import Link from "next/link";
import { ROUTES } from "../../../utils/const";

interface ICardProps {
  preview: string;
  id: number;
  title: string;
}
const ObjectCard: React.FC<ICardProps> = ({ id, preview, title }) => {
  return (
    <div className="objects__item item-object">
      <div className="item-object__images">
        <img src={preview} alt="Фото объекта строительства" />
      </div>
      <h6 className="item-object__title">
        <Link href={`${ROUTES.OBJECT}/${id}`}>
          <a className="item-object__link">
            {title}
          </a>
        </Link>
      </h6>
    </div>
  );
};

export default ObjectCard;
