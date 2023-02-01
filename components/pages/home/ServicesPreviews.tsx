import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../../../utils/const";

const ServicesPreviews: React.FC = () => {
  const servicesItems = [
    { text: "Аренда мобильных автокранов Liebherr", imgSrc: "/static/images/services/1.png" },
    { text: "Аренда гусеничных кранов Liebherr", imgSrc: "/static/images/services/2.png" },
    { text: "Аренда низкорамных тралов", imgSrc: "/static/images/services/3.png" },
    { text: "Перевозка негабаритного и тяжеловесного груза", imgSrc: "/static/images/services/4.png" },
    { text: "Разработка ППРК", imgSrc: "/static/images/services/5.png" },
    { text: "Выезд специалиста на объект", imgSrc: "/static/images/services/6.png" },
  ];
  return (
    <section className="services">
      <div className="container">
        <div className="services__inner rel">
          <h2 className="services__title">Услуги</h2>
          <div className="services__items">
            {servicesItems.map(({ text, imgSrc }) => (
              <div className="services__item rel flex" key={text}>
                <Image 
                  src={imgSrc} 
                  width='100%'
                  height='100%'
                  alt="product"
                  layout="responsive"
                />
                <Link href={ROUTES.CATALOG}>
                  <a className="services__item-link">
                    {text}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreviews;
