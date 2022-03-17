import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { ParsedUrlQuery } from "querystring";

import { publicApi } from "../../api";
import { AnotherObjectsSlider, BreadCrumbs, SceneFootage, Texts } from "../../components";
import { ConstructionType } from "../../types/dataTypes";

interface IObjectsProps {
  construction: ConstructionType,
  similarOnes: ConstructionType[]
}

const Object: NextPage<IObjectsProps> = ({ construction, similarOnes }) => {
  
  const { title, text, images } = construction;
  
  const breadCrumbs = [
    { id: 1, link: "/", text: "Главная" }, 
    { id: 2, link: "/objects", text: "Объекты" }, 
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
  const { construction, similarOnes} = await publicApi.getSingleConstruction(id);
  console.log('--------------');  
  console.log('construction', construction);
  console.log('------');
  console.log('similarOnes', similarOnes);

  console.log('--------------');  

  return { props: {construction, similarOnes} }
}