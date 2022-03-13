import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { ParsedUrlQuery } from "querystring";

import { publicApi } from "../../api";
import { AnotherObjectsSlider, BreadCrumbs, SceneFootage, Texts } from "../../components";
import { ConstructionType } from "../../types/dataTypes";

interface IObjectsProps {
  construction: ConstructionType,
}

const Object: NextPage<IObjectsProps> = ({ construction }) => {
  const { title, text, images } = construction;
  const breadCrumbs = [
    { id: 1, link: "/", text: "Главная" }, 
    { id: 2, link: "/objects", text: "Объексты" }, 
    { id: 3, link: "", text: "Разгрузка и монтаж трансформатора" }, 
  ];

  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <SceneFootage title={title} text={text} images={images}/>
      <Texts />
      <AnotherObjectsSlider />
    </>
  );
};

export default Object;

export const getStaticPaths: GetStaticPaths = async () => {
    return { paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
    ],
  fallback: false}
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;
  const construction = await publicApi.getSingleConstruction(id);
  return { props: {construction} }
}