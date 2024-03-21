import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../redux/slices/modalsSlice'
import { ROUTES } from '../../utils/const'

export const Footer = () => {
  const dispatch = useDispatch()

  const footerLists = [
    [
      { text: 'О компании', link: ROUTES.ABOUT },
      { text: 'Услуги', link: ROUTES.CONTACTS },
      { text: 'Каталог техники', link: ROUTES.CATALOG },
      { text: 'Аренда кранов', link: ROUTES.ARTICLES },
      { text: 'Наши работы', link: ROUTES.OBJECTS },
      { text: 'Контакты', link: ROUTES.CONTACTS },
    ],
    [
      { text: 'Гусеничные краны', link: ROUTES.CATALOG },
      { text: 'Мобильные краны', link: ROUTES.CATALOG },
      { text: 'Низеорамные краны', link: ROUTES.CATALOG },
      { text: 'Модульные платформы', link: ROUTES.CATALOG },
    ],
  ]
  const listsTitles = ['Клиентам', 'Техника', 'Услуги']

  const onOpenPopup = () => {
    dispatch(toggleModal({ name: 'request', state: true }))
    document.documentElement.classList.add('lock')
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner flex jcsb">
          <div className="footer__column">
            <div className="footer__logo rel">
              <img src="/static/images/footer-logo.svg" alt="logo" />
            </div>
            <p className="footer__about">Аренда мобильных и гусеничных кранов LIEBHERR</p>
            <p className="footer__rights">© 2000-2021 Все права защищены</p>
          </div>
          {footerLists?.map((arr, idx) => (
            <div className="footer__column" key={idx}>
              <p className="footer__column-title">{listsTitles[idx]}</p>
              <ul className="footer__column-list column-list">
                {arr.map(({ text, link }) => (
                  <li className="column-list__item" key={text}>
                    <Link href={link}>
                      <a className="column-list__link">{text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer__column">
            <button className="footer__btn" onClick={onOpenPopup}>
              Свяжитесь со мной
            </button>
            <div className="footer__socials">
              <div>
                <Image className="footer__social" src="/static/images/social-1.svg" alt="" width={24} height={25} />
              </div>
              <div>
                <Image
                  className="footer__social"
                  src="/static/images/social-2.svg"
                  alt="twitter"
                  width={24}
                  height={25}
                />
              </div>
              <div>
                <Image
                  className="footer__social"
                  src="/static/images/social-3.svg"
                  alt="whatsapp"
                  width={24}
                  height={25}
                />
              </div>
              <div>
                <Image
                  className="footer__social"
                  src="/static/images/social-4.svg"
                  alt="vkontacte"
                  width={24}
                  height={25}
                />
              </div>
              <div>
                <Image
                  className="footer__social"
                  src="/static/images/social-5.svg"
                  alt="yandex"
                  width={24}
                  height={25}
                />
              </div>
            </div>
          </div>
          <div className="footer__column">
            <p className="footer__column-title">Контакты</p>
            <a className="footer__tel" href="tel:+74999299666">
              +7 (499)929-96-66
            </a>
            <a className="footer__tel" href="tel:+79853645518">
              +7 (985)364-55-18
            </a>
            <a className="footer__tel" href="tel:+79852262030">
              +7 (985)226-20-30
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
