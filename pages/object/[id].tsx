import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { ParsedUrlQuery } from "querystring";

import { publicApi } from "../../api";
import AnotherObjectsSlider from "../../components/pages/object/AnotherObjectsSlider";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import Texts from "../../components/common/Texts";
import SceneFootage from "../../components/pages/object/SceneFootage";
import { ConstructionType } from "../../types/dataTypes";
import { ROUTES } from '../../utils/const';

interface IObjectsProps {
  construction: ConstructionType,
  similarOnes: ConstructionType[]
}

const Object: NextPage<IObjectsProps> = ({ construction, similarOnes }) => {
  const { title, text, images } = construction;
  
  const breadCrumbs = [
    { id: 1, link: ROUTES.HOME, text: "Главная" }, 
    { id: 2, link: ROUTES.OBJECTS, text: "Объекты" }, 
    { id: 3, link: "", text: construction.title }, 
  ];

  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <SceneFootage title={title} text={text} images={images}/>
      <Texts />
      <AnotherObjectsSlider items={similarOnes}/>
    </>
  );
};

export default Object;

interface IParams extends ParsedUrlQuery {
  id: string
}

type PType = { params: { id: string } }

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await publicApi.getConstructionsIds();
  
  return {
    paths: data.items.reduce((accum: PType[], next) => ([
      ...accum,
      { params: { id: next.toString() } }
    ]), []),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;
  const { construction, similarOnes} = await publicApi.getSingleConstruction(id);

  return { props: {construction, similarOnes} }
}