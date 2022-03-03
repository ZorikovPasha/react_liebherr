import { NextPage } from "next";

import { AboutPreview, BreadCrumbs, CatalogSlider, CostsRow, Guarantee, 
  QuestionsForm, RentSlider, ResultsInNumbers, ServicesPreviews, 
  SupplyForm, Texts, Top, ProjectsSlider } from "../components";

const Home: NextPage = () => {
  return (
      <>
        <BreadCrumbs items={[]}></BreadCrumbs>

        <Top />

        <RentSlider />

        <Guarantee></Guarantee>

        <ResultsInNumbers></ResultsInNumbers>

        <ProjectsSlider></ProjectsSlider>

        <CatalogSlider></CatalogSlider>

        <CostsRow></CostsRow>

        <SupplyForm></SupplyForm>

        <AboutPreview></AboutPreview>

        <ServicesPreviews></ServicesPreviews>

        <Texts></Texts>

        <QuestionsForm></QuestionsForm>

        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.59309082283!2d37.5659100109784!3d55.57353554252417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada349fa0335%3A0x664f1a375fe7ab8a!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1630922368972!5m2!1sru!2sru" width="100%" height="548" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
        </div>
      </>

  );
};
export default Home;
