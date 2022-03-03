const ArticleCard: React.FC = () => {
  return (
    <div className="blog__item item-blog">
      <div className="item-blog__images">
        <img src="images/blog/1.jpg" alt="" />
      </div>
      <div className="item-blog__box">
        <h6 className="item-blog__title">Аренда автокрана LIEBHERR LTM 1160 в Москве</h6>
        <p className="item-blog__text" data-crop="200">
          Liebherr
        </p>
        <a className="item-blog__btn btn" href="article.html">
          Подробнее
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
