import React from 'react'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'
import { selectLoaderState, selectProductsLoading } from '../../redux/selectors'

const Loader: React.FC = () => {
  const portalRef = React.useRef<Element | null>(null)
  const [mounted, setMounted] = React.useState(false)

  const isShown = useSelector(selectLoaderState)
  const isLoading = useSelector(selectProductsLoading)

  React.useEffect(() => {
    portalRef.current = document.querySelector('#loader')
    setMounted(true)
  }, [])

  return mounted && (isShown || isLoading) && portalRef.current
    ? createPortal(
        <div className="loader flex aic">
          <div className="dots"></div>
        </div>,
        portalRef.current,
      )
    : null
}

export default Loader
