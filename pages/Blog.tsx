import { GetStaticProps, NextPage } from "next";
import { publicApi } from "../api";
import { BreadCrumbs, ArticleCard } from "../components";
import { ArticleType } from "../types/dataTypes";

interface IBlogProps {
  articles: ArticleType[]
}

const Blog: NextPage<IBlogProps> = ({ articles }) => {

  const breadCrumbs = [
    { id: 1, link: "/", text: "Главная" }, 
    { id: 2, link: "", text: "Статьи" }, 
  ];
  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <section className="blog">
        <div className="container">
          <h1 className="blog__title">СТАТЬИ О СПЕЦТЕХНИКЕ</h1>
          <div className="blog__items">
            {articles.map(({ id, title, subtitle, preview }) => (
              <ArticleCard 
                key={id}
                id={id}
                title={title}
                subtitle={subtitle}
                preview={preview}
                />
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

export const getStaticProps: GetStaticProps = async () => {
  const articles = await publicApi.getArticles();

  return { props: {articles} }
}