import { NextPage } from "next";
import Link from "next/link";

import { PopupRequest } from "../components";

const Home: NextPage = () => {
  return (
    <main className="main">
      <PopupRequest />

      <Link href="/"><a>  </a> </Link>

      <div className="popup-message">
        <div className="popup-message__body">
          <button className="popup-message__close">
            <img src="images/close.svg" alt="close icon" />
          </button>
          <h3 className="popup-message__title">Ваша заявка отправлена</h3>
          <p className="popup-message__text">Мы позвоним вам в самое ближайшее время</p>
          <button className="popup-message__btn">Вернуться</button>
        </div>
      </div>

      <section className="top">
        <div className="container-fluid">
          <div className="top__inner">
            <div className="top__slider">
              <div className="top__slider-item">
                <div className="top__slider-numbers">
                  <span className="top__slider-num">01/</span>
                  <span className="top__slider-total">04</span>
                </div>
                <div className="top__slider-images">
                  <img className="top__slider-img" src="images/top-bg.jpg" alt="background image" />
                </div>
              </div>
              <div className="top__slider-item">
                <div className="top__slider-numbers">
                  <span className="top__slider-num">02/</span>
                  <span className="top__slider-total">04</span>
                </div>
                <div className="top__slider-images">
                  <img className="top__slider-img" src="images/top-bg.jpg" alt="background image" />
                </div>
              </div>
              <div className="top__slider-item">
                <div className="top__slider-numbers">
                  <span className="top__slider-num">03/</span>
                  <span className="top__slider-total">04</span>
                </div>
                <div className="top__slider-images">
                  <img className="top__slider-img" src="images/top-bg.jpg" alt="background image" />
                </div>
              </div>
              <div className="top__slider-item">
                <div className="top__slider-numbers">
                  <span className="top__slider-num">04/</span>
                  <span className="top__slider-total">04</span>
                </div>
                <div className="top__slider-images">
                  <img className="top__slider-img" src="images/top-bg.jpg" alt="background image" />
                </div>
              </div>
            </div>

            <div className="top__content">
              <div className="top__container container">
                <div className="top__content-box">
                  <h1 className="top__title animate__animated animate__fadeIn animate__delay-1s">Аренда спецтехники Liebherr для любых задач</h1>
                  <p className="top__text animate__animated animate__fadeIn animate__delay-2s">Мобильные, гусеничные и башенные краны LIEBHERR в аренду для любых задач и грузов. работаем по всей России</p>
                  <div className="top__btns animate__animated animate__fadeIn animate__delay-2s">
                    <button className="top__callme btn">Заказать звонок</button>
                    <a className="top__link" href="catalog.html">
                      Каталог техники
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rent">
        <div className="container">
          <div className="rent__inner">
            <h2 className="rent__title">
              <span>Спецтехника</span> в аренду
            </h2>
            <div className="rent__slider">
              <div className="rent__slider-item slider-item">
                <div className="slider-item__body">
                  <div className="slider-item__images wow animate__animated animate__fadeInLeft" data-wow-offset="400">
                    <img src="images/rent.png" alt="rent item" />
                  </div>
                  <div className="slider-item__info">
                    <h3 className="slider-item__title">Гусеничные краны</h3>
                    <p className="slider-item__text">Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.</p>
                    <a className="slider-item__link btn" href="#">
                      Выбрать спецтехнику
                    </a>
                  </div>
                </div>
              </div>
              <div className="rent__slider-item slider-item">
                <div className="slider-item__body">
                  <div className="slider-item__images">
                    <img src="images/rent.png" alt="rent item" />
                  </div>
                  <div className="slider-item__info">
                    <h3 className="slider-item__title">Гусеничные краны</h3>
                    <p className="slider-item__text">Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.</p>
                    <a className="slider-item__link btn" href="#">
                      Выбрать спецтехнику
                    </a>
                  </div>
                </div>
              </div>
              <div className="rent__slider-item slider-item">
                <div className="slider-item__body">
                  <div className="slider-item__images">
                    <img src="images/rent.png" alt="rent item" />
                  </div>
                  <div className="slider-item__info">
                    <h3 className="slider-item__title">Гусеничные краны</h3>
                    <p className="slider-item__text">Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.</p>
                    <a className="slider-item__link btn" href="#">
                      Выбрать спецтехнику
                    </a>
                  </div>
                </div>
              </div>
              <div className="rent__slider-item slider-item">
                <div className="slider-item__body">
                  <div className="slider-item__images">
                    <img src="images/rent.png" alt="rent item" />
                  </div>
                  <div className="slider-item__info">
                    <h3 className="slider-item__title">Гусеничные краны</h3>
                    <p className="slider-item__text">Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.</p>
                    <a className="slider-item__link btn" href="#">
                      Выбрать спецтехнику
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="guarantee">
        <div className="container">
          <div className="guarantee__inner">
            <h2 className="guarantee__title">С нами надежно</h2>
            <div className="guarantee__body">
              <div className="guarantee__info">
                <p className="guarantee__text">Компания Еврокран успешно работает на территории РФ с 2000 года.</p>
                <p className="guarantee__text">В нашем автопарке гусеничные и мобильные краны известного немецкого бренда.</p>
                <p className="guarantee__text">Среди них есть модели любой грузоподъемности, для погрузочных, монтажных, транспортировочных и других работ.</p>
                <p className="guarantee__text">Обращение в компанию гарантирует комплексный подход к решению поставленных задач. Получить больше информации можно у менеджеров Компании Еврокран.</p>
                <button className="guarantee__btn btn">Заказать звонок</button>
              </div>
              <div className="guarantee__items">
                <div className="guarantee__item">
                  <img className="guarantee__item-img" src="images/guarantee-1.svg" alt="guarantee" />
                  <p className="guarantee__item-title">Поставка техники точно в срок</p>
                </div>
                <div className="guarantee__item">
                  <img className="guarantee__item-img" src="images/guarantee-2.svg" alt="guarantee" />
                  <p className="guarantee__item-title">Сопровождение спецтехники</p>
                </div>
                <div className="guarantee__item">
                  <img className="guarantee__item-img" src="images/guarantee-3.svg" alt="guarantee" />
                  <p className="guarantee__item-title">Квалифицированнные специалисты</p>
                </div>
                <div className="guarantee__item">
                  <img className="guarantee__item-img" src="images/guarantee-4.svg" alt="guarantee" />
                  <p className="guarantee__item-title">Автопарк от ведущих мировых производителей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="numbers">
        <div className="container">
          <div className="numbers__items wow animate__animated animate__fadeIn animate__delay-1s">
            <div className="numbers__item">
              <p className="numbers__number">
                <img src="images/20.png" alt="number" />
              </p>
              <p className="numbers__text">лет на рынке</p>
            </div>
            <div className="numbers__item">
              <p className="numbers__number">
                <img src="images/1 000+.png" alt="number" />
              </p>
              <p className="numbers__text">выполненных проектов</p>
            </div>
            <div className="numbers__item">
              <p className="numbers__number">
                <img src="images/20.png" alt="number" />
              </p>
              <p className="numbers__text">единиц техники всегда в наличии</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="container-fluid">
          <div className="projects__inner">
            <div className="container">
              <h2 className="projects__title">Реализованные проекты</h2>
            </div>

            <div className="projects-nav-wrapper">
              <div className="projects-nav">
                <div className="projects-nav__item">
                  <div className="projects-nav__img-wrapper">
                    <img className="projects-nav__img" src="images/projects/1.jpg" alt="project thumb" />
                  </div>
                </div>
                <div className="projects-nav__item">
                  <div className="projects-nav__img-wrapper">
                    <img className="projects-nav__img" src="images/projects/1.jpg" alt="project thumb" />
                  </div>
                </div>
                <div className="projects-nav__item">
                  <div className="projects-nav__img-wrapper">
                    <img className="projects-nav__img" src="images/projects/1.jpg" alt="project thumb" />
                  </div>
                </div>
                <div className="projects-nav__item">
                  <div className="projects-nav__img-wrapper">
                    <img className="projects-nav__img" src="images/projects/1.jpg" alt="project thumb" />
                  </div>
                </div>
                <div className="projects-nav__item">
                  <div className="projects-nav__img-wrapper">
                    <img className="projects-nav__img" src="images/projects/1.jpg" alt="project thumb" />
                  </div>
                </div>
                <div className="projects-nav__item">
                  <div className="projects-nav__img-wrapper">
                    <img className="projects-nav__img" src="images/projects/1.jpg" alt="project thumb" />
                  </div>
                </div>
                <div className="projects-nav__item">
                  <div className="projects-nav__img-wrapper">
                    <img className="projects-nav__img" src="images/projects/1.jpg" alt="project thumb" />
                  </div>
                </div>
                <div className="projects-nav__item">
                  <div className="projects-nav__img-wrapper">
                    <img className="projects-nav__img" src="images/projects/1.jpg" alt="project thumb" />
                  </div>
                </div>
              </div>
              <div className="projects-nav__line"></div>
            </div>

            <div className="projects-slider-wrapper">
              <div className="projects-slider">
                <div className="projects-slider__item">
                  <div className="projects-slider__inner">
                    <div className="projects-slider__images">
                      <img className="projects-slider__img" src="images/project-slider-1.jpg" alt="project" />
                    </div>
                    <div className="projects-slider__info">
                      <p className="projects-slider__item-title">Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750</p>
                      <p className="projects-slider__item-location">Калужская обл., Дзержинский район, пос. Полотняный завод</p>
                      <p className="projects-slider__item-text">
                        Монтаж вакуумных колонн К-201 и К-2 «Техническое перевооружение установки АТ-101» <br />
                        Монтаж произведен двумя гусеничными кранами LIEBHERR LR1300 и LIEBHERR LR1750.
                      </p>
                      <a className="projects-slider__item-link" href="#">
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
                <div className="projects-slider__item">
                  <div className="projects-slider__inner">
                    <div className="projects-slider__images">
                      <img className="projects-slider__img" src="images/project-slider-1.jpg" alt="project" />
                    </div>
                    <div className="projects-slider__info">
                      <p className="projects-slider__item-title">Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750</p>
                      <p className="projects-slider__item-location">Калужская обл., Дзержинский район, пос. Полотняный завод</p>
                      <p className="projects-slider__item-text">
                        Монтаж вакуумных колонн К-201 и К-2 «Техническое перевооружение установки АТ-101» <br />
                        Монтаж произведен двумя гусеничными кранами LIEBHERR LR1300 и LIEBHERR LR1750.
                      </p>
                      <a className="projects-slider__item-link" href="#">
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
                <div className="projects-slider__item">
                  <div className="projects-slider__inner">
                    <div className="projects-slider__images">
                      <img className="projects-slider__img" src="images/project-slider-1.jpg" alt="project" />
                    </div>
                    <div className="projects-slider__info">
                      <p className="projects-slider__item-title">Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750</p>
                      <p className="projects-slider__item-location">Калужская обл., Дзержинский район, пос. Полотняный завод</p>
                      <p className="projects-slider__item-text">
                        Монтаж вакуумных колонн К-201 и К-2 «Техническое перевооружение установки АТ-101» <br />
                        Монтаж произведен двумя гусеничными кранами LIEBHERR LR1300 и LIEBHERR LR1750.
                      </p>
                      <a className="projects-slider__item-link" href="#">
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
                <div className="projects-slider__item">
                  <div className="projects-slider__inner">
                    <div className="projects-slider__images">
                      <img className="projects-slider__img" src="images/project-slider-1.jpg" alt="project" />
                    </div>
                    <div className="projects-slider__info">
                      <p className="projects-slider__item-title">Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750</p>
                      <p className="projects-slider__item-location">Калужская обл., Дзержинский район, пос. Полотняный завод</p>
                      <p className="projects-slider__item-text">
                        Монтаж вакуумных колонн К-201 и К-2 «Техническое перевооружение установки АТ-101» <br />
                        Монтаж произведен двумя гусеничными кранами LIEBHERR LR1300 и LIEBHERR LR1750.
                      </p>
                      <a className="projects-slider__item-link" href="#">
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
                <div className="projects-slider__item">
                  <div className="projects-slider__inner">
                    <div className="projects-slider__images">
                      <img className="projects-slider__img" src="images/project-slider-1.jpg" alt="project" />
                    </div>
                    <div className="projects-slider__info">
                      <p className="projects-slider__item-title">Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750</p>
                      <p className="projects-slider__item-location">Калужская обл., Дзержинский район, пос. Полотняный завод</p>
                      <p className="projects-slider__item-text">
                        Монтаж вакуумных колонн К-201 и К-2 «Техническое перевооружение установки АТ-101» <br />
                        Монтаж произведен двумя гусеничными кранами LIEBHERR LR1300 и LIEBHERR LR1750.
                      </p>
                      <a className="projects-slider__item-link" href="#">
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
                <div className="projects-slider__item">
                  <div className="projects-slider__inner">
                    <div className="projects-slider__images">
                      <img className="projects-slider__img" src="images/project-slider-1.jpg" alt="project" />
                    </div>
                    <div className="projects-slider__info">
                      <p className="projects-slider__item-title">Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750</p>
                      <p className="projects-slider__item-location">Калужская обл., Дзержинский район, пос. Полотняный завод</p>
                      <p className="projects-slider__item-text">
                        Монтаж вакуумных колонн К-201 и К-2 «Техническое перевооружение установки АТ-101» <br />
                        Монтаж произведен двумя гусеничными кранами LIEBHERR LR1300 и LIEBHERR LR1750.
                      </p>
                      <a className="projects-slider__item-link" href="#">
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
                <div className="projects-slider__item">
                  <div className="projects-slider__inner">
                    <div className="projects-slider__images">
                      <img className="projects-slider__img" src="images/project-slider-1.jpg" alt="project" />
                    </div>
                    <div className="projects-slider__info">
                      <p className="projects-slider__item-title">Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750</p>
                      <p className="projects-slider__item-location">Калужская обл., Дзержинский район, пос. Полотняный завод</p>
                      <p className="projects-slider__item-text">
                        Монтаж вакуумных колонн К-201 и К-2 «Техническое перевооружение установки АТ-101» <br />
                        Монтаж произведен двумя гусеничными кранами LIEBHERR LR1300 и LIEBHERR LR1750.
                      </p>
                      <a className="projects-slider__item-link" href="#">
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
                <div className="projects-slider__item">
                  <div className="projects-slider__inner">
                    <div className="projects-slider__images">
                      <img className="projects-slider__img" src="images/project-slider-1.jpg" alt="project" />
                    </div>
                    <div className="projects-slider__info">
                      <p className="projects-slider__item-title">Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750</p>
                      <p className="projects-slider__item-location">Калужская обл., Дзержинский район, пос. Полотняный завод</p>
                      <p className="projects-slider__item-text">
                        Монтаж вакуумных колонн К-201 и К-2 «Техническое перевооружение установки АТ-101» <br />
                        Монтаж произведен двумя гусеничными кранами LIEBHERR LR1300 и LIEBHERR LR1750.
                      </p>
                      <a className="projects-slider__item-link" href="#">
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="catalog">
        <div className="container">
          <h2 className="catalog__title">Каталог техники</h2>
        </div>
        <div className="container-fluid">
          <div className="catalog-slider">
            <div className="product-item">
              <div className="product-item__body">
                <div className="product-item__images">
                  <img className="product-item__img" src="images/catalog/1.jpg" alt="product" />
                </div>
                <div className="product-item__title-box">
                  <a className="product-item__title product-item__title--big" href="product.html">
                    Гусеничный кран Liebherr LR 1750
                  </a>
                </div>
                <div className="product-item__info">
                  <div className="product-item__box">
                    <div className="product-item__text">Грузоподъемность:</div>
                    <div className="product-item__text">40 тонн</div>
                    <div className="product-item__text">Длина стрелы:</div>
                    <div className="product-item__text">35 м</div>
                  </div>
                  <a className="product-item__link" href="#">
                    Все характеристики
                  </a>
                  <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                    Арендовать
                  </a>
                </div>
              </div>
            </div>

            <div className="product-item">
              <div className="product-item__body">
                <div className="product-item__images">
                  <img className="product-item__img" src="images/catalog/1.jpg" alt="product" />
                </div>
                <div className="product-item__title-box">
                  <a className="product-item__title product-item__title--big" href="product.html">
                    Гусеничный кран Liebherr LR 1750
                  </a>
                </div>
                <div className="product-item__info">
                  <div className="product-item__box">
                    <div className="product-item__text">Грузоподъемность:</div>
                    <div className="product-item__text">40 тонн</div>
                    <div className="product-item__text">Длина стрелы:</div>
                    <div className="product-item__text">35 м</div>
                  </div>
                  <a className="product-item__link" href="#">
                    Все характеристики
                  </a>
                  <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                    Арендовать
                  </a>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-item__body">
                <div className="product-item__images">
                  <img className="product-item__img" src="images/catalog/1.jpg" alt="product" />
                </div>
                <div className="product-item__title-box">
                  <a className="product-item__title product-item__title--big" href="product.html">
                    Гусеничный кран Liebherr LR 1750
                  </a>
                </div>
                <div className="product-item__info">
                  <div className="product-item__box">
                    <div className="product-item__text">Грузоподъемность:</div>
                    <div className="product-item__text">40 тонн</div>
                    <div className="product-item__text">Длина стрелы:</div>
                    <div className="product-item__text">35 м</div>
                  </div>
                  <a className="product-item__link" href="#">
                    Все характеристики
                  </a>
                  <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                    Арендовать
                  </a>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-item__body">
                <div className="product-item__images">
                  <img className="product-item__img" src="images/catalog/1.jpg" alt="product" />
                </div>
                <div className="product-item__title-box">
                  <a className="product-item__title product-item__title--big" href="product.html">
                    Гусеничный кран Liebherr LR 1750
                  </a>
                </div>
                <div className="product-item__info">
                  <div className="product-item__box">
                    <div className="product-item__text">Грузоподъемность:</div>
                    <div className="product-item__text">40 тонн</div>
                    <div className="product-item__text">Длина стрелы:</div>
                    <div className="product-item__text">35 м</div>
                  </div>
                  <a className="product-item__link" href="#">
                    Все характеристики
                  </a>
                  <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                    Арендовать
                  </a>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-item__body">
                <div className="product-item__images">
                  <img className="product-item__img" src="images/catalog/1.jpg" alt="product" />
                </div>
                <div className="product-item__title-box">
                  <a className="product-item__title product-item__title--big" href="product.html">
                    Гусеничный кран Liebherr LR 1750
                  </a>
                </div>
                <div className="product-item__info">
                  <div className="product-item__box">
                    <div className="product-item__text">Грузоподъемность:</div>
                    <div className="product-item__text">40 тонн</div>
                    <div className="product-item__text">Длина стрелы:</div>
                    <div className="product-item__text">35 м</div>
                  </div>
                  <a className="product-item__link" href="#">
                    Все характеристики
                  </a>
                  <a className="product-item__btn product-item__btn--left btn" href="contacts.html">
                    Арендовать
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog__btn-wrapper">
            <a className="catalog__btn" href="catalog.html">
              Перейти в каталог
            </a>
          </div>
        </div>
      </section>

      <section className="cost">
        <div className="container">
          <div className="cost__inner">
            <h2 className="cost__title">Из чего складывается стоимость аренды</h2>
            <div className="cost__items">
              <div className="cost__item">
                <p className="cost__item-num cost__item-num--1">
                  <img src="images/cost-1.png" alt="cost" />
                </p>
                <p className="cost__item-text">Стоимость аренды крана определяется так: 8 (восемь) часов работы каждой единицы спецтехники в течение смены.</p>
              </div>
              <div className="cost__item">
                <p className="cost__item-num cost__item-num--2">
                  <img src="images/cost-2.png" alt="cost" />
                </p>
                <p className="cost__item-text">География доставки спецтехники – вся территория РФ и страны СНГ.</p>
              </div>
              <div className="cost__item">
                <p className="cost__item-num cost__item-num--3">
                  <img src="images/cost-3.png" alt="cost" />
                </p>
                <p className="cost__item-text">Стоимость мобилизации и демобилизации за МКАД и на территорию в границах ТТК обговаривается индивидуально и требует дополнительной оплаты.</p>
              </div>
              <div className="cost__item">
                <p className="cost__item-num cost__item-num--4">
                  <img src="images/cost-4.png" alt="cost" />
                </p>
                <p className="cost__item-text">Обозначенная в прайс-листе стоимость услуг включает НДС – 20 %.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-form">
        <div className="main-form__container">
          <div className="container">
            <div className="main-form__inner">
              <h3 className="main-form__title">
                {" "}
                <span>Оперативно</span> поставим технику{" "}
              </h3>
              <form className="main-form__form" action="">
                <div className="main-form__line">
                  <input className="main-form__input" type="text" placeholder="Ваше имя" />
                  <input className="main-form__input input-mask" type="tel" placeholder="Ваш телефон*" />
                  <button className="main-form__btn btn" type="submit">
                    Заказать звонок
                  </button>
                </div>
                <label className="main-form__label">
                  <input className="main-form__checkbox-real" type="checkbox" />
                  <span className="main-form__checkbox-fake"></span>
                  <span className="main-form__agree">
                    Я согласен с
                    <a className="main-form__agree-link" href="#">
                      условиями обработки
                    </a>
                    и использования моих персональных данных
                  </span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="main-about">
        <div className="main-about__inner">
          <div className="container">
            <div className="main-about__box">
              <h3 className="main-about__title">О нас</h3>
              <div className="main-about__text">
                <p>Компания ЕвроКран – это команда специалистов, обеспечивающих эффективное использование высокопроизводительных немецких автокранов марки LIEBHERR.</p>
                <p>Мы работаем с 2000 года и за это время не раз доказали свой профессионализм и компетентность: сегодня нам доверяют крупнейшие предприятия России.</p>
                <p>Мы обладаем собственным парком с более чем 50 единицами техники и находимся в черте Москвы. Поэтому мы можем подать любую технику в любую точку города незамедлительно, что бывает весьма кстати в случае возникновения каких-либо непредвиденных ситуаций.</p>
              </div>
            </div>
          </div>
          <div className="main-about__video">
            <div className="main-about__video-box">
              <a className="main-about__play" data-fancybox href="https://youtu.be/pNY9aw9iW3s">
                <img className="main-about__play-img" src="images/play-btn.svg" alt="" />
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
                  <img className="services__item-img" src="images/services/1.png" alt="service" />
                </div>
                <a className="services__item-link" href="#">
                  Аренда мобильных автокранов Liebherr
                </a>
              </div>
              <div className="services__item">
                <div className="services__item-images">
                  <img className="services__item-img" src="images/services/2.png" alt="service" />
                </div>
                <a className="services__item-link" href="#">
                  Аренда гусеничных кранов <br /> Liebherr
                </a>
              </div>
              <div className="services__item">
                <div className="services__item-images">
                  <img className="services__item-img" src="images/services/3.png" alt="service" />
                </div>
                <a className="services__item-link" href="#">
                  Аренда низкорамных тралов
                </a>
              </div>
              <div className="services__item">
                <div className="services__item-images">
                  <img className="services__item-img" src="images/services/4.png" alt="service" />
                </div>
                <a className="services__item-link" href="#">
                  Перевозка негабаритного и тяжеловесного груза
                </a>
              </div>
              <div className="services__item">
                <div className="services__item-images">
                  <img className="services__item-img" src="images/services/5.png" alt="service" />
                </div>
                <a className="services__item-link" href="#">
                  Разработка ППРК
                </a>
              </div>
              <div className="services__item">
                <div className="services__item-images">
                  <img className="services__item-img" src="images/services/6.png" alt="service" />
                </div>
                <a className="services__item-link" href="#">
                  Выезд специалиста на объект
                </a>
              </div>
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
            <li className="block-text__list-item">Предоставление автокрана Liebherr LR 1750 и автотрейлеров из собственного парка компании «Казметрострой». Техника использовалась для демонтажа и перевозки проходческих щитов.</li>
            <li className="block-text__list-item">Участие автокрана Liebherr LR 1750 и автотрейлеров в демонтаже проходческого щита на участке метрополитена от станции «Выхино» до «Косино-Ухтомской».</li>
            <li className="block-text__list-item">Использование Liebherr LTM 1500 в качестве основной мощности для производства работ при возведении Лукомльской ГРЭС. В качестве арендатора выступала китайская машиностроительная инжиниринговая компания.</li>
            <li className="block-text__list-item">Аренда низкорамных тралов для транспортировки спецтехники официального дилера ТМ в России, компании ООО «Либхерр-Русланд».</li>
            <li className="block-text__list-item">Установка нового реактора гидрокрекинга на территории завода ОАО «Уфанефтехим».</li>
            <li className="block-text__list-item">Демонтаж старых и монтаж новых чиллеров на крыше здания Mail.ru. Арендатор — строительный холдинг КМТ.</li>
            <li className="block-text__list-item">Монтаж мостовых балок на головном участке автомобильной скоростной дороги Москва-Санкт-Петербург, произведенный с использованием кранов Liebherr.</li>
            <li className="block-text__list-item">Транспортировка и установка проходческого щита из Протвино в Москву для возведения Бутовской линии метрополитена. Заказ выполнен компанией «Транстоннельстрой».</li>
          </ul>
          <p className="block-text__text">Условия аренды оговариваются индивидуально. География предоставления услуги — Москва, Санкт-Петербург, Екатеринбург, Нижний Новгород, Пермь, Воронеж, Челябинск, Краснодар, Ярославль, Самара, Уфа и другие города РФ.</p>
        </div>
      </section>

      <section className="questions">
        <div className="questions__container">
          <div className=" container">
            <div className="questions__inner">
              <h2 className="questions__title">Остались вопросы?</h2>
              <p className="questions__text">Оставьте заявку на звонок и мы ответим на все ваши вопросы в самое ближайшее время</p>
              <form className="questions__form" action="">
                <input className="questions__form-input" type="text" placeholder="Ваше имя" />
                <input className="questions__form-input input-mask" type="tel" placeholder="Ваш телефон*" required />
                <input className="questions__form-input email-mask" type="text" placeholder="Ваша почта" />
                <textarea className="questions__form-textarea" placeholder="Оставьте ваш вопрос"></textarea>
                <label className="questions__form-label">
                  <input className="questions__form-real" type="checkbox" />
                  <span className="questions__form-fake"></span>
                  <span className="questions__form-agree">
                    Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
                  </span>
                </label>
                <button className="questions__form-btn btn" type="submit">
                  Заказать звонок
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.59309082283!2d37.5659100109784!3d55.57353554252417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada349fa0335%3A0x664f1a375fe7ab8a!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1630922368972!5m2!1sru!2sru" width="100%" height="548" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
      </div>
    </main>
  );
};

export default Home;
