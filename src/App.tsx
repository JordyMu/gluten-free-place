import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { lazyWithRetry } from "@/lib/lazyWithRetry";
import ScrollToTop from "@/components/ScrollToTop";
import SiteFooter from "@/components/layout/SiteFooter";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Index from "./pages/Index";

const FullApp = lazyWithRetry(() => import("./FullApp"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Loading page">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
  </div>
);

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome) {
    return (
      <>
        <ScrollToTop />
        <GoogleAnalytics />
        <Index />
        <SiteFooter />
      </>
    );
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <FullApp />
    </Suspense>
  );
};

export default App;
