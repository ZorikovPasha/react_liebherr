import React from 'react'

export const useScreenSize = (screenSize = 1200) => {
  const [isDesktop, setIsDesktop] = React.useState(false)

  React.useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth > screenSize)

    window.addEventListener('resize', onResize)
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [screenSize])

  return isDesktop
}
