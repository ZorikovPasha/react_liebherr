import React from 'react'
import { NextPage } from "next";

import { ROUTES } from '../utils/const';
import BreadCrumbs from "../components/common/BreadCrumbs";
import ReviewsCards from "../components/pages/about/ReviewsCards";
import { ContactsForm } from "../components/common/ContactsForm";
import { VideoPic } from "../components/pages/about/Video";
import { costsItems, servicesItems } from '.';
import Image from 'next/image';
import Link from 'next/link';

const About: NextPage = () => {
  const breadCrumbs = [
    { id: 1, link: ROUTES.HOME, text: "Главная" }, 
    { id: 2, link: "", text: "О компании" }, 
  ];

  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <section className="about">
        <div className="container">
          <h1 className="about__title">О Компании Еврокран</h1>
        </div>

        <div className="about__container rel">
          <div className="container">
            <div className="flex">
              <div className="about__text">
                <p>Компания ЕвроКран – это команда специалистов, обеспечивающих эффективное использование высокопроизводительных немецких автокранов марки LIEBHERR. Мы работаем с 2000 года и за это время не раз доказали свой профессионализм и компетентность: сегодня нам доверяют крупнейшие предприятия России.</p>
                <p>Наши операторы автокранов – это профессионалы с опытом и всеми необходимыми навыками, прошедшие обучение в самой фирме LIEBHERR.</p>
                <p>Для нас не существует слишком сложных задач, мы готовы выполнить любые работы:</p>
                <p>
                  монтаж/демонтаж башенных кранов, турбин ТЭЦ, куполов храмов, церквей, вращающихся печей, реакторов синтеза метанола, металлических конструкций; <br />
                  монтаж вышек сотовой связи;
                  <br />
                  строительство зданий, сооружений, мостов; <br />
                  установка рекламных щитов;
                  <br />
                  перевозка автотрейлерами крупногабаритных и тяжеловесных грузов.
                </p>
              </div>
            </div>
          </div>

          <VideoPic />
        </div>
      </section>

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

      <ReviewsCards />
      
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

      <section className="contacts">
        <div className="container">
          <h2 className="contacts__title">Контакты</h2>
          <div className="contacts__inner flex jcsb">
            <div className="contacts__content">
              <a className="contacts__address rel after" href="#">г. Москва, Россия, 117628,м. Бульвар Дмитрия Донского, ул. Куликовская, 12 </a>
              <div className="contacts__box flex jcsb">
                <div className="contacts__phones rel after">
                  <a className="contacts__phone" href="tel:+74999299666">+7 (499)929-96-66</a>
                  <a className="contacts__phone" href="tel:+79853645518">+7 (985)364-55-18</a>
                  <a className="contacts__phone" href="tel:+79852262030">+7 (985)226-20-30</a>
                </div>
                <div className="contacts__time">
                  <a className="contacts__mail rel after" href="mailto:evro-k@yandex.ru">evro-k@yandex.ru</a>
                  <p className="contacts__schedule rel after">10:00 - 17:00</p>  
                </div>
              </div>
              <div className="contacts__requisite rel after">
                <p className="contacts__sub">Реквизиты:</p>
                <p>ООО &quot;Компания Еврокран&quot; </p>
                <div className="contacts__requisite-box">
                  <p>ИНН:</p>
                  <p>7718999293</p>
                  <p>ОГРН:</p>
                  <p>5147746130593</p>
                </div>
              </div>
            </div>

            <ContactsForm />
          </div>

          <p className="contacts__sub contacts__sub--margin">Как добраться:</p>
          <p className="contacts__subtext">
          г. Москва, Россия, 117628,м. Бульвар Дмитрия Донского, ул. Куликовская, 12
          </p>
        </div>
      </section>


      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.59309082283!2d37.5659100109784!3d55.57353554252417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada349fa0335%3A0x664f1a375fe7ab8a!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1630922368972!5m2!1sru!2sru" width="100%" height="548" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
      </div>
    </>
  );
};

export default About;
