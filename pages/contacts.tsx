import React from 'react'
import { NextPage } from "next";
import ContactsBlock from "../components/pages/contacts/ContactsBlock";
import BreadCrumbs from "../components/common/BreadCrumbs";
import { ContactsForm } from "../components/common/ContactsForm";
import { ROUTES } from '../utils/const';

const Contacts: NextPage = () => {
  const breadCrumbs = [
    { id: 1, link: ROUTES.HOME, text: "Главная" }, 
    { id: 2, link: "", text: "Контакты" }, 
  ];

  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <section className="contacts">
        <div className="container">
          <h2 className="contacts__title">Контакты</h2>
          <div className="contacts__inner flex jcsb">
            <ContactsBlock />

            <ContactsForm />
          </div>

          <p className="contacts__sub contacts__sub--margin">Как добраться:</p>
          <p className="contacts__subtext">
            Принимая во внимание показатели успешности, глубокий уровень погружения играет определяющее значение для прогресса профессионального сообщества. Лишь предприниматели в сети интернет, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут ограничены исключительно образом мышления. Кстати, активно развивающиеся страны третьего мира смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус
            бесполезности.
          </p>
        </div>
      </section>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.59309082283!2d37.5659100109784!3d55.57353554252417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada349fa0335%3A0x664f1a375fe7ab8a!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1630922368972!5m2!1sru!2sru" width="100%" height="548" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
      </div>
    </>
  );
};

export default Contacts;
