const AboutPreview: React.FC = () => {
  return (
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
              <img className="main-about__play-img" src="static/images/play-btn.svg" alt="кнопка воспроизвести" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
