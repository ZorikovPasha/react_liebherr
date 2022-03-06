import { NextPage } from "next";
import { BreadCrumbs, DescriptionPars, HelpRequestForm, ProductTabs, ProductView, 
  SimilarOnesSlider } from "../../components";

const Product: NextPage = () => {
  const breadCrumbs = [
    { id: 1, link: "/", text: "Главная" }, 
    { id: 2, link: "/blog", text: "Каталог техники" }, 
    { id: 3, link: "", text: "Страница товара" }, 
  ];

  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <ProductView />

      <ProductTabs />

      <DescriptionPars />

      <HelpRequestForm />

      <SimilarOnesSlider />
    </>
  );
};

export default Product;
