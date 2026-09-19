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

// The pre-rendered HTML stays on screen (and counts for FCP/LCP) until React is
// ready: createRoot replaces the container content itself at mount time, so we
// must NOT clear it up-front. Re-rendering (instead of hydrating) still avoids
// hydration mismatches from browser-only providers.
const prerendered = root.innerHTML;

try {
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

