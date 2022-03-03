import { NextPage } from "next";
import { ArticleCard, BreadCrumbs } from "../components";

const Blog: NextPage = () => {
  return (
    <>
      <BreadCrumbs items={[]}></BreadCrumbs>
      <section className="blog">
        <div className="container">
          <h1 className="blog__title">СТАТЬИ О СПЕЦТЕХНИКЕ</h1>
          <div className="blog__items">
            <ArticleCard></ArticleCard>
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
