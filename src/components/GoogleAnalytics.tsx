import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-P1T49E92ZB", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
