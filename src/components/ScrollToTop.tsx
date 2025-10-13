import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Мгновенный скролл вверх при изменении маршрута
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

