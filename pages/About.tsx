import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <>
      <div className="popup">
        <div className="popup__body">
          <button className="popup__close">
            <img src="images/close.svg" alt="" />
          </button>
          <h3 className="popup__title">Арендовать спецтехнику</h3>
          <p className="popup__text">Оставьте заявку на звонок и мы ответим на все ваши вопросы в самое ближайшее время</p>
          <form className="popup__form" action="">
            <input className="popup__input" type="text" placeholder="Ваше имя" />
            <input className="popup__input input-mask" type="tel" placeholder="Ваш телефон*" />
            <input className="popup__input email-mask" type="text" placeholder="Ваша почта" />
            <label className="popup__label form-label">
              <input className="form-label__checkbox-real" type="checkbox" />
              <span className="form-label__checkbox-fake"></span>
              <span className="form-label__text">
                Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
              </span>
            </label>
            <button className="popup__btn btn" type="submit">
              Оставить заявку
            </button>
          </form>
        </div>
      </div>

      <div className="popup-message">
        <div className="popup-message__body">
          <button className="popup-message__close">
            <img src="images/close.svg" alt="" />
          </button>
          <h3 className="popup-message__title">Ваша заявка отправлена</h3>
          <p className="popup-message__text">Мы позвоним вам в самое ближайшее время</p>
          <button className="popup-message__btn">Вернуться</button>
        </div>
      </div>

      <div className="breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="index.html">
                Главная
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="">
                О компании
              </a>
            </li>
          </ul>
        </div>
      </div>

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
                <img src="images/play-btn.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="services__inner">
            <h2 className="services__title">Услуги</h2>
            <div className="services__items">
              <div className="services__item">
                <div className="services__item-images">
                  <img className="services__item-img" src="images/services/1.png" alt="" />
                </div>
                <a className="services__item-link" href="#">
                  Аренда мобильных автокранов Liebherr
                </a>
              </div>
              <div className="services__item">
                <div className="services__item-images">
                  <img className="services__item-img" src="images/services/2.png" alt="" />
                </div>
                <a className="services__item-link" href="#">
                  Аренда гусеничных кранов <br /> Liebherr
                </a>
              </div>
              <div className="services__item">
                <div className="services__item-images">
                  <img className="services__item-img" src="images/services/3.png" alt="" />
                </div>
                <a className="services__item-link" href="#">
                  Аренда низкорамных тралов
                </a>
              </div>
              <div className="services__item">
                <div className="services__item-images">
                  <img className="services__item-img" src="images/services/4.png" alt="" />
                </div>
                <a className="services__item-link" href="#">
                  Перевозка негабаритного и тяжеловесного груза
                </a>
              </div>
              <div className="services__item">
                <div className="services__item-images">
                  <img className="services__item-img" src="images/services/5.png" alt="" />
                </div>
                <a className="services__item-link" href="#">
                  Разработка ППРК
                </a>
              </div>
              <div className="services__item">
                <div className="services__item-images">
                  <img className="services__item-img" src="images/services/6.png" alt="" />
                </div>
                <a className="services__item-link" href="#">
                  Выезд специалиста на объект
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="container">
          <h2 className="reviews__title">Клиенты говорят о нас</h2>
          <div className="reviews__items wow animate__animated animate__fadeIn " data-wow-offset="150">
            <div className="reviews__item">
              <div className="reviews__item-images">
                <img src="images/reviews/1.jpg" alt="" />
              </div>
            </div>
            <div className="reviews__item">
              <div className="reviews__item-images">
                <img src="images/reviews/2.jpg" alt="" />
              </div>
            </div>
            <div className="reviews__item">
              <div className="reviews__item-images">
                <img src="images/reviews/3.jpg" alt="" />
              </div>
            </div>
            <div className="reviews__item">
              <div className="reviews__item-images">
                <img src="images/reviews/1.jpg" alt="" />
              </div>
            </div>
            <div className="reviews__item">
              <div className="reviews__item-images">
                <img src="images/reviews/2.jpg" alt="" />
              </div>
            </div>
            <div className="reviews__item">
              <div className="reviews__item-images">
                <img src="images/reviews/3.jpg" alt="" />
              </div>
            </div>
            <div className="reviews__item">
              <div className="reviews__item-images">
                <img src="images/reviews/1.jpg" alt="" />
              </div>
            </div>
            <div className="reviews__item">
              <div className="reviews__item-images">
                <img src="images/reviews/2.jpg" alt="" />
              </div>
            </div>
            <div className="reviews__item">
              <div className="reviews__item-images">
                <img src="images/reviews/3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cost cost--padding">
        <div className="container">
          <div className="cost__inner">
            <h2 className="cost__title">Несколько фактов о нас</h2>
            <div className="cost__items wow animate__animated animate__fadeIn animate__delay-1s">
              <div className="cost__item">
                <p className="cost__item-num cost__item-num--1">
                  <img src="images/cost-1.png" alt="" />
                </p>
                <p className="cost__item-title">Прозрачность</p>
                <p className="cost__item-text">работаем с клиентами без посредников</p>
              </div>
              <div className="cost__item">
                <p className="cost__item-num cost__item-num--2">
                  <img src="images/cost-2.png" alt="" />
                </p>
                <p className="cost__item-title">Ответственность</p>
                <p className="cost__item-text">исполняем обязательства в соответствии с договором и гарантируем завершение работы в срок</p>
              </div>
              <div className="cost__item">
                <p className="cost__item-num cost__item-num--3">
                  <img src="images/cost-3.png" alt="" />
                </p>
                <p className="cost__item-title">Профессионализм</p>
                <p className="cost__item-text">постоянная подготовка кадров для безопасной работы со спецтехникой любой сложности</p>
              </div>
              <div className="cost__item">
                <p className="cost__item-num cost__item-num--4">
                  <img src="images/cost-4.png" alt="" />
                </p>
                <p className="cost__item-title">Качество</p>
                <p className="cost__item-text">высший класс обслуживания заказчиков и новейший парк техники</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" block-text">
        <div className="container">
          <h2 className="block-text__title">Заголовок</h2>
          <p className="block-text__text">Гусеничный кран LR 1750 находит свое применение в строительстве электростанций, нефтеперерабатывающих заводов, на строительных площадках мостов и при монтаже ветросиловых установок.</p>
          <p className="block-text__text">Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или балластировочной тележкой.</p>
          <p className="block-text__text">Компактные габариты компонентов подъемного крана и их умеренный индивидуальный вес позволяют обеспечить экономичную транспортировку этого подъемного крана к строительной площадке.</p>
          <p className="block-text__text">Этот 750-тонный кран может также использоваться с выдвижными опорами, имеющими опорную базу 13 x 13 м. Результирующая грузоподъемность в этом случае может быть увеличена до 370 %.</p>
          <p className="block-text__text">Гусеничный кран LR 1750 находит свое применение в строительстве электростанций, нефтеперерабатывающих заводов, на строительных площадках мостов и при монтаже ветросиловых установок.</p>
          <p className="block-text__text">Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или балластировочной тележкой.</p>
          <p className="block-text__text">Компактные габариты компонентов подъемного крана и их умеренный индивидуальный вес позволяют обеспечить экономичную транспортировку этого подъемного крана к строительной площадке.</p>
          <p className="block-text__text">Этот 750-тонный кран может также использоваться с выдвижными опорами, имеющими опорную базу 13 x 13 м. Результирующая грузоподъемность в этом случае может быть увеличена до 370 %.Гусеничный кран LR 1750 находит свое применение в строительстве электростанций, нефтеперерабатывающих заводов, на строительных площадках мостов и при монтаже ветросиловых установок.</p>
          <p className="block-text__text">Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или балластировочной тележкой.</p>
          <p className="block-text__text">Компактные габариты компонентов подъемного крана и их умеренный индивидуальный вес позволяют обеспечить экономичную транспортировку этого подъемного крана к строительной площадке.</p>
          <p className="block-text__text">Этот 750-тонный кран может также использоваться с выдвижными опорами, имеющими опорную базу 13 x 13 м. Результирующая грузоподъемность в этом случае может быть увеличена до 370 %.</p>
        </div>
      </section>

      <section className="contacts">
        <div className="container">
          <h2 className="contacts__title">Контакты</h2>
          <div className="contacts__inner">
            <div className="contacts__content">
              <p className="contacts__text">Ежедневно мы развиваемся и стараемся стать лучше для вас, поэтому всегда рады получить от вас обратную связь с пожеланиями и идеями по улучшению наших продуктов!</p>
              <p className="contacts__text">Если у вас остались вопросы или есть предложения как стать лучше пишите нам!</p>
              <a href="#" className="contacts__address">
                г. Москва, Россия, 117628,м. Бульвар Дмитрия Донского, ул. Куликовская, 12{" "}
              </a>
              <div className="contacts__box">
                <div className="contacts__phones">
                  <a className="contacts__phone" href="tel:+74999299666">
                    +7 (499)929-96-66
                  </a>
                  <a className="contacts__phone" href="tel:+79853645518">
                    +7 (985)364-55-18
                  </a>
                  <a className="contacts__phone" href="tel:+79852262030">
                    +7 (985)226-20-30
                  </a>
                </div>
                <div className="contacts__time">
                  <a className="contacts__mail" href="mailto:evro-k@yandex.ru">
                    evro-k@yandex.ru
                  </a>
                  <p className="contacts__schedule">10:00 - 17:00</p>
                </div>
              </div>
            </div>
            <div className="contacts__form form-contacts">
              <input type="text" className="form-contacts__input" placeholder="Имя" />
              <div className="form-contacts__line">
                <input type="email" className="form-contacts__input" placeholder="E-mail" />
                <input type="tel" className="form-contacts__input input-mask" placeholder="Телефон" />
              </div>
              <textarea className="form-contacts__area" placeholder="Сообщение"></textarea>
              <label className="form-contacts__label form-label">
                <input type="checkbox" className="form-label__checkbox-real" />
                <span className="form-label__checkbox-fake"></span>
                <span className="form-label__text">
                  Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
                </span>
              </label>
              <div className="form-contacts__btn btn">Оставить заявку</div>
            </div>
          </div>
        </div>
      </section>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.59309082283!2d37.5659100109784!3d55.57353554252417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada349fa0335%3A0x664f1a375fe7ab8a!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1630922368972!5m2!1sru!2sru" width="100%" height="548" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
      </div>
    </>
  );
};

export default About;
