import { MouseEventHandler } from "react";


interface IHeaderProps {
  handleMobMennuButtonClick: MouseEventHandler<HTMLButtonElement>
}

const Header: React.FC<IHeaderProps> = ({ handleMobMennuButtonClick }) => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-inner">
            <div className="header__about">
              <a className="header__logo" href="main.html">
                <img className="header__logo-img" src="images/logo.svg" alt="" />
              </a>
              <p className="header__about-text">Аренда спецтехники LIEBHERR c 2000 года</p>
            </div>
            <div className="header__info">
              <p className="header__schedule">10:00-17:00</p>
              <a className="header__address" href="#">г. Москва, <br />
                ул. Куликовская, 12</a>
            </div>
            <button className="header__btn">Свяжитесь со мной</button>
            <div className="header__tels">
              <a className="header__tel" href="tel:+74999299666">+7 (499)929-96-66</a>
              <a className="header__tel" href="tel:+79853645518">+7 (985)364-55-18</a>
              <a className="header__tel" href="tel:+79852262030">+7 (985)226-20-30</a>
            </div>
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-inner">

            <button className="menu-btn" onClick={handleMobMennuButtonClick}>
              <div className="menu-btn__line"></div>
              <div className="menu-btn__line"></div>
              <div className="menu-btn__line"></div>
            </button>

            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <a className="header__nav-link" href="catalog.html">Каталог</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="product.html">Услуги</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="about.html">О компании</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link active" href="objects.html">Объекты</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="contacts.html">Цены</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="blog.html">Блог</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="contacts.html">Контакты</a>
                </li>
            </ul>
          </nav>
          <div className="header__input-box">
            <form action="" className="header__form">
              <input type="text" className="header__input" />
              <button className="header__input-search" type="submit"></button>  
            </form>
          </div>
        </div>
        </div>
      </div>
  </header>
  );
};

export default Header;