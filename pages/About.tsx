import React from 'react'
import { NextPage } from "next";

import { ROUTES } from '../utils/const';
import BreadCrumbs from "../components/common/BreadCrumbs";
import ReviewsCards from "../components/pages/about/ReviewsCards";
import ServicesPreviews from "../components/pages/home/ServicesPreviews";
import Texts from "../components/common/Texts";
import CostsRow from "../components/pages/home/CostsRow";
import { ContactsForm } from "../components/common/ContactsForm";
import { VideoPic } from "../components/pages/about/Video";


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

      <ServicesPreviews />
      <ReviewsCards />
      <CostsRow />
      <Texts />

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
