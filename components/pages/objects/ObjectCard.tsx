import Image from "next/image";
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
      <div>
        <Image 
          src={preview} 
          width='100%'
          height='100%'
          alt="Фото объекта строительства"
          layout="responsive"
        />
      </div>
      <h6 className="item-object__title">
        <Link href={ROUTES.OBJECTS + id}>
          <a className="item-object__link">
            {title}
          </a>
        </Link>
      </h6>
    </div>
  );
};

export default ObjectCard;
