import Link from "next/link";
import { MouseEventHandler } from "react";

interface IMobMenuProps {
  handleMobMennuCloseClick:  MouseEventHandler<HTMLButtonElement>;
  isMobMenuOpen: boolean;
  isMenuBodyOpened: boolean;
}

const MobMenu: React.FC<IMobMenuProps> = ({ handleMobMennuCloseClick, isMobMenuOpen, isMenuBodyOpened }) => {

  const menuItems = [
    { link: "/catalog", text: "Каталог" },
    { link: "/product", text: "Услуги" },
    { link: "/about", text: "О компании" },
    { link: "/objects", text: "Объекты" },
    { link: "/contacts", text: "Цены" },
    { link: "/blog", text: "Блог" },
    { link: "/contacts", text: "Контакты" },
  ];
  return (
    <div className={`mob-menu ${isMobMenuOpen ? 'opened' : ''}`}>
      <div className={`mob-menu__body ${isMenuBodyOpened ? 'opened' : ''}`}>
        <button className="mob-menu__close" onClick={handleMobMennuCloseClick}>
          <span></span>
          <span></span>
        </button>
        <ul className="mob-menu__list">
          {menuItems.map(({ link, text }) => (
            <li className="mob-menu__list-item" key={text}>
              <Link href={link} passHref>
                {text}
              </Link>
            </li>
          ))}
      </ul>
      </div>
    </div>
  );
};

export default MobMenu;
