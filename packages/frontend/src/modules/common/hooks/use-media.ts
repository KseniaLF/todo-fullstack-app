import { useMediaQuery } from 'react-responsive';
import { APP_KEYS } from '../consts';

export const useMedia = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${APP_KEYS.BREAKPOINT_KEYS.TABLET}px)`
  });

  const isTablet = useMediaQuery({
    query: `(min-width: ${APP_KEYS.BREAKPOINT_KEYS.TABLET + 1}px) and (max-width: ${
      APP_KEYS.BREAKPOINT_KEYS.DESKTOP
    }px)`
  });

  const isDesktop = useMediaQuery({
    query: `(min-width: ${APP_KEYS.BREAKPOINT_KEYS.DESKTOP + 1}px)`
  });

  return { isMobile, isTablet, isDesktop };
};
