import { NextPage } from "next";
import { AnotherArticlesSlider, BreadCrumbs } from "../../components";


const Article: NextPage = () => {
  const breadCrumbs = [
    { id: 1, link: "/", text: "Главная" }, 
    { id: 2, link: "/blog", text: "Блог" }, 
    { id: 3, link: "", text: "Аренда автокрана Liebherr ltm 1160" }, 
  ];


  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <section className="article-top">
        <div className="container">
          <h1 className="article-top__heading">Аренда автокрана Liebherr ltm 1160</h1>
          <p className="article-top__text">Компания liebherr – ведущий поставщик строительной и землеройной техники в мире. Кроме тяжелых гусеничных экскаваторов производитель предлагает автомобильные краны от легкой до тяжелой категории.</p>
          <p className="article-top__text">Каждая машина демонстрирует отличные параметры при эксплуатации в тяжелых условиях и проведении серьезных работ.</p>
          <p className="article-top__text">Спрос на автокраны немецкого производителя огромный. Однако не все компании имеют достаточно средств на покупку такой машины. Отличное решение – аренда автокрана 160 тонн.</p>
          <div className="article-top__images">
            <div className="article-top__img">
              <img src="/static/images/article/1.jpg" alt="Строительный кран" />
            </div>
            <div className="article-top__img">
              <img src="/static/images/article/2.jpg" alt="Строительный кран" />
            </div>
          </div>
          <h2 className="article-top__title">Условия аренды автокранов liebherr ltm 1160</h2>
          <p className="article-top__text">Компания Еврокран предлагает в аренду в москве автокраны производства liebherr. В линейке надежные, исправные машины, которые часто проходят сервисное обслуживание. Благодаря этому арендованная техника быстро справляется с поставленными задачами. В парке – мобильные и гусеничные транспортные средства.</p>
          <p className="article-top__text">С помощью кранов разной грузоподъемности можно провести погрузочные, монтажные, транспортировочные работы. Цена аренды зависит от вида выбранной машины, сроков и других факторов. В стоимость проката входит оплата труда опытного крановщика.</p>
          <p className="article-top__text">Наши постоянные клиенты получают скидки на предоставляемые услуги. Своим клиентам гарантируем следующие выгоды сотрудничества:</p>
          <ul className="article-top__list">
            <li className="article-top__list-item">Быстрая выдача транспорта в пользование клиента;</li>
            <li className="article-top__list-item">Высококлассное обслуживание;</li>
            <li className="article-top__list-item">Штат опытных водителей, с помощью которых эффективно проводятся любые поставленные задачи:</li>
            <li className="article-top__list-item">Консультации опытных сотрудников, которые помогают с выбором крана и сопровождают на всех этапах сотрудничества;</li>
            <li className="article-top__list-item">Сотрудничество на основе договора, в котором отражаются сроки, цены услуг и обязательства сторон.</li>
          </ul>
          <p className="article-top__text">Наши краны используются при строительстве высотных объектов, при проведении работ на промышленных добывающих объектах, при прокладке и ремонте дорог, железнодорожных путей.</p>
          <p className="article-top__text article-top__text--last">Техника незаменима при ремонте старых строений, операциях, требующих высокой точности.</p>

          <h2 className="article-top__title">Особенности и преимущества крана liebherr ltm 1160</h2>
          <p className="article-top__text">Большим спросом среди предложения нашей компании пользуется автокран liebherr ltm 1160. Модель обладает такими характеристиками:</p>
          <ul className="article-top__list">
            <li className="article-top__list-item">Современная концепция привода;</li>
            <li className="article-top__list-item">Мощное шасси, позволяющее работать на местностях с плохим рельефом;</li>
            <li className="article-top__list-item">Безопасное перемещение груза;</li>
            <li className="article-top__list-item">Возможность оперативной установки крана на опоры;</li>
            <li className="article-top__list-item">Надежная лебедочная система с канавками особого типа, монтированными планетарными редукторами;</li>
            <li className="article-top__list-item">Небольшие габариты, позволяющие установке легко маневрировать в стесненных пространствах;</li>
            <li className="article-top__list-item">Оснащение дисковыми пневматическими тормозами. Благодаря этому получилась повышенная скорость торможения без утраты устойчивости;</li>
            <li className="article-top__list-item">Дистанционное управление, которое позволяет работать без участия водителя, при помощи компьютерной программы, которая автоматически настраивает требуемые показатели после ввода массы груза.</li>
            <li className="article-top__list-item">Радиус разворота механизма – 10,5 м. Особая программа тестирования liccon дает возможность оператору исключить сбои датчиков без применения измерительных приборов.</li>
          </ul>
          <p className="article-top__text">Если хотите заказать услуги аренды в москве и московской области, позвоните менеджерам нашей фирмы по номеру +7 (495) 645-19-20. По всем интересующим вопросам вас проконсультируют сотрудники, а также помогут с выбором транспорта.</p>
        </div>
      </section>
      <AnotherArticlesSlider />
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.59309082283!2d37.5659100109784!3d55.57353554252417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada349fa0335%3A0x664f1a375fe7ab8a!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1630922368972!5m2!1sru!2sru" width="100%" height="548" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
      </div>
    </>
  );
};

export default Article;
