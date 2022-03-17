import React from 'react';
import { useSelector } from 'react-redux';

import { MobMenu, Header, Footer, PopupRequest, PopupSuccess } from ".";
import { selectPopupState, selectSuccessPopupState } from '../redux/selectors';

type LayoutProps = {
  children: React.ReactNode,
};

const Layout: React.FC<LayoutProps> = ({
  children,
}) => {
  const [isMobMenuOpen, setMobMenuOpen] = React.useState(false);
  const [isMenuBodyOpened, setMenuBodyOpened] = React.useState(false);

  const isPopupOpened = useSelector(selectPopupState);
  const isSuccessPopupOpened = useSelector(selectSuccessPopupState);

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
      <div className="main">
        {children}
        <Footer />
        {isPopupOpened && <PopupRequest/>}
        {isSuccessPopupOpened && <PopupSuccess 
          title='Заявка отправлена' 
          text="Мы вам перезвоним в ближайшее время" 
          buttonText="Закрыть"
          />}
      </div>
    </>
  )
};

export default Layout;
