import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom';

interface iPortal {
  selector: string,
  children: ReactNode
}

const ClientOnlyPortal: React.FC<iPortal> = ({ children, selector }) => {
  const portalRef = React.useRef<Element | null>(null)
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    portalRef.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted && portalRef.current ? createPortal(children, portalRef.current) : null
}


export default ClientOnlyPortal;