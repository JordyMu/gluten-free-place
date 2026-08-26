import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// useLayoutEffect warns during SSR/SSG; fall back to useEffect on the server.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useIsomorphicLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};

export default ScrollToTop;
