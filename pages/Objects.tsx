import { GetStaticProps, NextPage } from "next";
import { publicApi } from "../api";
import BreadCrumbs from "../components/common/BreadCrumbs";
import ObjectCard from "../components/pages/objects/ObjectCard";
import Texts from "../components/common/Texts";
import { ConstructionType } from "../types/dataTypes";
import { ROUTES } from "../utils/const";

interface IObjectsProps {
  constructions: { constructions: ConstructionType[], hasMore: boolean }
}

const Objects: NextPage<IObjectsProps> = ({ constructions }) => {
  const breadCrumbs = [
    { id: 1, link: ROUTES.HOME, text: "Главная" }, 
    { id: 2, link: "", text: "Объекты" }, 
  ];

  const onLoadMore = () => {};

  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <section className="objects">
        <div className="container">
          <h1 className="objects__title">Работа спецтехники от Компании Еврокран</h1>
          <div className="objects__items">
            {constructions?.constructions?.map(({ id, preview, title }) => (
              <ObjectCard 
                id={id}
                key={id}
                title={title}
                preview={preview}
              />
            ))}
          </div>
          {constructions.hasMore && <div className="objects__btn-wrapper">
            <button 
              className="objects__btn"
              onClick={onLoadMore}
            >
              Загрузить ещё
            </button>
          </div>}
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