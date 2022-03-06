import { NextPage } from "next";
import { BreadCrumbs, ObjectCard, Texts } from "../components";

const Objects: NextPage = () => {
  const breadCrumbs = [
    { id: 1, link: "/", text: "Главная" }, 
    { id: 2, link: "", text: "Объексты" }, 
  ];

  const objects = [
    { id: 1, imgSrc: "/static/images/objects/1.jpg", title: "Замена крана" },  
    { id: 2, imgSrc: "/static/images/objects/1.jpg", title: "Замена крана" },  
    { id: 3, imgSrc: "/static/images/objects/1.jpg", title: "Замена крана" },  
    { id: 4, imgSrc: "/static/images/objects/1.jpg", title: "Замена крана" },  
    { id: 5, imgSrc: "/static/images/objects/1.jpg", title: "Замена крана" },  
  ];
  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <section className="objects">
        <div className="container">
          <h1 className="objects__title">Работа спецтехники от Компании Еврокран</h1>
          <div className="objects__items">
            {objects.map(object => (
              <ObjectCard {...object} key={object.id} />
            ))}
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
