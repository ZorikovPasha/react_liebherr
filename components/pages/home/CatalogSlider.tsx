import Link from "next/link";
import { CatalogCard } from "../../";

const CatalogSlider: React.FC = () => {
  const catalogCards = [
    { id: 35, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30 },
    { id: 5, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30 },
    { id: 3, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30 },
    { id: 0, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30 },
    { id: 45, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30 },
    { id: 57, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30 },
  ];
  return (
    <section className="catalog">
      <div className="container">
        <h2 className="catalog__title">Каталог техники</h2>
      </div>
      <div className="container-fluid">
        <div className="catalog-slider">
          {catalogCards.map((card) => (
            <CatalogCard {...card}></CatalogCard>
          ))}
        </div>
        <div className="catalog__btn-wrapper">
          <Link href="/catalog">
            <a className="catalog__btn">Перейти в каталог</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CatalogSlider;
