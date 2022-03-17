import { GetStaticProps, NextPage } from "next";

import { publicApi } from "../api";
import { BreadCrumbs, ObjectCard, Texts } from "../components";
import { ConstructionType } from "../types/dataTypes";

interface IObjectsProps {
  constructions: ConstructionType[]
}

const Objects: NextPage<IObjectsProps> = ({ constructions }) => {
  const breadCrumbs = [
    { id: 1, link: "/", text: "Главная" }, 
    { id: 2, link: "", text: "Объекты" }, 
  ];

  const onLoadMore = () => {

  };

  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <section className="objects">
        <div className="container">
          <h1 className="objects__title">Работа спецтехники от Компании Еврокран</h1>
          <div className="objects__items">
            {constructions.map(({ id, preview, title }) => (
              <ObjectCard 
                id={id}
                key={id}
                title={title}
                preview={preview}
              />
            ))}
          </div>
          <div className="objects__btn-wrapper">
            <button 
              className="objects__btn"
              onClick={onLoadMore}
              >Загрузить ещё</button>
          </div>
        </div>
      </section>

      <Texts />
    </>
  );
};

export default Objects;


export const getStaticProps: GetStaticProps = async () => {
  const constructions = await publicApi.getConstructions();
  return { props: {constructions} }
}