import React from 'react'
import { useRouter } from 'next/router'

import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { PopupRequest } from './common/Popup'
import { PopupSuccess } from './common/PopupSuccess'
import { PopupError } from './common/PopupError'
import { MobMenu } from './layout/MobMenu'

type LayoutProps = {
  children: React.ReactNode
}

type SmoothScrollType = (pros: { children: React.ReactNode }) => React.ReactElement

const SmoothScroll: SmoothScrollType = ({ children }) => {
  const router = useRouter()

  React.useEffect(() => {
    setTimeout(() => document.querySelector('header')?.scrollIntoView({ block: 'start', behavior: 'smooth' }), 200)
  }, [router.pathname])
  return <>{children}</>
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobMenuOpen, setMobMenuOpen] = React.useState(false)
  const [isMenuBodyOpened, setMenuBodyOpened] = React.useState(false)

  const router = useRouter()

  React.useEffect(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), [router.pathname])

  const handleMobMennuCloseClick = React.useCallback(() => {
    setMobMenuOpen(false)
    setMenuBodyOpened(false)
    document.documentElement.classList.remove('lock')
  }, [])

  const openMobileMenu = React.useCallback(() => {
    setMobMenuOpen(true)
    document.documentElement.classList.add('lock')
    setTimeout(() => setMenuBodyOpened(true), 200)
  }, [])

  return (
    <>
      <Header openMobileMenu={openMobileMenu} />
      <MobMenu
        handleMobMennuCloseClick={handleMobMennuCloseClick}
        isMobMenuOpen={isMobMenuOpen}
        isMenuBodyOpened={isMenuBodyOpened}
      />
      <main className="main">
        <SmoothScroll>{children}</SmoothScroll>
        <PopupRequest />
        <PopupSuccess title="Заявка отправлена" text="Мы вам перезвоним в ближайшее время" buttonText="Закрыть" />
        <PopupError />
      </main>
      <Footer />
    </>
  )
}
