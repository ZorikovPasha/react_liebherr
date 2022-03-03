const ReviewsCards: React.FC = () => {
  return (
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
  );
};

export default ReviewsCards;
