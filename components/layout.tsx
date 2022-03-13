import React from 'react';

import { MobMenu, Header, PopupSuccess, Footer } from ".";

type LayoutProps = {
  children: React.ReactNode,
};

const Layout: React.FC<LayoutProps> = ({
  children,
}) => {
  const [isMobMenuOpen, setMobMenuOpen] = React.useState(false);
  const [isMenuBodyOpened, setMenuBodyOpened] = React.useState(false);


  const handleMobMennuButtonClick = React.useCallback(() => {
    setMobMenuOpen(true);
    document.body.classList.add("lock");
    setTimeout(() => setMenuBodyOpened(true), 200);
  }, []);

  const handleMobMennuCloseClick = React.useCallback(() => {
    setMobMenuOpen(false);
    setMenuBodyOpened(false);
    document.body.classList.remove("lock");
  }, []);

  return (
    <>
      <Header
        handleMobMennuButtonClick={handleMobMennuButtonClick}/>
      {<MobMenu
        handleMobMennuCloseClick={handleMobMennuCloseClick}
        isMobMenuOpen={isMobMenuOpen}
        isMenuBodyOpened={isMenuBodyOpened}
        />}
      <div className="main">

        <PopupSuccess
          title="Ваша заявка отправлена"
          text="Мы позвоним вам в самое ближайшее время"
          buttonText="Вернуться"
        />
        {children}
        <Footer />
      </div>
    </>
  )
};

export default Layout;
