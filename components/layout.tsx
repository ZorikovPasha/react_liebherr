import React from 'react'
import dynamic from 'next/dynamic'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Loader from './common/Loader'
import { useRouter } from 'next/router'

const PopupRequest = dynamic(() => import('./common/Popup'), {
  loading: () => <Loader />,
})

const PopupSuccess = dynamic(() => import('./common/PopupSuccess'), {
  loading: () => <Loader />,
})

const PopupError = dynamic(() => import('./common/PopupError'), {
  loading: () => <Loader />,
})

const MobMenu = dynamic(() => import('./layout/MobMenu'), {
  loading: () => <Loader />,
})

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

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobMenuOpen, setMobMenuOpen] = React.useState(false)
  const [isMenuBodyOpened, setMenuBodyOpened] = React.useState(false)

  const router = useRouter()

  React.useEffect(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), [router.pathname])

  const handleMobMennuCloseClick = React.useCallback(() => {
    setMobMenuOpen(false)
    setMenuBodyOpened(false)
    document.documentElement.classList.remove('lock')
  }, [])

  const handleMobMennuButtonClick = React.useCallback(() => {
    setMobMenuOpen(true)
    document.documentElement.classList.add('lock')
    setTimeout(() => setMenuBodyOpened(true), 200)
  }, [])

  return (
    <>
      <Header handleMobMennuButtonClick={handleMobMennuButtonClick} />
      <MobMenu handleMobMennuCloseClick={handleMobMennuCloseClick} isMobMenuOpen={isMobMenuOpen} isMenuBodyOpened={isMenuBodyOpened} />
      <main className="main">
        <SmoothScroll>{children}</SmoothScroll>
        <PopupRequest />
        <PopupSuccess title="Заявка отправлена" text="Мы вам перезвоним в ближайшее время" buttonText="Закрыть" />
        <PopupError />
        <Loader />
      </main>
      <Footer />
    </>
  )
}

export default Layout
