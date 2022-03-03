import { NextPage } from "next";
import { BreadCrumbs, CatalogAside, CatalogCard, CatalogTabs, ContactsForm, FilterControls, HelpRequestForm, Pagination, Texts } from "../components";

const Catalog: NextPage = () => {
  const catalogCards = [
    { id: 35, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30 },
    { id: 5, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30 },
    { id: 3, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30 },
    { id: 0, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30 },
    { id: 45, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30 },
    { id: 57, name: "Гусеничный кран Liebherr LR 1750", liftingCapacity: 20, arrowLength: 30 },
  ];

  return (
    <>
      <BreadCrumbs items={[]}></BreadCrumbs>
      <CatalogTabs></CatalogTabs>

      <div className="catalog-content">
        <div className="container">
          <div className="catalog-content__inner">
            <CatalogAside></CatalogAside>
            <div className="catalog-content__body">
              <FilterControls></FilterControls>

              <div className="catalog-content__items">
                {catalogCards.map((card) => (
                  <CatalogCard {...card}></CatalogCard>
                ))}
              </div>

              <Pagination></Pagination>
            </div>
          </div>
        </div>
      </div>

      <HelpRequestForm></HelpRequestForm>

      <Texts></Texts>

      <ContactsForm></ContactsForm>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.59309082283!2d37.5659100109784!3d55.57353554252417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada349fa0335%3A0x664f1a375fe7ab8a!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1630922368972!5m2!1sru!2sru" width="100%" height="548" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
      </div>
    </>
  );
};

export default Catalog;
