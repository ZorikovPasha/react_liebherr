import { GetStaticProps, NextPage } from "next";
import { publicApi } from "../api";

import AboutPreview from "../components/pages/home/AboutPreview";
import CatalogSlider from "../components/pages/home/CatalogSlider";
import Guarantee from "../components/pages/home/Guarantee";
import QuestionsForm from "../components/common/QuestionsForm";
import RentSlider from "../components/pages/home/RentSlider";
import Top from "../components/pages/home/Top";
import ProjectsSlider from "../components/pages/home/ProjectsSlider";
import { ConstructionType } from "../types/dataTypes";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../utils/const";
import Head from "next/head";

interface IHomeProps {
  constructions: { constructions: ConstructionType[], hasMpre: boolean }
}
export const costsItems = [
  { imgSrc: "/static/images/cost-1.png", text: "Стоимость аренды крана определяется так: 8 (восемь) часов работы каждой единицы спецтехники в течение смены." },
  { imgSrc: "/static/images/cost-2.png", text: "География доставки спецтехники – вся территория РФ и страны СНГ." },
  { imgSrc: "/static/images/cost-3.png", text: "Стоимость мобилизации и демобилизации за МКАД и на территорию в границах ТТК обговаривается индивидуально и требует дополнительной оплаты." },
  { imgSrc: "/static/images/cost-4.png", text: "Обозначенная в прайс-листе стоимость услуг включает НДС – 20 %." },
];

export const servicesItems = [
  { text: "Аренда мобильных автокранов Liebherr", imgSrc: "/static/images/services/1.png" },
  { text: "Аренда гусеничных кранов Liebherr", imgSrc: "/static/images/services/2.png" },
  { text: "Аренда низкорамных тралов", imgSrc: "/static/images/services/3.png" },
  { text: "Перевозка негабаритного и тяжеловесного груза", imgSrc: "/static/images/services/4.png" },
  { text: "Разработка ППРК", imgSrc: "/static/images/services/5.png" },
  { text: "Выезд специалиста на объект", imgSrc: "/static/images/services/6.png" },
];

const Home: NextPage<IHomeProps> = ({ constructions }) => {
  return (
      <>
        <Head>
          <meta name="description" content="Аренда строительной техники" />
          <meta name="title" content="Liebherr" />
        </Head>

        <Top/>

        <RentSlider />

        <Guarantee />

        <section className="numbers rel after before">
          <div className="container">
            <div className="numbers__items flex aic jcsb wow animate__animated animate__fadeIn animate__delay-1s">
              <div className="numbers__item">
                <p className="numbers__number">
                  <img src="static/images/20.png" alt="number" />
                </p>
                <p className="numbers__text">лет на рынке</p>
              </div>
              <div className="numbers__item">
                <p className="numbers__number">
                  <img src="static/images/1 000+.png" alt="number" />
                </p>
                <p className="numbers__text">выполненных проектов</p>
              </div>
              <div className="numbers__item">
                <p className="numbers__number">
                  <img src="static/images/20.png" alt="number" />
                </p>
                <p className="numbers__text">единиц техники всегда в наличии</p>
              </div>
            </div>
          </div>
        </section>

        <ProjectsSlider items={constructions.constructions}/>

        <CatalogSlider />

        <section className="cost rel after before">
          <div className="container">
            <div className="cost__inner">
              <h2 className="cost__title">Из чего складывается стоимость аренды</h2>
              <div className="cost__items flex jcsb">
                {costsItems.map(({ imgSrc, text }, idx) => 
                  <div className="cost__item" key={imgSrc}>
                    <p className={`cost__item-num cost__item-num--${idx + 1}`}>
                      <img src={imgSrc} alt="cost" />
                    </p>
                    <p className="cost__item-text">{text}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <AboutPreview />

        <section className="services">
          <div className="container">
            <div className="services__inner rel">
              <h2 className="services__title">Услуги</h2>
              <div className="services__items">
                {servicesItems.map(({ text, imgSrc }) => (
                  <div className="services__item rel flex" key={text}>
                    <Image 
                      src={imgSrc} 
                      width='100%'
                      height='100%'
                      alt="product"
                      layout="responsive"
                    />
                    <Link href={ROUTES.CATALOG}>
                      <a className="services__item-link">
                        {text}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="block-text">
          <div className="container">
            <h2 className="block-text__title">Аренда автокранов LIEBHERR в Москве</h2>
            <p className="block-text__text">Аренда автокранов решает разные задачи. Благодаря большой грузоподъемности техника используется при установке и разборке башенных кранов, строительстве мостовых пролетов, монтаже дымовых труб самонесущей конструкции, выполнении аварийно-восстановительных работ в Москве. </p>
            <h2 className="block-text__title">Аренда спецтехники Liebherr </h2>
            <p className="block-text__text">
              Liebherr («Либхерр») — известная немецкая машиностроительная компания. Ее автокраны востребованы во всем мире благодаря своим уникальным возможностям. Основополагающие критерии их выбора — скорость и качество работы. Крупные строительные компании и частные лица предпочитают арендовать строительные краны «Либхерр». Их выбор обусловлен надежностью, высокой производительностью установок. Срок службы агрегатов исчисляется десятилетиями, на протяжении которых они сохраняют свои
              характеристики и не теряют качества.
            </p>
            <p className="block-text__text">На сегодняшний день мы реализовали сотни успешных проектов. Среди них:</p>
            <ul className="block-text__list">
              <li className="block-text__list-item rel after">Предоставление автокрана Liebherr LR 1750 и автотрейлеров из собственного парка компании «Казметрострой». Техника использовалась для демонтажа и перевозки проходческих щитов.</li>
              <li className="block-text__list-item rel after">Участие автокрана Liebherr LR 1750 и автотрейлеров в демонтаже проходческого щита на участке метрополитена от станции «Выхино» до «Косино-Ухтомской».</li>
              <li className="block-text__list-item rel after">Использование Liebherr LTM 1500 в качестве основной мощности для производства работ при возведении Лукомльской ГРЭС. В качестве арендатора выступала китайская машиностроительная инжиниринговая компания.</li>
              <li className="block-text__list-item rel after">Аренда низкорамных тралов для транспортировки спецтехники официального дилера ТМ в России, компании ООО «Либхерр-Русланд».</li>
              <li className="block-text__list-item rel after">Установка нового реактора гидрокрекинга на территории завода ОАО «Уфанефтехим».</li>
              <li className="block-text__list-item rel after">Демонтаж старых и монтаж новых чиллеров на крыше здания Mail.ru. Арендатор — строительный холдинг КМТ.</li>
              <li className="block-text__list-item rel after">Монтаж мостовых балок на головном участке автомобильной скоростной дороги Москва-Санкт-Петербург, произведенный с использованием кранов Liebherr.</li>
              <li className="block-text__list-item rel after">Транспортировка и установка проходческого щита из Протвино в Москву для возведения Бутовской линии метрополитена. Заказ выполнен компанией «Транстоннельстрой».</li>
            </ul>
            <p className="block-text__text">Условия аренды оговариваются индивидуально. География предоставления услуги — Москва, Санкт-Петербург, Екатеринбург, Нижний Новгород, Пермь, Воронеж, Челябинск, Краснодар, Ярославль, Самара, Уфа и другие города РФ.</p>
          </div>
        </section>

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
