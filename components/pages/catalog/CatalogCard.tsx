import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../../../utils/const";

interface ICardProps {
  id: number,
  name: string,
  imgSrc: string,
  liftingCapacity: number,
  arrowLength: number,
  rootElClass?: string
}

const CatalogCard: React.FC<ICardProps> = ({ id, imgSrc, name, liftingCapacity, arrowLength, rootElClass="" }) => {
  return (
    <div className={`product-item flex ${rootElClass}`} key={id}>
      <div className="product-item__body flex">
        <div className="product-item__images">
          <Image 
            src={imgSrc} 
            width='100%'
            className="product-item__img"
            height='100%'
            alt="product"
            layout="responsive"
          />
        </div>
        <div className="product-item__title-box rel after before">
          <Link href={ROUTES.PRODUCT+id}>
            <a className="product-item__title product-item__title--big">{name}</a>
          </Link>
        </div>
        <div className="product-item__info flex">
          <div className="product-item__box">
            <div className="product-item__text">Грузоподъемность:</div>
            <div className="product-item__text">{liftingCapacity}</div>
            <div className="product-item__text">Длина стрелы:</div>
            <div className="product-item__text">{arrowLength}</div>
          </div>
          <Link href={ROUTES.PRODUCT+id}>
            <a className="product-item__link rel after">Все характеристики</a>
          </Link>
          <Link 
            href={ROUTES.CONTACTS}
            >
            <a 
              className="product-item__link rel after"
              >Арендовать</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
