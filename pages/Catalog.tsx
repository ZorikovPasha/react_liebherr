import { NextPage } from "next";
import React from "react";
import { useSelector } from "react-redux";

import BreadCrumbs from "../components/common/BreadCrumbs";
import CatalogAside from "../components/pages/catalog/CatalogAside";
import CatalogCard from "../components/pages/catalog/CatalogCard";
import CatalogTabs from "../components/pages/catalog/CatalogTabs";
import ContactsBlock from "../components/pages/contacts/ContactsBlock";
import { ContactsForm } from "../components/common/ContactsForm";
import FilterControls from "../components/pages/catalog/FilterControls";
import HelpRequestForm from "../components/common/HelpRequestForm";
import Pagination from "../components/pages/catalog/Pagination";
import Texts from "../components/common/Texts";
import { Error } from "../components/common/Error";
import { AppEmpty } from "../components/common/AppEmpty";
import { MachineryType } from "../types/dataTypes";
import { ROUTES } from "../utils/const";
import { selectProducts, selectProductsError } from "../redux/selectors";

interface ICatalogProps {
  items: MachineryType[];
}

const Catalog: NextPage<ICatalogProps> = () => {
  const items = useSelector(selectProducts)
  const [activeView, setActiveView] = React.useState<"grid" | "list">("grid");  

  const AsideRef = React.useRef(null);

  const breadCrumbs = [
    { id: 1, link: ROUTES.HOME, text: "Главная" },
    { id: 2, link: ROUTES.CATALOG, text: "Каталог техники" },
  ];

  const query = React.useRef("")

  const isError = useSelector(selectProductsError) 

  const onAsideOpen = React.useRef<null | (() => void)>(null)

  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <CatalogTabs />

      <div className="catalog-content">
        <div className="container">
          <div className="catalog-content__inner">
            <CatalogAside 
              ref={AsideRef} 
              query={query}
              onOpen={onAsideOpen} />
            <div className="catalog-content__body">
              <FilterControls 
                activeView={activeView} 
                setActiveView={setActiveView} 
                onAsideOpen={onAsideOpen} 
              />
              {isError
                ? <Error />
                : items?.length 
                  ? (
                    <div className={`catalog-content__items ${activeView === "list" ? "catalog-content__items--list" : ""}`}>
                    {items &&
                      items?.map(({ id, name, features, imgSrc }) => (
                        <CatalogCard
                          id={id}
                          key={id}
                          name={name}
                          liftingCapacity={features.liftingCapacity.value}
                          arrowLength={features.arrowLength.value}
                          imgSrc={imgSrc}
                        />
                    ))}
                  </div>
                  )
                  : (
                    <AppEmpty />
                )}

              <Pagination query={query} />
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.59309082283!2d37.5659100109784!3d55.57353554252417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada349fa0335%3A0x664f1a375fe7ab8a!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1630922368972!5m2!1sru!2sru"
          width="100%"
          height="548"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Catalog;
