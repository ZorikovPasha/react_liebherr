import { NextPage } from "next";
import { DescriptionPars, HelpRequestForm, ProductTabs, ProductView, SimilarOnesSlider } from "../../components";

const Product: NextPage = () => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="index.html">
                Главная
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="catalog.html">
                Каталог техники
              </a>
            </li>
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link">Страница товара</span>
            </li>
          </ul>
        </div>
      </div>

      <ProductView></ProductView>

      <ProductTabs></ProductTabs>

      <DescriptionPars></DescriptionPars>

      <HelpRequestForm></HelpRequestForm>

      <SimilarOnesSlider></SimilarOnesSlider>
    </>
  );
};

export default Product;
