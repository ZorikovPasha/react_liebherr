import { GetServerSideProps, NextPage } from "next";
import React, { MouseEventHandler } from "react";
import { BreadCrumbs, CatalogAside, CatalogCard, CatalogTabs, ContactsBlock, ContactsForm, 
  FilterControls, HelpRequestForm, Pagination, Texts } from "../components";
import { publicApi } from "../api";
import { MachineryType } from "../types/dataTypes";


interface ICatalogProps {
  items: MachineryType[];
}

const Catalog: NextPage<ICatalogProps> = ({ items }) => {
  const [isAsideOpened, setAsideOpened] = React.useState(false);
  const [isAsideBodyOpened, setAsideBodyOpened] = React.useState(false);


  const AsideRef = React.useRef(null)
  const asideBtnRef = React.useRef(null)

  const breadCrumbs = [
    { id: 1, link: "/", text: "Главная" }, 
    { id: 2, link: "/catalog", text: "Каталог техники" }, 
  ];

  const onAsideOpen: MouseEventHandler<HTMLButtonElement> = () => {
    setAsideOpened(true);
    setTimeout(() => setAsideBodyOpened(true), 100);
    document.body.classList.add('lock')
  };

  const onAsideClose: MouseEventHandler<HTMLButtonElement> = () => {
    setAsideOpened(false);
    setAsideBodyOpened(false);
    document.body.classList.remove('lock')
  };

  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <CatalogTabs />

      <div className="catalog-content">
        <div className="container">
          <div className="catalog-content__inner">
            <CatalogAside 
              ref={AsideRef}
              isAsideOpened={isAsideOpened} 
              isAsideBodyOpened={isAsideBodyOpened}
              onAsideClose={onAsideClose}
              />
            <div className="catalog-content__body">
              <FilterControls 
                ref={asideBtnRef}
                onAsideOpen={onAsideOpen}
                />

              <div className="catalog-content__items">
                {items && items?.map((item) => (
                  <CatalogCard 
                    id={item.id}
                    key={item.id} 
                    name={item.name}
                    liftingCapacity={item.features.liftingCapacity.value}
                    arrowLength={item.features.arrowLength.value}
                    imgSrc={item.imgSrc}
                    />
                ))}
              </div>

              <Pagination />
            </div>
          </div>
        </div>
      </div>

      <HelpRequestForm />
      <Texts />

      <section className="contacts">
        <div className="container">
          <h2 className="contacts__title">Контакты</h2>
          <div className="contacts__inner">

            <ContactsBlock />
            <ContactsForm />
          </div>
        </div>
      </section>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.59309082283!2d37.5659100109784!3d55.57353554252417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada349fa0335%3A0x664f1a375fe7ab8a!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1630922368972!5m2!1sru!2sru" width="100%" height="548" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
      </div>
    </>
  );
};

export default Catalog;


export const getServerSideProps: GetServerSideProps = async () => {
  const items = await publicApi.getMachinery();
  
  return { 
    props: {items},
  }
}