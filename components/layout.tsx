import React from 'react';
import dynamic from 'next/dynamic'

import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import Loader from './common/Loader';

const PopupRequest = dynamic(() => import('./common/Popup'), {
  loading: () => <Loader />,
})

const PopupSuccess = dynamic(() => import('./common/PopupSuccess'), {
  loading: () => <Loader />,
})

const PopupError  = dynamic(() => import('./common/PopupError'), {
  loading: () => <Loader />,
})

const MobMenu  = dynamic(() => import('./layout/MobMenu'), {
  loading: () => <Loader />,
})

type LayoutProps = {
  children: React.ReactNode,
};

const Layout: React.FC<LayoutProps> = ({
  children,
}) => {
  const [isMobMenuOpen, setMobMenuOpen] = React.useState(false);
  const [isMenuBodyOpened, setMenuBodyOpened] = React.useState(false);

  const handleMobMennuCloseClick = React.useCallback(() => {
    setMobMenuOpen(false);
    setMenuBodyOpened(false);
    document.documentElement.classList.remove("lock");
  }, []);

  const handleMobMennuButtonClick = React.useCallback(() => {
    setMobMenuOpen(true);
    document.documentElement.classList.add("lock");
    setTimeout(() => setMenuBodyOpened(true), 200);
  }, []);

  return (
    <>
      <Header
        handleMobMennuButtonClick={handleMobMennuButtonClick}
        />
      {<MobMenu
        handleMobMennuCloseClick={handleMobMennuCloseClick}
        isMobMenuOpen={isMobMenuOpen}
        isMenuBodyOpened={isMenuBodyOpened}
        />}
      <main className="main">
        {children}
        <PopupRequest />
        <PopupSuccess
          title="Заявка отправлена"
          text="Мы вам перезвоним в ближайшее время"
          buttonText="Закрыть"
        />
        <PopupError />
        <Loader />
      </main>
      <Footer />

    </>
  )
};

export default Layout;
