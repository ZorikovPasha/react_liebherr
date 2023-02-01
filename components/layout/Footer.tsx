import React from 'react';
import Image from "next/image"
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toggleModal } from '../../redux/slices/modalsSlice';
import { ROUTES } from '../../utils/const';

const Footer: React.FC = () => {
  const dispatch = useDispatch();

  const footerLists = [
    [
      { text: "О компании", link: "/about" },
      { text: "Услуги", link: "/contacts" },
      { text: "Каталог техники", link: "/catalog" },
      { text: "Аренда кранов", link: "/blog" },
      { text: "Наши работы", link: "/objects" },
      { text: "Прайс-лист", link: "/about" },
      { text: "Контакты", link: "/contacts" },
    ],
    [{ text: "Гусеничные краны" }, { text: "Мобильные краны" }, { text: "Низеорамные краны" }, { text: "Модульные платформы" }],
    [{ text: "Аренда гусеничного крана" }, { text: "Аренда мобильного крана" }, { text: "Аренда башенного крана" }, { text: "Перевозка негабаритного груза" }, { text: "Разработка ппрк" }],
  ];
  const listsTitles = ["Клиентам", "Техника", "Услуги"];

  const onOpenPopup = () => {
    dispatch(toggleModal({ name: "request", state: true }));
    document.documentElement.classList.add('lock');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__column">
            <div className="footer__logo">
              <Image 
                src="/static/images/footer-logo.svg"
                // layout="fill"
                alt="logo"
                width='100%'
                height='100%'
              />
            </div>
            {/* <img className="footer__logo" src="/static/images/footer-logo.svg" alt="logo" /> */}
            <p className="footer__about">Аренда мобильных и гусеничных кранов LIEBHERR</p>
            <p className="footer__rights">© 2000-2021 Все права защищены</p>
          </div>
          {footerLists &&
            footerLists.map((arr, idx) => (
              <div className="footer__column" key={idx}>
                <p className="footer__column-title">{listsTitles[idx]}</p>
                <ul className="footer__column-list column-list">
                  {arr.map(({ text }) => (
                    <li className="column-list__item" key={text}>
                      <Link href={ROUTES.CATALOG}>
                        <a className="column-list__link">{text}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          <div className="footer__column">
            <button 
              className="footer__btn"
              onClick={onOpenPopup}
              >
                Свяжитесь со мной
            </button>
            <div className="footer__socials">
              <span className="footer__social">
                <img src="/static/images/social-1.svg" alt="instagram" />
              </span>
              <span className="footer__social">
                <img src="/static/images/social-2.svg" alt="twitter" />
              </span>
              <span className="footer__social">
                <img src="/static/images/social-3.svg" alt="whatsapp" />
              </span>
              <span className="footer__social">
                <img src="/static/images/social-4.svg" alt="vkontacte" />
              </span>
              <span className="footer__social">
                <img src="/static/images/social-5.svg" alt="yandex" />
              </span>
            </div>
          </div>
          <div className="footer__column">
            <p className="footer__column-title">Контакты</p>
            <a className="footer__tel" href="tel:+74999299666">
              +7 (499)929-96-66
            </a>
            <a className="footer__tel" href="tel:+79853645518">
              +7 (985)364-55-18
            </a>
            <a className="footer__tel" href="tel:+79852262030">
              +7 (985)226-20-30
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
