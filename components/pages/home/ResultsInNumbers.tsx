
const ResultsInNumbers: React.FC = () => {
  return (
    <section className="numbers">
      <div className="container">
        <div className="numbers__items wow animate__animated animate__fadeIn animate__delay-1s">
          <div className="numbers__item">
            <p className="numbers__number">
              <img src="static/images/20.png" alt="number" />
            </p>
            <p className="numbers__text">лет на рынке</p>
          </div>
          <div className="numbers__item">
            <p className="numbers__number">
              <img src="static/images/1 000+.png" alt="number" />
            </p>
            <p className="numbers__text">выполненных проектов</p>
          </div>
          <div className="numbers__item">
            <p className="numbers__number">
              <img src="static/images/20.png" alt="number" />
            </p>
            <p className="numbers__text">единиц техники всегда в наличии</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsInNumbers;
