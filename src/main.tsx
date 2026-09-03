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
const prerendered = root.innerHTML;

try {
  root.innerHTML = '';
  createRoot(root).render(app);
} catch (error) {
  // Never leave a blank white page on static hosting: restore the pre-rendered
  // markup and surface the failure so it can be diagnosed from the live site.
  console.error('App failed to start', error);
  root.innerHTML = prerendered ||
    '<div style="padding:2rem;font-family:system-ui;text-align:center">' +
    '<h1>Something went wrong loading this page</h1>' +
    '<p>Please refresh. If it keeps happening, clear your browser cache.</p></div>';
}

