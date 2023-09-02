import React from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../redux/slices/modalsSlice'
import { ROUTES } from '../../utils/const'

interface IHeaderProps {
  handleMobMennuButtonClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Header: React.FC<IHeaderProps> = React.memo(({ handleMobMennuButtonClick }) => {
  const dispatch = useDispatch()
  const onOpenPopup = () => {
    dispatch(toggleModal({ name: 'request', state: true }))
    document.documentElement.classList.add('lock')
  }

  const links = [
    { link: ROUTES.CATALOG, text: 'Каталог' },
    { link: ROUTES.OBJECTS, text: 'Услуги' },
    { link: ROUTES.ABOUT, text: 'О компании' },
    { link: ROUTES.OBJECTS, text: 'Объекты' },
    { link: ROUTES.CONTACTS, text: 'Цены' },
    { link: ROUTES.ARTICLES, text: 'Блог' },
    { link: ROUTES.CONTACTS, text: 'Контакты' },
  ]
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-inner flex aic jcsb">
            <div className="header__about flex aic jcsb">
              <Link href={ROUTES.HOME} prefetch={false}>
                <a className="header__logo">
                  <img className="header__logo-img" src="/static/images/logo.svg" alt="Логотип компани" />
                </a>
              </Link>
              <p className="header__about-text">Аренда спецтехники LIEBHERR c 2000 года</p>
            </div>
            <div className="header__info flex aic">
              <p className="header__schedule rel after">10:00-17:00</p>
              <span className="header__address rel after">
                г. Москва, <br />
                ул. Куликовская, 12
              </span>
            </div>
            <button className="header__btn" onClick={onOpenPopup}>
              Свяжитесь со мной
            </button>
            <div className="header__tels rel after">
              <a className="header__tel" href="tel:+74999299666">
                +7 (499)929-96-66
              </a>
              <a className="header__tel" href="tel:+79853645518">
                +7 (985)364-55-18
              </a>
              <a className="header__tel" href="tel:+79852262030">
                +7 (985)226-20-30
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-inner rel flex aic jcsb">
            <button className="menu-btn" aria-label="open mobile menu" onClick={handleMobMennuButtonClick}>
              <div className="menu-btn__line"></div>
              <div className="menu-btn__line"></div>
              <div className="menu-btn__line"></div>
            </button>

            <nav className="header__nav">
              <ul className="header__nav-list">
                {links.map(({ link, text }) => (
                  <li className="header__nav-item" key={text + link}>
                    <Link href={link}>
                      <a className="header__nav-link rel after">{text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
})

Header.displayName = 'Header'
