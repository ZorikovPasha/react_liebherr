import Link from "next/link";
interface iCardProps {
  id: number;
  name: string;
  liftingCapacity: number;
  arrowLength: number;
  imgSrc: string;
}

const CatalogCard: React.FC<iCardProps> = ({ id, name, liftingCapacity, arrowLength, imgSrc }) => {

  return (
    <div className="product-item" key={id}>
      <div className="product-item__body">
        <div className="product-item__images">
          <img className="product-item__img" src={imgSrc} alt="product" />
        </div>
        <div className="product-item__title-box">
          <Link href={`/product/${id}`}>
            <a className="product-item__title product-item__title--big">{name}</a>
          </Link>
        </div>
        <div className="product-item__info">
          <div className="product-item__box">
            <div className="product-item__text">Грузоподъемность:</div>
            <div className="product-item__text">{liftingCapacity}</div>
            <div className="product-item__text">Длина стрелы:</div>
            <div className="product-item__text">{arrowLength}</div>
          </div>
          <Link href={`/product/${id}`}>
            <a className="product-item__link">Все характеристики</a>
          </Link>
          <Link 
            href="/contacts"
            >
            <a 
              className="product-item__link"
              >Арендовать</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
