import { NextPage } from "next";
import { ArticleCard, BreadCrumbs } from "../components";

const Blog: NextPage = () => {

  const breadCrumbs = [
    { id: 1, link: "/", text: "Главная" }, 
    { id: 2, link: "", text: "Статьи" }, 
  ];

  const articles= [
    { id: 1, imgSrc: "static/images/blog/1.jpg", title: "Аренда автокрана", text: "Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории." },
    { id: 2, imgSrc: "static/images/blog/1.jpg", title: "Аренда автокрана", text: "Компания Liebherr – ведущий поставщик строительной и землеройной техники в мире. Предлагаем автомобильные краны от легкой до тяжелой категории." },
    { id: 3, imgSrc: "static/images/blog/1.jpg", title: "Аренда автокрана LIEBHERR LTM 1160 в Москве", text: "" },
    { id: 4, imgSrc: "static/images/blog/1.jpg", title: "Аренда автокрана LIEBHERR LTM 1160 в Москве", text: "" },
    { id: 5, imgSrc: "static/images/blog/1.jpg", title: "Аренда автокрана LIEBHERR LTM 1160 в Москве", text: "" },
  ];
  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <section className="blog">
        <div className="container">
          <h1 className="blog__title">СТАТЬИ О СПЕЦТЕХНИКЕ</h1>
          <div className="blog__items">
            {articles.map(articleInfo => (
              <ArticleCard {...articleInfo} key={articleInfo.id}/>
            ))}
          </div>
          <div className="blog__btn-wrapper">
            <button className="blog__btn">Загрузить ещё</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
