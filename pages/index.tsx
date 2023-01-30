import { GetStaticProps, NextPage } from "next";
import { publicApi } from "../api";

import AboutPreview from "../components/pages/home/AboutPreview";
import CatalogSlider from "../components/pages/home/CatalogSlider";
import CostsRow from "../components/pages/home/CostsRow";
import Guarantee from "../components/pages/home/Guarantee";
import QuestionsForm from "../components/common/QuestionsForm";
import RentSlider from "../components/pages/home/RentSlider";
import ResultsInNumbers from "../components/pages/home/ResultsInNumbers";
import ServicesPreviews from "../components/pages/home/ServicesPreviews";
import Texts from "../components/common/Texts";
import Top from "../components/pages/home/Top";
import ProjectsSlider from "../components/pages/home/ProjectsSlider";
import { ConstructionType } from "../types/dataTypes";

interface IHomeProps {
  constructions: { constructions: ConstructionType[], hasMpre: boolean }
}

const Home: NextPage<IHomeProps> = ({ constructions }) => {
  return (
      <>
        <Top/>

        <RentSlider />

        <Guarantee />

        <ResultsInNumbers />

        <ProjectsSlider items={constructions.constructions}/>

        <CatalogSlider />

        <CostsRow />

        <AboutPreview />

        <ServicesPreviews />

        <Texts />

        <QuestionsForm />

        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.59309082283!2d37.5659100109784!3d55.57353554252417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada349fa0335%3A0x664f1a375fe7ab8a!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1630922368972!5m2!1sru!2sru" width="100%" height="548" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
        </div>
      </>
  );
};
export default Home;


export const getStaticProps: GetStaticProps = async () => {
  const constructions = await publicApi.getConstructions();

  return { 
    props: {constructions},
  }
}
