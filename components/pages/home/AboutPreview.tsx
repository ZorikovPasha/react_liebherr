import Image from 'next/image'
import React from 'react'
import PopupVideo from '../../common/PopupVideo'

const AboutPreview: React.FC = () => {
  const [isPlaying, setPlaying] = React.useState(false)

  const onPlay = () => {
    setPlaying(true)
    document.body.classList.add('lock')
  }

  const onClose = () => {
    setPlaying(false)
    document.body.classList.remove('lock')
  }

  return (
    <section className="main-about">
      <div className="main-about__inner rel flex">
        <div className="container">
          <div className="main-about__box">
            <h3 className="main-about__title">О нас</h3>
            <div className="main-about__text">
              <p>
                Компания ЕвроКран – это команда специалистов, обеспечивающих
                эффективное использование высокопроизводительных немецких
                автокранов марки LIEBHERR.
              </p>
              <p>
                Мы работаем с 2000 года и за это время не раз доказали свой
                профессионализм и компетентность: сегодня нам доверяют
                крупнейшие предприятия России.
              </p>
              <p>
                Мы обладаем собственным парком с более чем 50 единицами техники
                и находимся в черте Москвы. Поэтому мы можем подать любую
                технику в любую точку города незамедлительно, что бывает весьма
                кстати в случае возникновения каких-либо непредвиденных
                ситуаций.
              </p>
            </div>
          </div>
        </div>
        <div className="main-about__video">
          <div className="main-about__video-box rel after">
            <button
              className="main-about__play"
              aria-label="play video"
              onClick={onPlay}
            >
              <svg
                className="anim-color"
                width="113"
                height="112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="56.998" cy="56.001" r="38.154" fill="transparent" />
                <path d="M56.998 94.08c-21.056 0-38.08-17.023-38.08-38.08 0-21.055 17.024-38.08 38.08-38.08 21.056 0 38.08 17.025 38.08 38.08 0 21.057-17.024 38.08-38.08 38.08zm0-71.68c-18.592 0-33.6 15.009-33.6 33.6 0 18.593 15.008 33.6 33.6 33.6 18.592 0 33.6-15.007 33.6-33.6 0-18.591-15.008-33.6-33.6-33.6z" />
                <path d="M45.798 75.49V36.512L79.398 56l-33.6 19.488zm4.48-31.36v23.52l20.16-11.873-20.16-11.648z" />
              </svg>
            </button>
            <div className="main-about__images">
              <Image src="/static/images/about-img.jpg" layout="fill" alt="" />
            </div>
            {isPlaying && (
              <PopupVideo videoId="pNY9aw9iW3s" onClose={onClose} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
