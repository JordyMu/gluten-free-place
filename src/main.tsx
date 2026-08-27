import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const root = document.getElementById("root");

if (!root) {
  throw new Error('Application root element was not found');
}

const app = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// The pre-rendered HTML remains useful to crawlers, but some browser-only
// providers produce different initial markup during SSR. Re-rendering avoids
// unrecoverable hydration mismatches on static hosting.
root.innerHTML = '';
createRoot(root).render(app);
