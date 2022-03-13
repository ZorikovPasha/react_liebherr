import { NextPage } from "next";
import { GetServerSideProps } from 'next';
import { publicApi } from "../../api";

import { BreadCrumbs, DescriptionPars, HelpRequestForm, ProductTabs, ProductView,
  SimilarOnesSlider } from "../../components";
import { MachineryType } from "../../types/dataTypes";

interface IProductProps {
  machinery: MachineryType,
}

const Product: NextPage<IProductProps> = ({ machinery }) => {
  const breadCrumbs = [
    { id: 1, link: "/", text: "Главная" }, 
    { id: 2, link: "/blog", text: "Каталог техники" }, 
    { id: 3, link: "", text: "Страница товара" }, 
  ];
  
  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <ProductView info={machinery}/>

      <ProductTabs />

      <DescriptionPars />

      <HelpRequestForm />

      <SimilarOnesSlider />
    </>
  );
};

export default Product;



export const getServerSideProps: GetServerSideProps = async ({ query }) => { 
  const { machinery } = await publicApi.getSingleMachinery(Number(query.id));
  
  return { 
    props:{ machinery },
  }
}
