import { NextPage } from "next";
import { BreadCrumbs, ObjectCard, PopupRequest, Texts } from "../components";

const Objects: NextPage = () => {
  return (
    <>
      <BreadCrumbs items={[]}></BreadCrumbs>
      <section className="objects">
        <div className="container">
          <h1 className="objects__title">Работа спецтехники от Компании Еврокран</h1>
          <div className="objects__items">
            <ObjectCard></ObjectCard>
          </div>
          <div className="objects__btn-wrapper">
            <button className="objects__btn">Загрузить ещё</button>
          </div>
        </div>
      </section>

      <Texts></Texts>
    </>
  );
};

export default Objects;
