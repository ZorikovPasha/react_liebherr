import { NextPage } from "next";
import { BreadCrumbs, ContactsForm, ReviewsCards, ServicesPreviews, Texts } from "../components";

const About: NextPage = () => {
  return (
    <>
      <BreadCrumbs items={[]}></BreadCrumbs>
      <section className="about">
        <div className="container">
          <h1 className="about__title">О Компании Еврокран</h1>
        </div>

        <div className="about__container">
          <div className="container">
            <div className="about__inner">
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

          <div className="about__video wow animate__animated animate__fadeIn animate__delay-1s" data-wow-offset="200">
            <div className="about__video-box">
              <a className="about__video-play" data-fancybox href="https://youtu.be/0UUK4VDblXM">
                <img src="static/images/play-btn.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServicesPreviews></ServicesPreviews>

      <ReviewsCards></ReviewsCards>

      <section className="cost cost--padding">
        <div className="container">
          <div className="cost__inner">
            <h2 className="cost__title">Несколько фактов о нас</h2>
            <div className="cost__items wow animate__animated animate__fadeIn animate__delay-1s">
              <div className="cost__item">
                <p className="cost__item-num cost__item-num--1">
                  <img src="static/images/cost-1.png" alt="" />
                </p>
                <p className="cost__item-title">Прозрачность</p>
                <p className="cost__item-text">работаем с клиентами без посредников</p>
              </div>
              <div className="cost__item">
                <p className="cost__item-num cost__item-num--2">
                  <img src="static/images/cost-2.png" alt="" />
                </p>
                <p className="cost__item-title">Ответственность</p>
                <p className="cost__item-text">исполняем обязательства в соответствии с договором и гарантируем завершение работы в срок</p>
              </div>
              <div className="cost__item">
                <p className="cost__item-num cost__item-num--3">
                  <img src="static/images/cost-3.png" alt="" />
                </p>
                <p className="cost__item-title">Профессионализм</p>
                <p className="cost__item-text">постоянная подготовка кадров для безопасной работы со спецтехникой любой сложности</p>
              </div>
              <div className="cost__item">
                <p className="cost__item-num cost__item-num--4">
                  <img src="static/images/cost-4.png" alt="" />
                </p>
                <p className="cost__item-title">Качество</p>
                <p className="cost__item-text">высший класс обслуживания заказчиков и новейший парк техники</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Texts></Texts>

      <ContactsForm></ContactsForm>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.59309082283!2d37.5659100109784!3d55.57353554252417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada349fa0335%3A0x664f1a375fe7ab8a!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1630922368972!5m2!1sru!2sru" width="100%" height="548" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
      </div>
    </>
  );
};

export default About;
