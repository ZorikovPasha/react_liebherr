import { NextPage } from "next";
import { AnotherObjectsSlider, BreadCrumbs, SceneFootage, Texts } from "../../components";

const Object: NextPage = () => {
  const breadCrumbs = [
    { id: 1, link: "/", text: "Главная" }, 
    { id: 2, link: "/objects", text: "Объексты" }, 
    { id: 3, link: "", text: "Разгрузка и монтаж трансформатора" }, 
  ];

  return (
    <>
      <BreadCrumbs items={breadCrumbs} />

      <SceneFootage />

      <Texts />

      <AnotherObjectsSlider />
    </>
  );
};

export default Object;
