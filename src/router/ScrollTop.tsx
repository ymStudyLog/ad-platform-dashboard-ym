import React from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollTop;
