import React from "react";
import { createPortal } from 'react-dom';
import { useSelector } from "react-redux";
import { selectLoaderState } from "../../redux/selectors";

const Loader: React.FC = () => {
  const portalRef = React.useRef<Element | null>(null)
  const [mounted, setMounted] = React.useState(false)
  
  const isShown = useSelector(selectLoaderState);


  React.useEffect(() => {
    portalRef.current = document.querySelector("#loader")
    setMounted(true)
  }, [])
  
  return mounted && isShown && portalRef.current 
    ? createPortal(
    <div className="loader">
      <div className="dots"></div>
    </div>, portalRef.current
  ) : null
};

export default Loader;
